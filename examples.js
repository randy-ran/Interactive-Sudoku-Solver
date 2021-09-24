const EXAMPLES = {
  // Test cases.
  'Thermosudoku': {
    src: 'https://www.youtube.com/watch?v=lgJYOuVk910',
    input:
      '.~R1C2_4~R1C8_1~R2C1_2~R2C9_6~R8C1_9~R8C9_2~R9C2_1~R9C8_9.Thermo~R9C4~R8C3~R7C2~R6C1~R5C2~R4C3.Thermo~R4C1~R3C2~R2C3~R1C4~R2C5~R3C6.Thermo~R1C6~R2C7~R3C8~R4C9~R5C8~R6C7.Thermo~R6C9~R7C8~R8C7~R9C6~R8C5~R7C4',
    solution: '847632519295471386631598247129743865486259173753816924368924751974185632512367498',
  },
  'Classic sudoku': {
    src: 'https://en.wikipedia.org/wiki/Sudoku#/media/File:Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg',
    input:
      '.~R1C1_5~R1C2_3~R1C5_7~R2C1_6~R2C4_1~R2C5_9~R2C6_5~R3C2_9~R3C3_8~R3C8_6~R4C1_8~R4C5_6~R4C9_3~R5C1_4~R5C4_8~R5C6_3~R5C9_1~R6C1_7~R6C5_2~R6C9_6~R7C2_6~R7C7_2~R7C8_8~R8C4_4~R8C5_1~R8C6_9~R8C9_5~R9C5_8~R9C8_7~R9C9_9',
    solution: '534678912672195348198342567859761423426853791713924856961537284287419635345286179',
  },
  'Classic sudoku, hard': {
    src: 'https://www.telegraph.co.uk/news/science/science-news/9359579/Worlds-hardest-sudoku-can-you-crack-it.html',
    input:
      '.~R1C1_8~R2C3_3~R2C4_6~R3C2_7~R3C5_9~R3C7_2~R4C2_5~R4C6_7~R5C5_4~R5C6_5~R5C7_7~R6C4_1~R6C8_3~R7C3_1~R7C8_6~R7C9_8~R8C3_8~R8C4_5~R8C8_1~R9C2_9~R9C7_4',
    solution: '812753649943682175675491283154237896369845721287169534521974368438526917796318452',
  },
  'Anti-knights move': {
    src: 'https://www.youtube.com/watch?v=mTdhTfAhOI8',
    input:
      '.AntiKnight.~R1C2_3~R1C5_4~R1C6_1~R1C9_7~R2C4_5~R3C4_8~R3C6_9~R4C1_6~R4C8_7~R5C9_4~R6C2_4~R7C1_3~R8C5_6~R8C8_5~R9C2_6~R9C3_4~R9C4_3',
    solution: '536241897978536241421879635613485972789623514245917368357198426892764153164352789',
  },
  'Killer sudoku': {
    src: 'https://en.wikipedia.org/wiki/Killer_sudoku#/media/File:Killersudoku_color.svg',
    input:
      '.Cage~3~R1C1~R1C2.Cage~15~R1C3~R1C4~R1C5.Cage~25~R2C1~R2C2~R3C1~R3C2.Cage~17~R2C3~R2C4.Cage~9~R3C3~R3C4~R4C4.Cage~22~R1C6~R2C5~R2C6~R3C5.Cage~4~R1C7~R2C7.Cage~16~R1C8~R2C8.Cage~15~R1C9~R2C9~R3C9~R4C9.Cage~20~R3C7~R3C8~R4C7.Cage~8~R3C6~R4C6~R5C6.Cage~17~R4C5~R5C5~R6C5.Cage~20~R5C4~R6C4~R7C4.Cage~14~R4C2~R4C3.Cage~6~R4C1~R5C1.Cage~13~R5C2~R5C3~R6C2.Cage~6~R6C3~R7C2~R7C3.Cage~17~R4C8~R5C7~R5C8.Cage~27~R6C1~R7C1~R8C1~R9C1.Cage~8~R8C2~R9C2.Cage~16~R8C3~R9C3.Cage~10~R7C5~R8C4~R8C5~R9C4.Cage~12~R5C9~R6C9.Cage~6~R6C7~R6C8.Cage~20~R6C6~R7C6~R7C7.Cage~15~R8C6~R8C7.Cage~14~R7C8~R7C9~R8C8~R8C9.Cage~13~R9C5~R9C6~R9C7.Cage~17~R9C8~R9C9',
    solution: '215647398368952174794381652586274931142593867973816425821739546659428713437165289',
  },
  'Sudoku X': {
    src: 'http://forum.enjoysudoku.com/the-hardest-sudokus-new-thread-t6539-645.html',
    input:
      '.Diagonal~1.Diagonal~-1.~R1C3_1~R1C7_2~R2C3_2~R2C4_3~R2C9_4~R3C1_4~R4C1_5~R4C3_3~R4C8_6~R5C2_1~R5C9_5~R6C3_6~R7C5_7~R7C6_8~R8C5_9~R9C2_7~R9C6_1~R9C8_9',
    solution: '681945237792316584435827619523784961817639425946152873369478152158293746274561398',
  },
  'Anti-knight Anti-king': {
    src: 'https://www.reddit.com/r/sudoku/comments/gk8si6/antiking_antiknight_sudoku_to_compliment_the/',
    input:
      '.AntiKnight.AntiKing.~R1C1_1~R1C7_5~R1C8_6~R1C9_7~R2C1_2~R2C2_3~R2C3_4~R2C9_8',
    solution: '198234567234567198567198234982345671345671982671982345823456719456719823719823456',
  },
  'Anti-knight, Anti-consecutive': {
    src: 'http://rishipuri.blogspot.com/2013/02/antiknight-nonconsecutive-sudoku-2013-2.html',
    input:
      '.AntiConsecutive.~R3C4_4~R3C6_7~R4C3_6~R4C7_5~R6C3_4~R6C7_3~R7C4_2~R7C6_5',
    solution: '973518264425963718861427953316842597758396142294751386649275831182639475537184629',
  },
  'Arrow sudoku': {
    src: 'http://sugarroad.blogspot.com/search/label/sudoku',
    input:
      '.Arrow~R1C5~R2C4~R3C3~R4C2~R5C1.Arrow~R3C7~R2C6~R3C5~R4C4~R5C3.Arrow~R6C2~R7C3~R6C4~R5C5~R4C6.Arrow~R7C4~R7C5~R7C6.Arrow~R6C7~R5C7~R4C7.Arrow~R5C9~R6C8~R7C7~R8C6~R9C5.~R1C2_6~R1C9_9~R2C1_9~R8C9_3~R9C1_4~R9C8_7',
    solution: '167584329985362417342719856718293645253647198694158732571936284829471563436825971',
  },
  'Arrow killer sudoku': {
    src: 'https://www.youtube.com/watch?v=MAxNNVEs7cE',
    input:
      '.Cage~35~R1C3~R1C2~R1C1~R2C1~R3C1~R3C2~R3C3.Cage~31~R4C3~R4C2~R4C1~R5C2~R6C2.Cage~36~R7C4~R7C3~R7C2~R8C2~R9C2~R9C3~R9C4.Cage~14~R5C4~R5C5.Cage~10~R9C8~R9C9.Thermo~R1C3~R1C2.Thermo~R8C8~R7C9~R8C9.Arrow~R2C2~R2C3~R2C4~R2C5.Arrow~R3C4~R4C4~R5C3~R6C4.Arrow~R9C6~R8C7~R8C8.Arrow~R7C6~R6C7~R5C7.Arrow~R4C6~R3C7~R2C7~R1C7.Arrow~R4C9~R5C9~R6C9.Arrow~R4C9~R3C8~R2C9.Arrow~R8C6~R8C5~R8C4',
    solution: '364792158982154673751863249618349527273685491495271386546917832839426715127538964',
  },
  'Kropki sudoku': {
    src: 'http://www.cross-plus-a.com/html/cros7dots.htm',
    input:
      '.WhiteDot~R1C2~R1C3.WhiteDot~R1C4~R1C5.WhiteDot~R2C5~R3C5.WhiteDot~R2C1~R2C2.WhiteDot~R3C2~R2C2.WhiteDot~R4C4~R4C3.WhiteDot~R5C3~R4C3.WhiteDot~R4C1~R4C2.WhiteDot~R5C1~R6C1.WhiteDot~R5C2~R6C2.WhiteDot~R7C2~R7C3.WhiteDot~R8C1~R8C2.WhiteDot~R8C3~R8C4.WhiteDot~R7C5~R7C6.WhiteDot~R8C6~R9C6.WhiteDot~R9C6~R9C7.WhiteDot~R7C8~R8C8.WhiteDot~R6C7~R6C8.WhiteDot~R4C7~R5C7.WhiteDot~R4C8~R5C8.WhiteDot~R3C9~R4C9.WhiteDot~R2C9~R3C9.WhiteDot~R5C9~R6C9.BlackDot~R1C5~R1C6.BlackDot~R2C2~R2C3.BlackDot~R4C1~R5C1.BlackDot~R9C4~R9C5.BlackDot~R6C6~R7C6.BlackDot~R5C4~R5C5.BlackDot~R8C7~R9C7.BlackDot~R5C8~R6C8.BlackDot~R4C9~R5C9.BlackDot~R2C8~R3C8.BlackDot~R3C7~R4C7',
    solution: '167324958542869731839175462674518293395247186281693547723956814458731629916482375',
  },
  'Little killer': {
    src: 'https://www.youtube.com/watch?v=y4eKdI3ZJ78',
    input:
      '.~R3C2_5~R3C7_2~R5C4_3~R5C5_7.LittleKiller~22~R1C1.LittleKiller~28~R2C1.LittleKiller~26~R3C1.LittleKiller~23~R1C5.LittleKiller~34~R1C7.LittleKiller~40~R1C8.LittleKiller~42~R1C9',
    solution: '198235764427968531653714289732186945541379826986542173865421397279653418314897652',
  },
  // This little killer has short constraints which excersizes some more code
  // paths.
  'Little killer 2': {
    src: 'https://www.youtube.com/watch?v=Kn-EI9ItMoU',
    input: '.LittleKiller~12~R9C8.LittleKiller~21~R9C7.LittleKiller~16~R9C6.LittleKiller~38~R9C5.LittleKiller~3~R2C9.LittleKiller~20~R3C9.LittleKiller~38~R5C9.LittleKiller~14~R1C2.LittleKiller~6~R1C3.LittleKiller~19~R1C4.LittleKiller~38~R1C5.LittleKiller~6~R8C1.LittleKiller~17~R7C1.LittleKiller~38~R5C1.~R1C1_4~R1C9_6~R2C8_7~R4C4_1~R5C5_2~R6C6_3~R8C2_4~R9C1_3~R9C9_2',
    solution: '483571926625948371179362854257189463834627519961453287798214635542736198316895742',
  },
  'Sandwich sudoku': {
    src: 'https://www.youtube.com/watch?v=2wfR6QIvNn4&t=4s',
    input: '.Sandwich~8~C1.Sandwich~4~C2.Sandwich~17~C3.Sandwich~35~C4.Sandwich~14~C5.Sandwich~13~C6.Sandwich~3~C7.Sandwich~10~C8.Sandwich~25~C9.Sandwich~4~R1.Sandwich~33~R2.Sandwich~20~R3.Sandwich~17~R4.Sandwich~26~R5.Sandwich~10~R6.Sandwich~16~R7.Sandwich~24~R8.Sandwich~0~R9.~R3C3_1~R5C5_5~R7C7_9',
    solution: '236941875954378612871625439182439756397856124645217398413562987569783241728194563',
  },

  // Classic grids that used to be slow. 3 and 4 used to take 2+ seconds.
  'Classic sudoku, was slow (1)': {
    input: '.~R1C1_8~R1C2_4~R1C5_6~R1C7_5~R1C9_1~R2C6_3~R2C8_4~R3C3_6~R3C4_9~R3C9_7~R4C2_2~R4C4_7~R4C5_1~R4C9_6~R5C4_6~R5C5_3~R6C1_9~R6C8_5~R7C5_4~R7C8_6~R8C1_2~R8C7_1~R8C8_8',
  },
  'Classic sudoku, was slow (2)': {
    input: '.~R1C1_4~R1C3_5~R1C4_7~R2C1_9~R2C2_2~R3C7_1~R3C8_5~R3C9_8~R4C8_6~R4C9_9~R5C2_8~R5C6_6~R5C7_7~R6C2_9~R6C9_1~R7C1_6~R7C5_9~R7C9_3~R8C6_7~R8C7_6~R9C1_5~R9C4_1~R9C9_2',
  },
  'Classic sudoku, was slow (3)': {
    src: 'norvig.com/sudoku',
    input: '.~R1C6_6~R2C2_5~R2C3_9~R2C9_8~R3C1_2~R3C6_8~R4C2_4~R4C3_5~R5C3_3~R6C3_6~R6C6_3~R6C8_5~R6C9_4~R7C4_3~R7C5_2~R7C6_5~R7C9_6',
  },
  'Classic sudoku, was slow (4)': {
    input: '.~R1C6_5~R1C8_8~R2C4_6~R2C6_1~R2C8_4~R2C9_3~R4C2_1~R4C4_5~R5C4_1~R5C6_6~R6C1_3~R6C9_5~R7C1_5~R7C2_3~R7C8_9~R7C9_1~R8C9_4',
  },

  // Slow case examples (some no longer slow).
  'Thermo, slow': {
    input: `
      .~R4C6_1~R5C3_2~R9C5_1
      .Thermo~R7C5~R7C6~R7C7~R6C7~R5C7~R4C7
      .Thermo~R4C8~R3C8~R3C7~R3C6~R3C5
      .Thermo~R2C5~R2C4~R3C4~R4C4~R5C4
      .Thermo~R2C1~R2C2~R2C3
    `,
  },
  'Anti-Knight, slow': {
    input: '.AntiKnight.~R1C2_3~R1C9_7~R3C6_9~R3C7_2~R4C1_6~R4C4_4~R5C9_5~R6C2_4~R7C1_3~R8C5_6~R8C8_5~R9C2_6~R9C3_4~R9C4_3',
  },
  'Arrow, slow': {
    input: '.Arrow~R1C2~R2C1~R3C1.Arrow~R1C3~R2C2~R1C1.Arrow~R2C5~R1C5~R2C4.Arrow~R3C7~R2C7~R1C8.Arrow~R3C9~R2C8~R3C8~R2C9.Arrow~R3C6~R4C6~R5C7.Arrow~R4C2~R4C3~R3C2.Arrow~R5C1~R5C2~R5C3.Arrow~R6C2~R7C3~R7C4.Arrow~R7C2~R6C3~R5C4.Arrow~R2C3~R3C4~R4C5~R5C6.Arrow~R7C1~R8C1~R9C2.Arrow~R9C3~R8C2~R9C1.Arrow~R9C4~R9C5~R9C6~R9C7.Arrow~R8C7~R8C8~R8C9.Arrow~R7C8~R6C7~R7C6.Arrow~R5C8~R6C8~R7C7.Arrow~R5C5~R6C6~R7C5.',
  },
  'Little killer, slow': {
    src: 'https://www.youtube.com/watch?v=RjznoTdOHRM',
    input: `.LittleKiller~20~R1C4.LittleKiller~10~R1C5.LittleKiller~21~R1C6.LittleKiller~5~R2C9.LittleKiller~12~R3C9.LittleKiller~13~R8C1.LittleKiller~16~R7C1.LittleKiller~31~R9C3.LittleKiller~15~R9C4.LittleKiller~16~R9C5`,
  },
  'Sandwich, partial, slow': {
    input: '.Sandwich~8~C1.Sandwich~4~C2.Sandwich~17~C3.Sandwich~3~C7.Sandwich~10~C8.Sandwich~25~C9.Sandwich~4~R1.Sandwich~33~R2.Sandwich~17~R4.Sandwich~16~R7.',
  },
  'Anti-consectutive, hard': {
    src: 'http://forum.enjoysudoku.com/sudokuncexplainer-to-solve-and-rate-sudoku-non-consecutive-t36949.html#p285907',
    input: '.AntiConsecutive.~R1C2_3~R2C3_6~R3C4_5~R3C8_7',
  },
  'White Room  - killer sudoku': {
    src: 'http://forum.enjoysudoku.com/new-killer-setter-t38092-15.html#p306873',
    input: '.Cage~7~R2C2~R3C2~R4C2.Cage~5~R2C6~R2C7.Cage~6~R3C7~R3C8.Cage~6~R4C6~R4C7.Cage~15~R7C9~R6C9.Cage~3~R9C7~R9C6.Cage~17~R8C3~R7C3.Cage~23~R6C3~R6C4~R7C4.',
  },

  // Extreme killers.
  'Wecoc #1': {
    src: 'http://forum.enjoysudoku.com/killing-with-flowers-t36181.html#p278651',
    input: '3x3::k:6150:6150:6401:6401:6401:6658:6658:6658:6658:6150:6401:6401:5123:4868:4868:4868:6661:6658:6150:5120:5120:5123:5123:5123:4868:6661:6661:6150:5120:5127:3336:2313:2313:5130:5130:6661:6155:5120:5127:3336:0000:1299:5130:5134:6661:6155:5127:5127:4367:4367:1299:5130:5134:6672:6155:6155:5393:5138:5138:5138:5134:5134:6672:6156:6155:5393:5393:5393:5138:6413:6413:6672:6156:6156:6156:6156:6413:6413:6413:6672:6672:',
    solution: '821376945795481362634529718183654297956712834247893156519267483478135629362948571',
  },
  'Wecoc #1 mod A': {
    src: 'http://forum.enjoysudoku.com/killing-with-flowers-t36181-15.html#p279072',
    input: '3x3::k:6144:6144:6401:6401:6401:6658:6658:6658:6658:6144:6401:6401:5123:4868:4868:4868:6661:6658:6144:5126:5126:5123:5123:5123:4868:6661:6661:6144:5126:5127:3336:2313:2313:5130:5130:6661:6155:5126:5127:3336:1555:1555:5130:5133:6661:6155:5127:5127:4366:4366:1555:5130:5133:6671:6155:6155:5392:5137:5137:5137:5133:5133:6671:6162:6155:5392:5392:5392:5137:6412:6412:6671:6162:6162:6162:6162:6412:6412:6412:6671:6671:',
    solution: '821376945795481362634529718183654297956712834247893156519267483478135629362948571',
  },
  'Wecoc #1 mod B': {
    src: 'http://forum.enjoysudoku.com/killing-with-flowers-t36181-15.html#p279072',
    input: '3x3::k:6144:6144:6401:6401:6401:6658:6658:6658:6658:6144:6401:6401:5123:4868:4868:4868:6661:6658:6144:5126:5126:5123:5123:5123:4868:6661:6661:6144:5126:5127:3342:2312:2312:5130:5130:6661:6155:5126:5127:3342:4627:1289:5130:5133:6661:6155:5127:5127:4627:4627:1289:5130:5133:6671:6155:6155:5392:5137:5137:5137:5133:5133:6671:6162:6155:5392:5392:5392:5137:6412:6412:6671:6162:6162:6162:6162:6412:6412:6412:6671:6671:',
    solution: '821376945795481362634529718183654297956712834247893156519267483478135629362948571',
  },
  'Wecoc #2': {
    src: 'http://forum.enjoysudoku.com/killing-with-flowers-t36181-15.html#p279065',
    input: '3x3::k:2561:5122:5122:6403:6403:6403:6403:2820:2820:2561:5122:5122:6403:5125:5125:5125:5126:5126:6410:5129:6408:6408:6408:5125:6407:5126:5126:6410:5129:5129:6408:6407:6407:6407:6415:6415:6410:5129:6411:6408:524:6413:6407:5134:6415:6410:6410:6411:6411:6411:6413:5134:5134:6415:5397:5397:6411:5139:6413:6413:6413:5134:6415:5397:5397:5139:5139:5139:6418:5137:5137:2832:2580:2580:6418:6418:6418:6418:5137:5137:2832:',
    solution: '863145792247869315591372486126987543739524168485631279672493851358716924914258637',
  },
  'tarek unsolvable #41': {
    src: 'http://forum.enjoysudoku.com/killing-with-flowers-t36181-15.html#p279032',
    input: '3x3::k:7168:7168:4866:4866:4866:6149:6149:6149:5128:4873:7168:7168:7168:4866:4866:6149:5128:5128:4873:4873:5908:5908:5908:5908:4888:5128:6682:4873:7196:5908:6174:4888:4888:4888:5128:6682:7196:7196:8230:6174:6174:6174:4888:6682:6682:7196:6190:8230:8230:8230:6174:7475:6682:4917:7196:6190:8230:7475:7475:7475:7475:4917:4917:6190:6190:5697:5442:5442:7236:7236:7236:4917:6190:5697:5697:5697:5442:5442:5442:7236:7236:',
    solution: '283197546967542813415368729591726384876439152324851967149275638752683491638914275',
  }
};

