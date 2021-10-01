const BOX_SIZE = 3;
const GRID_SIZE = BOX_SIZE*BOX_SIZE;
const NUM_CELLS = GRID_SIZE*GRID_SIZE;

const toValueId = (row, col, n) => {
  return id = `R${row+1}C${col+1}_${n}`;
};

const toCellId = (row, col) => {
  return id = `R${row+1}C${col+1}`;
};

const toCellIndex = (row, col) => {
  return row*GRID_SIZE+col;
};

const toRowCol = (cell) => {
  return [cell/GRID_SIZE|0, cell%GRID_SIZE|0];
};

const parseValueId = (valueId) => {
  let cellId = valueId.substr(0, 4);
  return {
    value: +valueId[5],
    cellId: cellId,
    ...parseCellId(cellId),
  };
};

const parseCellId = (cellId) => {
  let row = +cellId[1]-1;
  let col = +cellId[3]-1;
  return {
    cell: toCellIndex(row, col),
    row: row,
    col: col,
  };
};

class SudokuConstraint {
  constructor(args) {
    this.args = args ? [...args] : [];
    this.type = this.constructor.name;
  }

  static fromString(str) {
    let items = str.split('.');
    if (items[0]) throw('Invalid constraint string: ' + str);
    items.shift();

    let constraints = [];
    for (const item of items) {
      let args = item.split('~');
      let type = args.shift();
      if (!type) type = this.DEFAULT.name;
      constraints.push(new SudokuConstraint[type](...args));
    }
    return new SudokuConstraint.Set(constraints);
  }

  toString(replaceType) {
    let type = this.type;
    if (this.constructor == this.constructor.DEFAULT) type = '';
    let arr = [type, ...this.args];
    return '.' + arr.join('~');
  }

  static _parseShortKillerFormat(text) {
    if (text.length != NUM_CELLS) return null;
    // Note: The second ` is just there so my syntax highlighter is happy.
    if (!text.match(/[<V>^``]/)) return null;
    if (!text.match(/^[0-9A-Za-j^<V>``]*$/)) return null;

    // Determine the cell directions.
    let cellDirections = [];
    for (let i = 0; i < NUM_CELLS; i++) {
      switch (text[i]) {
        case 'v':
          cellDirections.push(i+GRID_SIZE);
          break;
        case '^':
          cellDirections.push(i-GRID_SIZE);
          break;
        case '<':
          cellDirections.push(i-1);
          break;
        case '>':
          cellDirections.push(i+1);
          break;
        case '`':
          cellDirections.push(i-GRID_SIZE-1);
          break;
        default:
          cellDirections.push(i);
      }
    }

    let cages = new Map();
    for (let i = 0; i < NUM_CELLS; i++) {
      let cageCell = i;
      while (cellDirections[cageCell] != cageCell) {
        cageCell = cellDirections[cageCell];
      }
      if (!cages.has(cageCell)) {
        let c = text[cageCell];
        let sum;
        if (c >= '1' && c <= '9') {
          sum = +c;
        } else if (c >= 'A' && c <= 'Z') {
          sum = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        } else if (c >= 'a' && c <= 'j') {
          sum = c.charCodeAt(0) - 'a'.charCodeAt(0) + 36;
        } else {
          // Not a valid cage, ignore.
          continue;
        }
        cages.set(cageCell, {
          sum: sum,
          cells: [],
        });
      }
      cages.get(cageCell).cells.push(toCellId(...toRowCol(i)));
    }

    let constraints = [];
    for (const config of cages.values()) {
      constraints.push(new SudokuConstraint.Cage(config.sum, ...config.cells));
    }
    return new SudokuConstraint.Set(constraints);
  }

  static _parseLongKillerFormat(text) {
    if (!text.startsWith('3x3:')) return null;

    let parts = text.split(':');
    if (parts[2] != 'k') return null;
    if (parts.length != NUM_CELLS + 4) return null;

    let cages = new Map();
    for (let i = 0; i < NUM_CELLS; i++) {
      let value = +parts[i + 3];
      let cageId = value%256;
      let cageSum = value/256|0;

      if (!cageSum) continue;

      if (!cages.has(cageId)) {
        cages.set(cageId, {sum: cageSum, cells: []});
      }
      cages.get(cageId).cells.push(toCellId(...toRowCol(i)));
    }

    let constraints = [];
    if (parts[1] == 'd') {
      constraints.push(new SudokuConstraint.Diagonal(1));
      constraints.push(new SudokuConstraint.Diagonal(-1));
    }
    for (const config of cages.values()) {
      constraints.push(new SudokuConstraint.Cage(config.sum, ...config.cells));
    }
    return new SudokuConstraint.Set(constraints);
  }

  static _parsePlainSudoku(text) {
    if (text.length != NUM_CELLS) return null;

    let fixedValues = [];
    let nonDigitCharacters = [];
    for (let i = 0; i < NUM_CELLS; i++) {
      let c = text[i];
      if (c >= '1' && c <= '9') {
        fixedValues.push(toValueId(...toRowCol(i), c));
      } else {
        nonDigitCharacters.push(c);
      }
    }
    if (new Set(nonDigitCharacters).size > 1) return null;
    return new SudokuConstraint.FixedValues(...fixedValues);
  }

  static _parseJigsaw(text) {
    if (text.length != NUM_CELLS*2) return null;

    const fixedValues = this._parsePlainSudoku(text.substr(0, NUM_CELLS));
    if (fixedValues == null) return null;
    return new SudokuConstraint.Set([
      new SudokuConstraint.Jigsaw(text.substr(NUM_CELLS)),
      fixedValues]);
  }

  static fromText(text) {
    // Remove all whitespace.
    text = text.replace(/\s+/g, '');

    let constraint;

    constraint = this._parseShortKillerFormat(text);
    if (constraint) return constraint;

    constraint = this._parseLongKillerFormat(text);
    if (constraint) return constraint;

    constraint = this._parseJigsaw(text);
    if (constraint) return constraint;

    constraint = this._parsePlainSudoku(text);
    if (constraint) return constraint;

    try {
      return SudokuConstraint.fromString(text);
    } catch (e) {
      console.log(`Unrecognised input type (${e})`);
      return null;
    }
  }

  static Set = class Set extends SudokuConstraint {
    constructor(constraints) {
      super(arguments);
      this.constraints = constraints;
    }

    toString() {
      return this.constraints.map(c => c.toString()).join('');
    }
  }

  static Jigsaw = class Jigsaw extends SudokuConstraint {
    constructor(grid) {
      super(arguments);
      this.grid = grid;
    }
  }

  static Thermo = class Thermo extends SudokuConstraint {
    constructor(...cells) {
      super(arguments);
      this.cells = cells;
    }
  }

  static Whisper = class Whisper extends SudokuConstraint {
    constructor(...cells) {
      super(arguments);
      this.cells = cells;
    }
  }

  static Palindrome = class Palindrome extends SudokuConstraint {
    constructor(...cells) {
      super(arguments);
      this.cells = cells;
    }
  }

  static AntiKnight = class AntiKnight extends SudokuConstraint {}

  static AntiKing = class AntiKing extends SudokuConstraint {}

  static AntiConsecutive = class AntiConsecutive extends SudokuConstraint {}

  static Diagonal = class Diagonal extends SudokuConstraint {
    constructor(direction) {
      super(arguments);
      this.direction = direction;
    }
  }

  static WhiteDot = class WhiteDot extends SudokuConstraint {
    constructor(...cells) {
      super(arguments);
      this.cells = cells;
    }
  }

  static BlackDot = class BlackDot extends SudokuConstraint {
    constructor(...cells) {
      super(arguments);
      this.cells = cells;
    }
  }

  static Arrow = class Arrow extends SudokuConstraint {
    constructor(...cells) {
      super(arguments);
      this.cells = cells;
    }
  }

  static Cage = class Cage extends SudokuConstraint {
    constructor(sum, ...cells) {
      super(arguments);
      this.cells = cells;
      this.sum = sum;
    }
  }

  static LittleKiller = class LittleKiller extends SudokuConstraint {
    constructor(sum, id) {
      super(arguments);
      this.id = id;
      this.sum = sum;
    }

    static CELL_MAP = (() => {
      let map = {};

      const addLittleKiller = (row, col, dr, dc) => {
        let cells = [];
        for (; row >= 0 && col >= 0 && col < GRID_SIZE && row < GRID_SIZE;
               row+=dr, col+=dc) {
          cells.push(toCellId(row, col));
        }
        map[cells[0]] = cells;
      };

      // Left side.
      for (let row=0; row < GRID_SIZE-1; row++) addLittleKiller(row, 0, 1, 1);
      // Right side.
      for (let row=1; row < GRID_SIZE-1; row++) addLittleKiller(row, GRID_SIZE-1, -1, -1);
      // Top side.
      for (let col=1; col < GRID_SIZE; col++) addLittleKiller(0, col, 1, -1);
      // Bottom side.
      for (let col=1; col < GRID_SIZE-1; col++) addLittleKiller(GRID_SIZE-1, col, -1, 1);

      return map;
    })();
  }

  static Sandwich = class Sandwich extends SudokuConstraint {
    constructor(sum, id) {
      super(arguments);
      this.id = id;
      this.sum = sum;
    }

    static CELL_MAP = (() => {
      let map = {};

      const addSandwich = (name, row, col, dr, dc) => {
        let cells = [];
        for (; col < GRID_SIZE && row < GRID_SIZE;
               row+=dr, col+=dc) {
          cells.push(toCellId(row, col));
        }
        map[name] = cells;
      };

      for (let row=0; row < GRID_SIZE; row++) {
        addSandwich(`R${row+1}`, row, 0, 0, 1);
      }
      for (let col=0; col < GRID_SIZE; col++) {
        addSandwich(`C${col+1}`, 0, col, 1, 0);
      }

      return map;
    })();
  }

  static AllDifferent = class AllDifferent extends SudokuConstraint {
    constructor(...cells) {
      super(arguments);
      this.cells = cells;
    }
  }

  static FixedValues = class FixedValues extends SudokuConstraint {
    constructor(...values) {
      super(arguments);
      this.values = values;
    }
  }

  static DEFAULT = this.FixedValues;
}

class SudokuBuilder {
  static build(constraint) {
    return new SudokuSolver(SudokuBuilder._handlers(constraint));
  }

  // Ask for a state update every 2**14 iterations.
  // NOTE: Using a non-power of 10 makes the display loook faster :)
  static LOG_UPDATE_FREQUENCY = 14;
  static CACHE_BUST_PARAM = `cachebuster=${Math.random()}`;

  static _unusedWorkers = [];

  static async buildInWorker(constraints, stateHandler) {
    if (!this._unusedWorkers.length) {
      this._unusedWorkers.push(new Worker('js/worker.js?' + this.CACHE_BUST_PARAM));
    }
    let worker = this._unusedWorkers.pop();
    worker.release = () => this._unusedWorkers.push(worker);

    let solverProxy = new SolverProxy(stateHandler, worker);

    await solverProxy.init(constraints, this.LOG_UPDATE_FREQUENCY);

    return solverProxy;
  }

  static hasJigsaw(constraint) {
    switch (constraint.type) {
      case 'Jigsaw':
        return true;
      case 'Set':
        return constraint.constraints.some(c => this.hasJigsaw(c));
    }
    return false;
  }

  static *_handlers(constraint) {
    yield* SudokuBuilder._rowColHandlers();
    yield* SudokuBuilder._constraintHandlers(constraint);
    if (!this.hasJigsaw(constraint)) {
      yield* SudokuBuilder._boxHandlers();
    }
  }

  static *_rowColHandlers() {
    // Row constraints.
    for (let row = 0; row < GRID_SIZE; row++) {
      let cells = [];
      for (let col = 0; col < GRID_SIZE; col++) {
        cells.push(toCellIndex(row, col));
      }
      yield new SudokuConstraintHandler.Nonet(cells);
    }

    // Column constraints.
    for (let col = 0; col < GRID_SIZE; col++) {
      let cells = [];
      for (let row = 0; row < GRID_SIZE; row++) {
        cells.push(toCellIndex(row, col));
      }
      yield new SudokuConstraintHandler.Nonet(cells);
    }
  }

  static *_boxHandlers() {
    // Box constraints.
    for (let b = 0; b < GRID_SIZE; b++) {
      let bi = b/BOX_SIZE|0;
      let bj = b%BOX_SIZE|0;
      let cells = [];
      for (let c = 0; c < GRID_SIZE; c++) {
        let row = BOX_SIZE*bi+(c%BOX_SIZE|0);
        let col = BOX_SIZE*bj+(c/BOX_SIZE|0);
        cells.push(toCellIndex(row, col));
      }
      yield new SudokuConstraintHandler.Nonet(cells);
    }
  }

  static *_constraintHandlers(constraint) {
    let cells;
    switch (constraint.type) {
      case 'AntiKnight':
        yield* this._antiHandlers(
          (r, c) => [[r+1, c+2], [r+2, c+1], [r+1, c-2], [r+2, c-1]]);
        break;

      case 'AntiKing':
        yield* this._antiHandlers((r, c) => [[r+1, c+1], [r+1, c-1]]);
        break;

      case 'AntiConsecutive':
        yield* this._antiConsecutiveHandlers();
        break;

      case 'Jigsaw':
        const grid = constraint.grid;
        const map = new Map();
        for (let i = 0; i < NUM_CELLS; i++) {
          const v = grid[i];
          if (!map.has(v)) map.set(v, []);
          map.get(v).push(i);
        }

        for (const [_, cells] of map) {
          if (cells.length == GRID_SIZE) {
            yield new SudokuConstraintHandler.AllDifferent(cells);
          }
        }

        // Just to let the solver know that this is a jigsaw puzzle.
        yield new SudokuConstraintHandler.Jigsaw();
        break;

      case 'Diagonal':
        cells = [];
        for (let r = 0; r < GRID_SIZE; r++) {
          let c = constraint.direction > 0 ? GRID_SIZE-r-1 : r;
          cells.push(toCellIndex(r, c));
        }
        yield new SudokuConstraintHandler.AllDifferent(cells);
        break;

      case 'Arrow':
        cells = constraint.cells.map(c => parseCellId(c).cell);
        yield new SudokuConstraintHandler.CellDepedentSum(cells, 0);
        break;

      case 'Cage':
        cells = constraint.cells.map(c => parseCellId(c).cell);
        yield new SudokuConstraintHandler.Sum(cells, constraint.sum);
        yield new SudokuConstraintHandler.AllDifferent(cells);
        break;

      case 'LittleKiller':
        cells = SudokuConstraint.LittleKiller
          .CELL_MAP[constraint.id].map(c => parseCellId(c).cell);
        yield new SudokuConstraintHandler.Sum(cells, constraint.sum);
        break;

      case 'Sandwich':
        cells = SudokuConstraint.Sandwich
          .CELL_MAP[constraint.id].map(c => parseCellId(c).cell);
        yield new SudokuConstraintHandler.Sandwich(cells, constraint.sum);
        break;

      case 'AllDifferent':
        cells = constraint.cells.map(c => parseCellId(c).cell);
        yield new SudokuConstraintHandler.AllDifferent(cells);
        break;

      case 'FixedValues':
        let valueMap = new Map();
        for (const valueId of constraint.values) {
          let {cell, value} = parseValueId(valueId);
          valueMap.set(cell, value);
        }
        yield new SudokuConstraintHandler.FixedCells(valueMap);
        break;

      case 'Thermo':
        cells = constraint.cells.map(c => parseCellId(c).cell);
        for (let i = 1; i < cells.length; i++) {
          yield new SudokuConstraintHandler.BinaryConstraint(
            cells[i-1], cells[i], (a, b) => a < b);
        }
        break;

      case 'Whisper':
        cells = constraint.cells.map(c => parseCellId(c).cell);
        for (let i = 1; i < cells.length; i++) {
          yield new SudokuConstraintHandler.BinaryConstraint(
            cells[i-1], cells[i], (a, b) => a >= b+5 || a <= b-5);
        }
        break;

      case 'Palindrome':
        cells = constraint.cells.map(c => parseCellId(c).cell);
        const numCells = cells.length;
        for (let i = 0; i < numCells/2; i++) {
          yield new SudokuConstraintHandler.BinaryConstraint(
            cells[i], cells[numCells-1-i], (a, b) => a == b);
        }
        break;

      case 'Set':
        for (const c of constraint.constraints) {
          yield* this._constraintHandlers(c);
        }
        break;

      case 'WhiteDot':
        cells = constraint.cells.map(c => parseCellId(c).cell);
        yield new SudokuConstraintHandler.BinaryConstraint(
          cells[0], cells[1], (a, b) => a == b+1 || a == b-1);
        break;

      case 'BlackDot':
        cells = constraint.cells.map(c => parseCellId(c).cell);
        yield new SudokuConstraintHandler.BinaryConstraint(
          cells[0], cells[1], (a, b) => a == b*2 || b == a*2);
        break;

      default:
        throw('Unknown constraint type: ' + constraint.type);
    }
  }

  static *_antiHandlers(conflictFn) {
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        let cell = toCellIndex(r, c);
        // We only need half the constraints, as the other half will be
        // added by the conflict cell.
        for (const [rr, cc] of conflictFn(r, c)) {
          if (rr < 0 || rr >= GRID_SIZE || cc < 0 || cc >= GRID_SIZE) continue;
          let conflict = toCellIndex(rr, cc);
          yield new SudokuConstraintHandler.AllDifferent([cell, conflict]);
        }
      }
    }
  }

  static *_antiConsecutiveHandlers() {
    const adjacentCellsFn = (r, c) => [[r+1, c], [r, c+1]];
    const constraintFn = (a, b) => (a != b+1 && a != b-1 && a != b);

    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        let cell = toCellIndex(r, c);
        for (const [rr, cc] of adjacentCellsFn(r, c)) {
          if (rr < 0 || rr >= GRID_SIZE || cc < 0 || cc >= GRID_SIZE) continue;
          let conflict = toCellIndex(rr, cc);
          yield new SudokuConstraintHandler.BinaryConstraint(
            cell, conflict, constraintFn);
        }
      }
    }
  }
}

class SolverProxy {
  constructor(stateHandler, worker) {
    if (!worker) {
      throw('Call SolverProxy.make()');
    }

    this._worker = worker;
    this._messageHandler = (msg) => this._handleMessage(msg);
    this._worker.addEventListener('message', this._messageHandler);
    this._waiting = null;

    this._initialized = false;
    this._stateHandler = stateHandler || (() => null);
  }

  async solveAllPossibilities() {
    return this._callWorker('solveAllPossibilities');
  }

  async nthSolution(n) {
    return this._callWorker('nthSolution', n);
  }

  async nthStep(n) {
    return this._callWorker('nthStep', n);
  }

  async countSolutions() {
    return this._callWorker('countSolutions');
  }

  _handleMessage(response) {
    let data = response.data;

    switch (data.type) {
      case 'result':
        this._waiting.resolve(data.result);
        this._waiting = null;
        break;
      case 'exception':
        this._waiting.reject(data.error);
        this._waiting = null;
        break;
      case 'state':
        this._stateHandler(data.state);
        break;
    }
  }

  _callWorker(method, payload) {
    if (!this._initialized) {
      throw(`SolverProxy not initialized.`);
    }
    if (!this._worker) {
      throw(`SolverProxy has been terminated.`);
    }
    if (this._waiting) {
      throw(`Can't call worker while a method is in progress. (${this._waiting.method})`);
    }

    let promise = new Promise((resolve, reject) => {
      this._waiting = {
        method: method,
        payload: payload,
        resolve: resolve,
        reject: reject,
      }
    });

    this._worker.postMessage({
      method: method,
      payload: payload,
    });

    return promise;
  }

  async init(constraint, logUpdateFrequency) {
    this._initialized = true;
    await this._callWorker('init', {
      constraint: constraint,
      logUpdateFrequency: logUpdateFrequency,
    });
  }

  terminate() {
    if (!this._worker) return;

    this._worker.removeEventListener('message', this._messageHandler);
    // If we are waiting, we have to kill it because we don't know how long
    // we'll be waiting. Otherwise we can just release it to be reused.
    if (this._waiting) {
      this._worker.terminate();
      this._waiting.reject('Aborted');
    } else {
      this._worker.release();
    }
    this._worker = null;
  }
};
