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
  'Killer sudoku, hard': {
    src: 'http://forum.enjoysudoku.com/killing-with-flowers-t36181-15.html#p279032',
    input: 'S<J<<O<<KJ^<<^<^>^^<N<<<J^Q^S^O>>^^^>^W^<<^>^^O^<<^T^J^^^>>>^>^>^ML<S<<^^>^<^<<^<',
    solution: '283197546967542813415368729591726384876439152324851967149275638752683491638914275',
  },
  'Killer sudoku, with overlap': {
    // Same as 'Killer sudoku, but with overlapping (redundant) sums.
    input:
      '.Cage~3~R1C1~R1C2.Cage~15~R1C3~R1C4~R1C5.Cage~25~R2C1~R2C2~R3C1~R3C2.Cage~17~R2C3~R2C4.Cage~9~R3C3~R3C4~R4C4.Cage~22~R1C6~R2C5~R2C6~R3C5.Cage~4~R1C7~R2C7.Cage~16~R1C8~R2C8.Cage~15~R1C9~R2C9~R3C9~R4C9.Cage~20~R3C7~R3C8~R4C7.Cage~8~R3C6~R4C6~R5C6.Cage~17~R4C5~R5C5~R6C5.Cage~20~R5C4~R6C4~R7C4.Cage~14~R4C2~R4C3.Cage~6~R4C1~R5C1.Cage~13~R5C2~R5C3~R6C2.Cage~6~R6C3~R7C2~R7C3.Cage~17~R4C8~R5C7~R5C8.Cage~27~R6C1~R7C1~R8C1~R9C1.Cage~8~R8C2~R9C2.Cage~16~R8C3~R9C3.Cage~10~R7C5~R8C4~R8C5~R9C4.Cage~12~R5C9~R6C9.Cage~6~R6C7~R6C8.Cage~20~R6C6~R7C6~R7C7.Cage~15~R8C6~R8C7.Cage~14~R7C8~R7C9~R8C8~R8C9.Cage~13~R9C5~R9C6~R9C7.Cage~17~R9C8~R9C9.Cage~9~R1C5~R2C5.',
    solution: '215647398368952174794381652586274931142593867973816425821739546659428713437165289',
  },
  'Killer sudoku, with gaps': {
    // Same as 'Killer sudoku, but with gaps for the optimizer to fill.
    input:
      '.Cage~17~R2C3~R2C4.Cage~9~R3C3~R3C4~R4C4.Cage~22~R1C6~R2C5~R2C6~R3C5.Cage~4~R1C7~R2C7.Cage~16~R1C8~R2C8.Cage~15~R1C9~R2C9~R3C9~R4C9.Cage~20~R3C7~R3C8~R4C7.Cage~17~R4C5~R5C5~R6C5.Cage~20~R5C4~R6C4~R7C4.Cage~14~R4C2~R4C3.Cage~6~R4C1~R5C1.Cage~13~R5C2~R5C3~R6C2.Cage~6~R6C3~R7C2~R7C3.Cage~17~R4C8~R5C7~R5C8.Cage~27~R6C1~R7C1~R8C1~R9C1.Cage~8~R8C2~R9C2.Cage~16~R8C3~R9C3.Cage~10~R7C5~R8C4~R8C5~R9C4.Cage~12~R5C9~R6C9.Cage~6~R6C7~R6C8.Cage~20~R6C6~R7C6~R7C7.Cage~15~R8C6~R8C7.Cage~14~R7C8~R7C9~R8C8~R8C9.Cage~13~R9C5~R9C6~R9C7.Cage~17~R9C8~R9C9.',
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
      '.AntiKnight.AntiConsecutive.~R3C4_4~R3C6_7~R4C3_6~R4C7_5~R6C3_4~R6C7_3~R7C4_2~R7C6_5',
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
  // This is the same as the 'Little Killer' above, but the 23 LK is replaced with a Sum.
  'Little killer - Sum': {
    src: 'https://www.youtube.com/watch?v=y4eKdI3ZJ78',
    input:
      '.LittleKiller~22~R1C1.LittleKiller~28~R2C1.LittleKiller~26~R3C1.LittleKiller~34~R1C7.LittleKiller~40~R1C8.LittleKiller~42~R1C9.~R3C2_5~R3C7_2~R5C4_3~R5C5_7.Sum~23~R1C5~R2C4~R3C3~R4C2~R5C1',
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
  'German whispers': {
    src: 'https://www.youtube.com/watch?v=nH3vat8z9uM',
    input: '.Whisper~R8C1~R7C1~R7C2~R8C3~R9C3~R9C2.Whisper~R9C6~R8C7~R7C7~R7C8~R6C9~R5C8.Whisper~R6C3~R5C2~R4C3~R3C4~R2C5~R1C6~R1C7~R2C8~R3C8~R4C7~R5C6~R6C6~R7C6~R8C5~R7C4.Whisper~R4C5~R4C6~R3C7.~R1C5_1~R2C2_5~R5C1_6~R5C9_9~R7C3_3~R8C8_3~R9C1_5~R9C5_3',
    solution: '796413852352689417184275693247591386615348279839762541923857164478126935561934728',
  },
  'International whispers': {
    src: 'https://www.youtube.com/watch?v=5xu7OpQogfo',
    input: '.WhiteDot~R8C9~R9C9.WhiteDot~R7C9~R7C8.WhiteDot~R8C4~R8C5.WhiteDot~R5C2~R5C1.WhiteDot~R5C2~R6C2.WhiteDot~R6C6~R6C5.WhiteDot~R5C8~R5C7.WhiteDot~R2C4~R2C5.WhiteDot~R2C2~R2C1.Whisper~6~R1C2~R2C2~R3C2.Whisper~6~R2C1~R3C2~R4C3.Whisper~6~R2C3~R3C2~R4C1.Whisper~4~R7C2~R8C2~R9C2.Whisper~4~R8C1~R8C2~R8C3.Whisper~4~R9C1~R9C2~R9C3.Whisper~2~R9C7~R9C8~R8C8~R7C8~R6C8.Whisper~2~R7C7~R7C8~R8C9.Whisper~2~R8C7~R7C8~R6C9.Whisper~4~R4C7~R3C8~R4C9.Whisper~4~R3C8~R2C8~R1C8.Whisper~4~R1C7~R1C8~R1C9.Whisper~4~R2C7~R2C8~R2C9.Whisper~3~R4C5~R5C5~R6C5~R7C5.Whisper~3~R5C4~R5C5~R5C6.Whisper~3~R6C4~R5C5~R6C6.~R1C3_6~R4C4_3~R7C1_4~R9C9_2~R4C8_4',
    solution: '536971284897234516214856793768392145342518679951467328485123967629785431173649852',
  },
  'Renban': {
    src: 'https://www.youtube.com/watch?v=XouRUgRsVSA',
    input: '.Renban~R4C8~R4C9~R5C9~R6C9.Renban~R7C9~R8C9~R9C9~R9C8.Renban~R6C7~R7C7~R8C7~R8C6.Renban~R2C6~R1C6~R1C5~R1C4.Renban~R2C1~R1C1~R1C2~R1C3.Renban~R2C3~R2C4~R3C4~R4C4.Renban~R5C5~R5C6~R6C6~R7C6.Renban~R5C4~R5C3~R6C3~R7C3.Renban~R3C1~R4C1~R5C1~R5C2.Renban~R7C1~R8C1~R9C1~R9C2.Renban~R7C4~R8C4~R9C4~R9C3.~R3C7_1.BlackDot~R2C9~R3C9.BlackDot~R1C7~R1C8.BlackDot~R3C6~R3C5.BlackDot~R4C7~R5C7',
    solution: '132769845496518723758342196815473269963285417274196358521937684389624571647851932',
  },
  'Palindromes': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0001WP',
    input: '.Palindrome~R7C1~R6C2~R5C1~R4C2~R3C3~R2C4~R1C5~R2C6~R1C7.Palindrome~R9C3~R8C4~R9C5~R8C6~R7C7~R6C8~R5C9~R4C8~R3C9.Palindrome~R7C4~R7C5~R7C6~R6C7~R5C7~R4C7.Palindrome~R3C6~R3C5~R3C4~R4C3~R5C3~R6C3.~R1C1_6~R1C9_5~R2C3_8~R2C5_5~R2C7_9~R4C1_8~R4C5_1~R4C9_3~R5C5_4~R6C5_2~R8C1_9~R8C3_7~R8C7_8~R8C9_2~R9C2_5~R9C8_6',
    solution: '694178235128453976375296481842619753719345628536827149283761594967534812451982367',
  },
  'Jigsaw': {
    src: 'https://www.youtube.com/watch?v=wuduuLVGKDQ',
    input: '.NoBoxes.Jigsaw~000000021453303021453333221453322221455566121445666111445566667488887777888887777.~R1C1_3~R1C9_7~R2C1_1~R2C9_5~R3C5_6~R3C6_8~R4C3_5~R4C5_1~R4C6_9~R5C4_9~R6C9_2~R7C1_8~R7C6_3~R8C4_2~R8C5_3~R8C6_5~R8C9_1~R9C8_9',
    solution: '364891527189374265542168739625719843213987456937456182876523914498235671751642398',
  },
  'Between lines': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0002KO',
    input: '.Between~R9C5~R8C6~R7C7~R6C8~R5C9.Between~R9C3~R8C4~R7C5~R6C6~R5C7~R4C8~R3C9.Between~R1C9~R2C8~R3C7~R4C6~R5C5~R6C4~R7C3~R8C2~R9C1.Between~R5C1~R4C2~R3C3~R2C4~R1C5.Between~R7C1~R6C2~R5C3~R4C4~R3C5~R2C6~R1C7.~R1C2_9~R2C1_2~R2C7_1~R4C3_6~R4C5_7~R4C8_5~R5C2_3~R5C8_8~R6C5_5~R6C7_2~R8C3_9~R8C9_8~R9C8_1',
    solution: '697531842258497163314862579846273951532149786971658234125386497469715328783924615',
  },
  'Region sum lines': {
    src: 'https://www.youtube.com/watch?v=7UZKP82Em14',
    input: '.RegionSumLine~R1C2~R2C2~R3C2~R4C2~R5C2.RegionSumLine~R1C3~R2C4~R3C5.RegionSumLine~R6C1~R7C1~R8C1.RegionSumLine~R7C2~R6C3~R5C4~R4C5~R3C6~R2C7~R1C8.RegionSumLine~R2C8~R3C7~R4C6~R5C5~R6C4~R7C3~R8C2.RegionSumLine~R3C8~R4C7~R5C6~R6C5~R7C4~R8C3~R9C2.RegionSumLine~R3C9~R4C8~R5C7~R6C6~R7C5~R8C4~R9C3.RegionSumLine~R5C9~R6C8~R7C7~R8C6~R9C5.',
    solution: '847925163965137284312468579693854712421376895758219346586743921274591638139682457',
  },
  'Region sum lines, hard': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=00098I',
    input: '.RegionSumLine~R1C5~R1C6~R1C7~R2C7~R3C7~R2C8~R2C9.RegionSumLine~R1C4~R2C4~R3C4~R3C5~R4C5~R4C6~R3C6~R2C6~R2C5.RegionSumLine~R3C3~R4C4~R5C5~R6C6~R7C7.RegionSumLine~R6C7~R7C8~R7C9.RegionSumLine~R7C5~R7C6~R8C7.RegionSumLine~R9C2~R8C2~R7C3~R7C2~R7C1~R6C1~R5C1.RegionSumLine~R5C2~R6C2~R6C3~R6C4~R5C4~R5C3~R4C3~R4C2~R4C1.~R1C1_1~R6C9_4~R9C9_3~R9C6_5',
    solution: '163598247298417635547236198482159376671843529935762814354981762826374951719625483',
  },
  'XV-sudoku': {
    src: 'https://sudoku.today/g-xv-sudoku/18394f5536c.html',
    input: '.V~R2C3~R2C4.V~R3C4~R3C5.V~R3C4~R4C4.V~R6C4~R6C5.V~R7C5~R7C6.V~R8C1~R9C1.X~R5C3~R5C4.X~R9C8~R9C9.X~R6C7~R6C8.~R1C2_3~R6C1_1~R6C2_8~R4C3_6~R7C3_8~R9C3_9~R9C1_2~R8C5_2~R7C5_1~R7C4_9~R9C8_6~R6C7_6~R4C8_3~R4C9_8~R3C5_4~R3C6_5~R2C5_8~R1C7_8~R3C7_2~R1C9_5',
    solution: '431692875592387416867145293726451938943768521185239647678914352314526789259873164',
  },
  'XV-kropki': {
    src: 'https://www.youtube.com/watch?v=TT-6BfDeCdc',
    input: '.X~R2C1~R2C2.X~R3C1~R3C2.X~R1C8~R1C7.X~R2C7~R2C8.X~R7C8~R8C8.X~R7C9~R8C9.X~R8C3~R9C3.X~R8C2~R9C2.X~R5C4~R5C5.V~R8C2~R8C3.V~R8C8~R8C9.V~R2C1~R3C1.V~R1C7~R2C7.BlackDot~R2C5~R2C6.BlackDot~R4C6~R5C6.BlackDot~R5C6~R6C6.BlackDot~R3C1~R4C1.WhiteDot~R3C3~R3C2.WhiteDot~R4C3~R5C3.WhiteDot~R8C4~R8C5.WhiteDot~R8C6~R8C7.WhiteDot~R5C2~R6C2',
    solution: '195287463284536197376149825657912384918374256423658719532461978741895632869723541',
  },
  'Strict kropki': {
    src: 'https://www.youtube.com/watch?v=z6S0Dmc1EZA',
    input: '.BlackDot~R1C6~R1C7.BlackDot~R2C7~R1C7.BlackDot~R8C7~R9C7.BlackDot~R9C6~R9C7.BlackDot~R4C8~R5C8.BlackDot~R4C8~R4C9.BlackDot~R6C6~R6C5.BlackDot~R6C5~R7C5.BlackDot~R7C5~R7C4.BlackDot~R9C3~R9C4.BlackDot~R8C3~R9C3.BlackDot~R5C1~R5C2.BlackDot~R4C5~R5C5.WhiteDot~R1C1~R1C2.WhiteDot~R2C1~R2C2.WhiteDot~R1C8~R2C8.WhiteDot~R1C6~R2C6.WhiteDot~R3C5~R3C4.WhiteDot~R3C4~R4C4.WhiteDot~R4C4~R4C5.WhiteDot~R5C6~R5C7.WhiteDot~R4C7~R5C7.WhiteDot~R5C8~R5C9.WhiteDot~R7C8~R7C9.WhiteDot~R8C8~R8C9.WhiteDot~R8C5~R8C6.WhiteDot~R8C3~R8C2.WhiteDot~R7C1~R8C1.WhiteDot~R6C2~R6C3.WhiteDot~R5C2~R6C2.WhiteDot~R5C1~R6C1.WhiteDot~R5C2~R5C3.WhiteDot~R3C9~R4C9.StrictKropki.~R6C1_7',
    solution: '983162475451793862627458319169325748845917623732684951316249587298576134574831296',
  },
  'Strict XV': {
    src: 'https://www.youtube.com/watch?v=1lMgsCRoD2g',
    input: '.X~R2C1~R3C1.X~R1C3~R2C3.X~R1C8~R1C9.X~R3C8~R3C9.X~R3C6~R3C7.X~R5C6~R5C5.X~R7C8~R8C8.X~R7C9~R8C9.X~R7C4~R7C5.X~R6C3~R6C4.X~R7C3~R8C3.X~R6C2~R7C2.X~R8C4~R9C4.V~R7C3~R7C4.V~R4C1~R5C1.V~R5C7~R5C8.V~R2C8~R2C9.StrictXV.~R8C5_2~R2C5_1',
    solution: '683472519947516832152983764361849275295637148478251396834195627516724983729368451',
  },
  'Disjoint little killer': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0006TM',
    input: '.DisjointSets.LittleKiller~62~R1C9.LittleKiller~33~R1C1.LittleKiller~12~R1C3.LittleKiller~14~R3C9.LittleKiller~21~R9C7.LittleKiller~36~R9C5.LittleKiller~8~R7C1.LittleKiller~9~R1C2.',
    solution: '325784169719625483684319725843297651592861347167543298478932516236158974951476832',
  },
  'Hailstone - little killer': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0008H3',
    input: '..Cage~14~R5C3~R5C4~R6C4.Cage~19~R6C6~R6C5~R7C5.Cage~14~R4C4~R4C5~R3C5.Cage~14~R4C6~R5C6~R5C7.Diagonal~1.Diagonal~-1.LittleKiller~47~R3C1.LittleKiller~49~R2C1.LittleKiller~30~R8C9.LittleKiller~45~R7C9.LittleKiller~43~R1C7.LittleKiller~44~R1C8.LittleKiller~34~R9C2.LittleKiller~52~R9C3',
    solution: '815432976763918245942567318278351694154896732396274581437685129681729453529143867',
  },
  'Hailstone (easier) - little killer': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0008H3',
    input: '..Cage~14~R5C3~R5C4~R6C4.Cage~19~R6C6~R6C5~R7C5.Cage~14~R4C4~R4C5~R3C5.Cage~14~R4C6~R5C6~R5C7.Diagonal~1.Diagonal~-1.LittleKiller~47~R3C1.LittleKiller~49~R2C1.LittleKiller~30~R8C9.LittleKiller~45~R7C9.LittleKiller~43~R1C7.LittleKiller~44~R1C8.LittleKiller~34~R9C2.LittleKiller~52~R9C3.~R1C5_3~R9C5_4~R5C1_1~R5C9_2',
    solution: '815432976763918245942567318278351694154896732396274581437685129681729453529143867',
  },
  'X-Sum': {
    src: 'https://www.youtube.com/watch?v=fnCzYnsC4Ow',
    input: '.XSum~C2~27~27.XSum~C4~11~11.XSum~C6~21~0.XSum~C7~16~16.XSum~R2~8~8.XSum~R4~17~17.XSum~R6~30~30.XSum~R8~28~28.',
    solution: '856214379341975862792863541417529683985631724623487195274156938539748216168392457',
  },
  'X-Sum little killer': {
    input: '.LittleKiller~23~R1C1.LittleKiller~12~R2C9.LittleKiller~23~R3C9.LittleKiller~25~R5C9.LittleKiller~12~R7C1.LittleKiller~25~R1C6.~R7C2_2~R7C8_5.XSum~C1~25~23.XSum~C5~12~25.XSum~C9~23~12',
    solution: '562831974837429165941576238195384726286715349473692581329168457758943612614257893',
  },
  'Skyscraper': {
    src: 'https://www.youtube.com/watch?v=rLlZA5ZND00',
    input: '.~R1C1_1~R1C6_2~R1C9_8~R3C1_3~R3C4_6~R3C7_4~R5C1_5~R5C3_2~R5C6_3~R7C1_7~R7C4_8~R7C7_2~R9C9_6~R9C6_4~R9C1_9.Skyscraper~c5~5.Skyscraper~r2~2.Skyscraper~r4~4.Skyscraper~r6~6.Skyscraper~r8~8',
    solution: '147932658826145937359678412678419325592783164413256789765891243234567891981324576',
  },
  'Skyscraper - all 6': {
    src: 'https://sudokutheory.com/wiki/index.php?title=Snipes#Skyscrapers',
    input: '.Skyscraper~c1~6.Skyscraper~c3~6.Skyscraper~c6~6.Skyscraper~r5~6.Skyscraper~r8~6.Skyscraper~r1~0~6.Skyscraper~r4~0~6.Skyscraper~r7~0~6.Skyscraper~c2~0~6.Skyscraper~c4~0~6',
    solution: '491872653582631974673495218714986532356724189829513746968357421145268397237149865',
  },
  'Skyscraper - all 5': {
    src: 'https://sudokutheory.com/wiki/index.php?title=Snipes#Skyscrapers',
    input: '.Skyscraper~C1~5~.Skyscraper~C4~5~.Skyscraper~C7~5~.Skyscraper~C9~5~.Skyscraper~R2~~5.Skyscraper~R5~~5.Skyscraper~R7~~5.Skyscraper~C6~~5.Skyscraper~C5~~5.Skyscraper~C3~~5.Skyscraper~C2~~5.Skyscraper~R8~5~.Skyscraper~R6~5~.Skyscraper~R4~5~.Skyscraper~R1~5~.',
    solution: '357486192498127365621395487234519678789643521516278934975864213163752849842931756',
  },
  'Renban skyscrapers': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0007TV',
    input: '.Renban~R2C1~R3C1~R4C1~R4C2.Renban~R3C3~R4C3~R5C3~R6C3.Renban~R2C5~R3C5.Renban~R6C4~R5C4~R4C4~R4C5~R4C6.Renban~R9C1~R8C1~R8C2~R9C3.Renban~R9C7~R8C8~R8C9~R9C9.Renban~R7C4~R7C5~R7C6~R6C6~R5C6.Renban~R3C7~R4C7~R5C7~R5C8~R5C9.Renban~R2C7~R2C8~R2C9~R3C9~R4C9..Skyscraper~c2~3~4.Skyscraper~c4~0~3.Skyscraper~c6~4.Skyscraper~c7~5.Skyscraper~c8~4~4.Skyscraper~c9~0~5.Skyscraper~r1~3~6.Skyscraper~r3~4.Skyscraper~r5~3~3.Skyscraper~r6~5.Skyscraper~r8~4.Skyscraper~r9~4~3',
    solution: '359876142821943567674152389795634218183297456246518793932465871468721935517389624',
  },
  'Global entropy': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0008G7',
    input: '.~R1C1_8~R1C9_7~R3C4_9~R3C6_5~R4C6_8~R4C4_6~R4C3_5~R6C3_6~R6C4_1~R7C4_7~R7C6_3~R6C6_9~R6C7_4~R4C7_9~R9C9_4~R9C1_2.GlobalEntropy',
    solution: '891234567534867291672915348315648972948372615726159483459783126183426759267591834',
  },
  'Odd even': {
    src: 'https://www.youtube.com/watch?v=Q7hhVgE8zGM',
    input: '.~R1C6_7~R1C7_2~R1C8_1~R1C9_6~R2C9_5~R2C8_7~R2C7_9~R2C6_4~R8C1_2~R8C2_7~R8C3_4~R8C4_5~R9C1_9~R9C2_5~R9C3_8~R9C4_2~R4C7_2_4_6_8~R4C8_2_4_6_8~R5C6_2_4_6_8~R6C6_2_4_6_8~R6C7_2_4_6_8~R6C8_2_4_6_8~R7C6_2_4_6_8~R8C7_2_4_6_8~R8C8_2_4_6_8~R2C3_1_3_5_7_9~R3C2_1_3_5_7_9~R4C4_1_3_5_7_9~R4C2_1_3_5_7_9~R5C4_1_3_5_7_9~R5C2_1_3_5_7_9~R3C4_1_3_5_7_9~R6C3_1_3_5_7_9',
    solution: '549837216823614975716925348635149827492786153187352469361478592274593681958261734',
  },
  'Quadruple X': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=00040T',
    input: '.Diagonal~1.Diagonal~-1..Quad~R1C1~1~4~6~7.Quad~R5C1~2~3.Quad~R6C1~1~2.Quad~R3C3~1~2~4~8.Quad~R6C3~3~5~8~9.Quad~R2C4~6~7.Quad~R7C5~3~6.Quad~R3C6~4~5~8~9.Quad~R6C6~2~3~6~7.Quad~R3C8~1~2.Quad~R4C8~1~5.Quad~R8C8~2~3~4~5',
    solution: '762384591415729368398165427654278913837691245129543786543812679971436852286957134',
  },
  'Quadruple - repeated values': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=00022p&chlang=en',
    input: '.Quad~R1C1~1~2~3~4.Quad~R1C8~6~7~8~9.Quad~R2C2~4~5~6~7.Quad~R2C7~3~4~5~6.Quad~R3C3~1~3~5~6.Quad~R3C6~4~7~7~8.Quad~R6C1~4~5~5~9.Quad~R6C8~2~4~7~8.Quad~R7C3~3~4~6~8.Quad~R7C6~2~2~5~6',
    solution: '239456187147283569865197432926348715378521946451769328593812674784635291612974853',
  },
  'Heat up - global entropy': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000FZ4',
    input: '.Thermo~R1C2~R2C2~R3C1.Thermo~R2C9~R2C8~R1C7.Thermo~R4C5~R5C6~R6C5~R5C4.Thermo~R8C1~R8C2~R9C3.Thermo~R9C8~R8C8~R7C9.Skyscraper~C4~5~0.Skyscraper~R6~5~0.Skyscraper~C6~0~5.Skyscraper~R4~0~5..GlobalEntropy',
    solution: '834159627659273841712486395967518432183942576425367918376824159241695783598731264',
  },
  'Miracle - skyscraper entropy': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000GHN',
    input: '.GlobalEntropy.Skyscraper~R1~8~.Skyscraper~R6~~7.',
    solution: '234567819687193542915248376472915638361482957598736421726359184159824763843671295',
  },
  'Odd-even thermo': {
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0003V5',
    input: '.Binary~UFVQFUAFQAE~_Odd-even%20thermo~r1c2~r1c3~r1c4~r1c5~~r1c8~r1c9~r2c9~r3c9~~r2c8~r2c7~~r3c4~r3c3~~r3c2~r4c2~r4c1~~r6c3~r5c3~r5c4~r4c4~~r5c6~r4c6~r4c5~~r6c8~r6c9~r5c9~~r7r2~r7c3~~r7c8~r7c9~r8c9~~r8c2~r9c2~r9c1~~r8c4~r9c4~~r8c5~r9c5~r9c6',
    solution: '613798524298145736457362198971853642384621975562479813139286457726514389845937261',
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
  },
  'Jigsaw boxes, disconnected': {
    src: 'http://forum.enjoysudoku.com/jigsaw-as-custom-extra-regions-sudoku-t39468.html#p311414',
    input: '.Jigsaw~001122222000103332100143332111143332504444462577748888577748668577768666555558866.~R1C1_4~R1C9_7~R3C1_1~R3C2_5~R3C9_4~R4C3_3~R4C7_7~R5C1_9~R5C3_1~R5C7_8~R5C9_6~R6C3_8~R6C7_4~R7C1_2~R7C9_8~R9C1_7~R9C9_9',
    solution: '432659187869714253157823964543968712921475836678231495216397548394582671785146329',
  },
  'Windoku': {
    src: 'https://www.sudocue.net/windoku.php?id=fa4ce900-69cc-45d2-8b2d-1cae750c3a95',
    input: '.Windoku.~R2C6_5~R2C8_1~R3C5_2~R3C9_6~R4C7_4~R5C3_5~R5C7_6~R6C2_8~R6C6_7~R6C7_3~R7C4_2~R7C5_1~R7C6_4~R8C2_7~R8C9_2~R9C3_6~R9C8_4',
    solution: '792861534463975218158423796327196485945382671681547329539214867874639152216758943',
  },
  'X-Windoku': {
    src: 'http://forum.enjoysudoku.com/x-sudoku-extreme-t34714-30.html?hilit=windoku#p309418',
    input: '.Diagonal~1.Diagonal~-1.Windoku.~R1C8_1~R2C5_2~R2C9_3~R4C1_4~R4C6_3~R5C5_5~R5C9_6~R6C5_1~R7C6_7~R7C7_8~R8C5_6~R9C5_3~R9C6_2',
    solution: '932674518678521943541398267469283751217459386853716429326147895794865132185932674',
  },
  'Killer sudoku, with 0 cage': {
    input: '.Cage~3~R1C1~R1C2.Cage~15~R1C3~R1C4~R1C5.Cage~17~R2C3~R2C4.Cage~22~R1C6~R2C5~R2C6~R3C5.Cage~4~R1C7~R2C7.Cage~16~R1C8~R2C8.Cage~15~R1C9~R2C9~R3C9~R4C9.Cage~8~R3C6~R4C6~R5C6.Cage~6~R4C1~R5C1.Cage~6~R6C3~R7C2~R7C3.Cage~27~R6C1~R7C1~R8C1~R9C1.Cage~8~R8C2~R9C2.Cage~16~R8C3~R9C3.Cage~10~R7C5~R8C4~R8C5~R9C4.Cage~12~R5C9~R6C9.Cage~6~R6C7~R6C8.Cage~20~R6C6~R7C6~R7C7.Cage~15~R8C6~R8C7.Cage~14~R7C8~R7C9~R8C8~R8C9.Cage~13~R9C5~R9C6~R9C7.Cage~17~R9C8~R9C9.Cage~0~R5C4~R5C3~R5C2~R6C2.Cage~0~R3C7~R3C8~R4C8.',
    solution: '215647398368952174794381652586274931142593867973816425821739546659428713437165289',
  },
  'Killer sudoku, with 0 cage, hard': {
    src: 'http://forum.enjoysudoku.com/fast-web-based-solver-for-sudoku-variants-t39332.html#p312474',
    input: 'Z<<<<W<<<^0<<>^X<T>^j>>>^>^c^^<<>>^T^<<<^>>>^^S<<^<<0^>^L<<<^^<^>^U<>>^Q>>>^>>>>^',
    solution: '458723196936185274271496583392547618867931452514268739783612945645379821129854367',
  },

  // 16x16
  '16x16': {
    src: 'http://forum.enjoysudoku.com/symmertic-16x16-grid-t38266.html#p295157',
    input: `
      .Shape~16x16
      .~R1C4_5~R1C6_9~R1C7_10~R1Cb_2~R1Ce_15~R2C7_16~R2C8_3~R2C9_9~R2Cc_15~R2Cf_1~R2Cg_10~R3C2_13~R3C5_2~R3Ca_14~R3Cd_3~R3Ce_5~R3Cf_12~R3Cg_9~R4C1_12~R4C2_15~R4C7_4~R4C8_7~R4Cd_8~R4Cf_6~R5C1_1~R5C5_3~R5C7_2~R5C8_15~R5Cb_14~R5Cd_10~R5Ce_8~R6C5_1~R6Ca_10~R6Cf_7~R6Cg_16~R7C1_2~R7C4_3~R7C6_16~R7C7_12~R7Cb_8~R7Cc_4~R8C1_7~R8C3_5~R8C4_13~R8C6_10~R8C9_12~R8Ca_15~R9C1_10~R9C2_11~R9C5_9~R9C8_8~R9Ca_2~R9Cb_6~R9Cd_16~R9Ce_13~R9Cg_14~RaC2_7~RaC6_1~RaCb_9~RaCc_13~RbC4_9~RbC5_16~RbC6_13~RbCa_7~RbCd_2~RbCe_11~RbCg_1~RcC3_13~RcC4_6~RcC5_14~RcC9_10~RcCa_11~RcCb_3~RcCg_5~RdC1_5~RdC2_2~RdC4_16~RdCc_12~RdCf_11~RdCg_15~ReC2_4~ReC3_7~ReC9_6~ReCb_1~ReCd_14~RfC2_9~RfC5_12~RfC6_11~RfC8_14~RfCb_13~RfCc_2~RgC4_12~RgC7_7~RgC8_5~RgCd_6~RgCe_2~RgCf_3
    `,
    solution: 'FCPEMIJLAHBGKONDNHKBEFPCILDOMGAJDMJGBOHAKNPFCELILOIAKNDGCMJEHPFBAPDKCEBOGFNIJHMLILNHADKMBJECOFGPBJOCGPLFMAHDENIKGFEMHJNILOKPADBCJKLDIGCHEBFAPMONOGBNJAEKDPIMLCHFHECIPMFDOGLNBKJAPAMFNLOBJKCHGIDEEBHPFCMJNDGLIAKOMDGJOBIPFCAKNLEHCIFOLKANHEMBDJPGKNALDHGEPIOJFBCM',
  },
  '16x16: Sudoku X': {
    src: 'http://forum.enjoysudoku.com/giant-sudokus-t39758-30.html#p320617',
    input: `
      .Shape~16x16
      .Diagonal~1.Diagonal~-1
      .~R1C1_5~R1C2_12~R1C3_16~R1C4_3~R1C5_7~R1C6_1~R1C7_4~R1Cb_11~R1Cd_9~R1Cf_8~R2C2_7~R2C3_15~R2C7_16~R2Ca_10~R3C6_3~R3C7_14~R4C1_14~R4C5_5~R4C9_8~R4Ca_9~R4Ce_7~R4Cf_16~R4Cg_11~R5C4_11~R5C8_3~R5C9_12~R5Ca_13~R5Cd_5~R5Ce_10~R5Cf_2~R6C2_8~R6C3_1~R6C5_12~R6C8_7~R6Cb_4~R6Cd_6~R6Cg_3~R7Ca_8~R7Cb_10~R7Ce_12~R7Cf_13~R7Cg_7~R8C5_10~R8C6_14~R8Ca_7~R8Cd_11~R8Ce_1~R9C3_8~R9C4_12~R9C7_5~R9Cb_13~R9Cc_9~RaC1_3~RaC2_2~RaC3_14~RaC6_15~RaC7_7~RbC1_16~RbC4_10~RbC6_12~RbC9_6~RbCc_5~RbCe_2~RbCf_3~RcC2_6~RcC3_5~RcC4_1~RcC7_13~RcC8_4~RcC9_2~RcCd_12~RdC1_4~RdC2_3~RdC3_2~RdC7_6~RdC8_13~RdCc_10~RdCg_14~ReCa_15~ReCb_8~RfC7_1~RfCa_6~RfCe_15~RfCf_12~RgC2_10~RgC4_15~RgC6_8~RgCa_2~RgCb_1~RgCc_4~RgCd_16~RgCe_6~RgCf_11~RgCg_9
    `,
    solution: 'ELPCGADFONKBIMHJBGOHMIPKAJELCDNFKMJIHCNODPFGBEALNADFEBJLHICMOGPKGNIKDFOCLMPAEJBHJHABLMKGIEDNFPOCFPCDIEBAKHJONLMGLOMEJNHPCGBFKAIDODHLCJEBNAMIGKFPCBNMFOGHJKLPDIEAPKGJALINFDOEHBCMIFEAKPMDBCGHLNJODCBPOKFMELIJAHGNAEFNPGLIMOHKJCDBHIKGBDAJPFNCMOLEMJLONHCEGBADPFKI',
  },
  '16x16: Sudoku X, hard': {
    src: 'http://forum.enjoysudoku.com/giant-sudokus-t39758-30.html#p321124',
    input: `
      .Shape~16x16
      .Diagonal~1.Diagonal~-1
      .~R1C1_1~R1C4_4~R1Ca_10~R1Cd_13~R1Ce_14~R2C5_9~R2C8_12~R2Ce_2~R2Cf_3~R3C1_9~R3C5_14~R3C7_15~R3Ca_2~R3Cd_6~R4C1_13~R4C4_15~R4C6_2~R4C8_4~R4Cc_7~R4Cd_9~R4Cf_11~R4Cg_12~R5C1_2~R5C2_1~R5C7_8~R5C8_6~R5Cg_15~R6C2_6~R6C3_8~R6C5_10~R6C7_9~R6Cf_4~R6Cg_3~R7C1_10~R7C6_16~R7C7_13~R7Cc_3~R7Cf_7~R8C7_4~R8C9_5~R8Ca_8~R8Cb_7~R8Cf_12~R8Cg_11~R9C1_3~R9Ca_12~R9Cb_9~R9Cc_11~R9Ce_16~RaC4_6~RaC5_11~RaC6_9~RaC8_10~RaCc_15~RbC2_12~RbC8_15~RbC9_3~RbCe_5~RcC1_16~RcC3_13~RcC8_3~RdC3_2~RdC5_8~RdC7_6~RdC9_12~RdCc_9~RdCd_16~RdCg_13~ReC1_8~ReC6_11~ReC7_10~ReC9_16~ReCc_13~ReCg_1~RfC3_10~RfC6_15~RfC7_14~RfC9_4~RfCb_2~RfCd_8~RgC3_14~RgC4_13~RgCb_6~RgCd_12
    `,
    solution: 'ABCDEFGHIJKLMNOPFEGHIJKLNMOPABCDIJKLNMOPABCDFHEGMNPOABCDFEHGIJKLBADCGEHFKILJNMPOEFHGJLIKOPMNBADCJILKOPMNBDACEFGHNMOPCADBEHGFJILKCDABFHEGJLIKOPMNGHEFKILJMNPOCDABKLIJMNPOCADBGEHFPOMNBDACGFEHKLIJDCBAHGFELKJIPONMHGFELKJIPONMDCBALKJIPONMDCBAHGFEOPNMDCBAHGFELKJI',
  },
  '16x16: Sudoku X, very hard': {
    src: 'http://forum.enjoysudoku.com/giant-sudokus-t39758-30.html#p321047',
    input: `
      .Shape~16x16
      .Diagonal~1.Diagonal~-1
      .~R1C5_16~R1C6_12~R1Cb_7~R1Cc_3~R2C6_2~R2C8_7~R2C9_4~R2Cb_11~R3C4_6~R3C5_11~R3C6_1~R3C7_15~R3C8_10~R3C9_9~R3Ca_5~R3Cb_2~R3Cc_8~R3Cd_14~R4C3_1~R4C8_3~R4C9_6~R4Ce_7~R5C1_10~R5C3_9~R5C8_12~R5C9_5~R5Ce_4~R5Cg_2~R6C1_8~R6C2_14~R6C3_3~R6C8_2~R6C9_1~R6Ce_13~R6Cf_5~R6Cg_7~R7C3_4~R7Ce_16~R8C2_6~R8C3_16~R8C4_5~R8C5_3~R8C6_13~R8Cb_8~R8Cc_14~R8Cd_1~R8Ce_11~R8Cf_12~R9C2_2~R9C3_5~R9C4_13~R9C5_9~R9C6_11~R9Cb_1~R9Cc_16~R9Cd_8~R9Ce_15~R9Cf_4~RaC3_8~RaCe_12~RbC1_1~RbC2_12~RbC3_10~RbC8_6~RbC9_14~RbCe_5~RbCf_9~RbCg_11~RcC1_3~RcC3_11~RcC8_1~RcC9_8~RcCe_2~RcCg_13~RdC3_14~RdC8_5~RdC9_3~RdCe_8~ReC4_9~ReC5_14~ReC6_7~ReC7_2~ReC8_11~ReC9_16~ReCa_10~ReCb_13~ReCc_1~ReCd_4~RfC6_9~RfC8_16~RfC9_2~RfCb_14~RgC5_12~RgC6_4~RgCb_5~RgCc_6
    `,
    solution: 'NEBHPLFDMAGCKIJOICOPHBEGDNKJMAFLLGMFKAOJIEBHNCPDKDAJMNICFLPOEGBHJMIAGFNLEPCKODHBHNCODPKBAFILJMEGGKDLAEHIJMOBFPCNBFPECMJOGDHNAKLIFBEMIKGNLCAPHODJOPHNECDMKBJIGLAFALJGBHPFNODMCEIKCIKDJOLAHGFEPBNMMONBFJAECKLDIHGPEHLINGBKPJMADFOCDAFCOIMPBHNGLJKEPJGKLDCHOIEFBNMA',
  },
  '16x16: Jigsaw': {
    src: 'http://forum.enjoysudoku.com/16x16-jigsaw-sudoku-t38676.html#p300550',
    input: `
      ..E..K..MI....P.K....P....L.MF.B....HM.D....O..FJI.....KG.DB.C.O.OD...NAE.HM.K..........P.I....GIF.HL.B....AC..JCE.P...L.M............I.O...P.HDN..IM....E.PB.DCD....G.P..........A.CI.OHF...JL.E.F.GA.HI.....OKF..N....A.PL....H.PJ.C....M....I.C....MI..K..G..
      AAAAABBBBBCDDDDDAAEAABBBBBCDDDDDAAEAAABBFCCDDDDGAAEBBBBFFCCCDDGGHHEEEEEEFCCCIGGGHHHEEEEEFFCCIGGGHHHHEFEFFICCIGGGHHHHHFFFIICCIIGGHJJHJJFFIIIIIIKGJJJJJFFLIIKKKKKGJJJJJJLLLLLKKKKKJMLLLLLLLNLLKKKKMMLMNNNNNNOPPPPKMMMMMNNOOOOOPPPPMMMMNNNOOOOOPPPPMMMNNNNOOOOOPPPP
    `,
    solution: 'OLECFKGBMIJHNDPAKNHADPCEJOLIMFGBGPIBHMADCNEJOLKFJIMLNHFKGPDBECAOBODGPFNAECHMJKILLDNEJOKCPAIFHMBGIFGHLDBMNKOACPEJCEJPABOLDMGKFINHMJCKELIFOBAGPNHDNAKIMJHGLEFPBODCDHBFOGJPKLNCIAMEPKAMCIEOHFBDGJLNEMFDGAPHIJCNLBOKFBONIEDJAGPLKHCMHGPJKCLNBDMOAEFIACLOBNMIFHKEDGJP',
  },
  '16x16: Windoku': {
    src: 'http://forum.enjoysudoku.com/16x16-windoku-t30028.html',
    input: `
      .Shape~16x16
      .Windoku
      .~R1C3_2~R2C3_6~R5C1_7~R5C2_2~R6C1_9~R7C2_13~R7C3_11~ReC1_4~RgC1_5~R7C4_4~R8C1_15~R9C2_16~RaC1_2~RbC3_8~RbC4_11~RcC4_12~R9C4_6~RfC4_15~RfC5_14~R8C5_12~R8C6_5~R6C5_13~R6C6_6~R4C5_1~R3C5_15~R3C6_3~R2C6_9~R9C7_15~RaC7_13~R3C8_14~R5C8_10~RfC8_1~RgC8_9~ReC9_6~RcC9_9~R9C9_4~R2C9_3~R7Ca_12~RaCa_8~R8Cb_8~R5Cb_4~R3Cb_5~R4Cc_4~R6Cc_10~R7Cc_7~R9Cc_1~RbCc_16~ReCc_9~RdCd_12~RcCd_7~R7Cd_3~R4Cd_15~R1Ce_3~R2Ce_10~R2Cf_16~R1Cg_1~R3Cf_7~R6Cf_2~RaCf_12~RbCf_6~RcCg_11
    `,
    solution: 'POBEGLFMKJNHDCIAALFGKIDECOBMHJPNHDIJOCPNLAEFBKGMKNCMAJBHGIPDOLEFGBEHPOKJMFDCAINLIALPMFCDONKJEGBHFMKDHANBELIGCOJPOJNCLEIGAPHBMFKDMPGFBNOCDKLAIEHJBEOAIKMFJHGNPDLCJIHKDGALBECPNMFONCDLJHEPIMFOGBAKCGPIFMJONBAKLHDEDHABEPLKFCOIJNMGLKMONBGAHDJEFPCIEFJNCDHIPGMLKAOB',
  }
};

