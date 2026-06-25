export const TESTCASES_FOR_DETECT_MUTATIONS = {
    NON_STRING_STRAND1: [
        [1, "A"],
        [undefined, "A"],
        [true, "A"],
        [null, "A"],
        [false, "A"],
        [0, "A"],
        [[], "A"],
        [{}, "A"],
    ],
    NON_STRING_STRAND2: [
        ["A", 1],
        ["A", undefined],
        ["A", true],
        ["A", null],
        ["A", false],
        ["A", 0],
        ["A", []],
        ["A", {}],
    ],
    UNEQUAL_LEN_STRANDS: [
        ["ACTGA", "A"],
        ["ACTGA", "ACTGCA"],
        ["ACTGAA", "ACTGCAS"],
        ["ACTGASA", "ACTGCA"],
        ["ACTGASA", "ACdTGCAS"],
        ["  ACTGCA  ", "ACTGCAS   "],
    ],
    INVALID_STRAND1: [
        ["ab1cgt", "ATCGAT"],
        ["ab", "AT"],
        ["a", "A"],
        [" a ", "A  "],
        ["at", "AG"],
        ["atc", " TCG"],
        ["atcg", "ATCG"],
        ["ATCTGLMO", "ATCATCAG"],
        ["XYCATAG", "ATCGTCG"],
        ["atgc", "ATCG"],
        ["atgca", "ATCGA"],
        ["atgcA", "ATCGA"],
        ["atgcATCG", "ATCATCAT"],
        ["ATCGa", "ATCGG"],
        ["   atgc", "ATCG"],
        ["   atgc  ", "ATCG"],
        ["a c t g", "ATCGTCG"],
    ],
    INVALID_STRAND2: [
        ["ATCGAT", "ab1cgt"],
        ["AT", "ab"],
        ["A", "a"],
        ["A  ", " a "],
        ["AG", "at"],
        ["  TCG", "atc"],
        ["ATCG", "atcg"],
        ["ATCATCAG", "ATCTGLMO"],
        ["ATCGTCG", "XYCSTAG"],
        ["ATCG", "atgc"],
        ["ATCGA", "atgca"],
        ["ATCGA", "atgcA"],
        ["ATCATCAT", "atgcATCG"],
        ["ATCGG", "ATCGa"],
        ["ATCG", "   atgc"],
        ["ATCG", "   atgc  "],
        ["ATCGTCG", "a c t g"],
    ],
};
export const TESTCASES_FOR_IS_STRAND_VALID = {
    VALID_STRANDS: [
        "A",
        "AC",
        "ACT",
        "ACTG",
        "ATCG",
        "AAA",
        "TTTT",
        "ACTGGGG",
        "ATCG",
        "ATTCGGATCGATCGATCGTTCGGATCGCCT",
    ],
    INVALID_STRANDS: [
        "ab1cgt",
        "ab",
        "a",
        " a ",
        "at",
        "atc",
        "atcg",
        "ATCTGLMO",
        "XYCTAG",
        "atgc",
        "atgca",
        "atgcA",
        "atgcATCG",
        "ATCGa",
        "   atgc",
        "   atgc  ",
        "a c t g",
    ],
    NON_STRINGS: [undefined, false, true, 0, 1, null, [], {}],
};
export const TEST_CASES_FOR_CAPITALIZE_WORD = {
    ALL_LOWERCASED_WORDS: [
        ["word", "Word"],
        ["sharma", "Sharma"],
        ["honey", "Honey"],
        [" honey", "Honey"],
        ["   honey  ", "Honey"],
    ],
    ALL_UPPERCASED_WORDS: [
        ["WORD", "Word"],
        ["SHARMA", "Sharma"],
        ["HONEY", "Honey"],
        [" HONEY", "Honey"],
        ["   HONEY  ", "Honey"],
    ],
    MIXED_CASING_WORDS: [
        ["WoRD", "Word"],
        ["SHaRmA", "Sharma"],
        ["HOnEy", "Honey"],
        [" hONEY", "Honey"],
        ["   Honey  ", "Honey"],
    ],
    ALPHA_NUMERIC_WORDS: [
        ["1word", "1word"],
        ["123Sharma", "123sharma"],
        ["honey123", "Honey123"],
        [" 21hon23ey", "21hon23ey"],
        ["   0Honey  ", "0honey"],
    ],
};
export const BRITISH_TO_AMERICAN_SENTENCES = [
    ["The team is highly unorganised.", "The team is highly unorganized."],
    ["Her favourite hobby is painting.", "Her favorite hobby is painting."],
    [
        "The children love the vibrant Colour.",
        "The children love the vibrant Color.",
    ],
    [
        "They are Colouring the map of the world.",
        "They are Coloring the map of the world.",
    ],
    ["We need to realise our potential.", "We need to realize our potential."],
    [
        "He apologised for the late response.",
        "He apologized for the late response.",
    ],
    [
        "The theatre was packed for the premiere.",
        "The theater was packed for the premiere.",
    ],
    [
        "Please check the centre of the circle.",
        "Please check the center of the circle.",
    ],
    [
        "I need to renew my driving licence.",
        "I need to renew my driving license.",
    ],
    [
        "The company has a strict defence policy.",
        "The company has a strict defense policy.",
    ],
    [
        "He spent his summer travelling around Europe.",
        "He spent his summer traveling around Europe.",
    ],
    [
        "She is looking for a new flavour of ice cream.",
        "She is looking for a new flavor of ice cream.",
    ],
    ["The metre is a unit of length.", "The meter is a unit of length."],
    [
        "I bought a new pair of grey trousers.",
        "I bought a new pair of gray pants.",
    ],
    [
        "The programme was cancelled due to the rain.",
        "The program was canceled due to the rain.",
    ],
    [
        "We threw a party to celebrate his honour.",
        "We threw a party to celebrate his honor.",
    ],
    [
        "The jewellery shop was closed on Sunday.",
        "The jewelry shop was closed on Sunday.",
    ],
    [
        "You should check the tyre pressure before the trip.",
        "You should check the tire pressure before the trip.",
    ],
    [
        "He put the shopping in the boot of the car.",
        "He put the shopping in the trunk of the car.",
    ],
    [
        "Let's take the lift to the top floor.",
        "Let's take the elevator to the top floor.",
    ],
    [
        "The pavement was slippery after the downpour.",
        "The sidewalk was slippery after the downpour.",
    ],
    [
        "We stood in a long queue at the supermarket.",
        "We stood in a long line at the supermarket.",
    ],
    [
        "He left his rubbish outside the bin.",
        "He left his garbage outside the trash can.",
    ],
    [
        "I need to buy some petrol for the mower.",
        "I need to buy some gas for the mower.",
    ],
    [
        "The kids love eating sweets after dinner.",
        "The kids love eating candy after dinner.",
    ],
    [
        "We live in a lovely flat in London.",
        "We live in a lovely apartment in London.",
    ],
    ["He wears a smart waistcoat to work.", "He wears a smart vest to work."],
    [
        "She put a plaster on her scratched knee.",
        "She put a bandage on her scratched knee.",
    ],
    [
        "The lorry blocked the entire motorway.",
        "The truck blocked the entire highway.",
    ],
    [
        "He was wearing a bright jumper today.",
        "He was wearing a bright sweater today.",
    ],
    [
        "I will call you from the public telephone box.",
        "I will call you from the public phone booth.",
    ],
    [
        "They went to the cinema to watch the latest film.",
        "They went to the movie theater to watch the latest movie.",
    ],
    [
        "We need an aluminium ladder to reach the roof.",
        "We need an aluminum ladder to reach the roof.",
    ],
    [
        "Can you pass me the tin opener, please?",
        "Can you pass me the can opener, please?",
    ],
    ["The baby needs a clean nappy.", "The baby needs a clean diaper."],
    [
        "We are going on holiday this August.",
        "We are going on vacation this August.",
    ],
    [
        "He is a very skilful football player.",
        "He is a very skillful soccer player.",
    ],
    [
        "The aeroplane landed safely at the airport.",
        "The airplane landed safely at the airport.",
    ],
    ["I need to post this letter today.", "I need to mail this letter today."],
    [
        "The bonnet of the car was damaged in the accident.",
        "The hood of the car was damaged in the accident.",
    ],
    ["They live in a quiet cul-de-sac.", "They live in a quiet dead-end street."],
    [
        "She loves eating aubergine and courgette.",
        "She loves eating eggplant and zucchini.",
    ],
    [
        "The organization's structure needs to be Unorganised.",
        "The organization's structure needs to be Unorganized.",
    ],
    [
        "He was penalised for a minor offence.",
        "He was penalized for a minor offense.",
    ],
    [
        "The solicitor advised him on the legal matter.",
        "The lawyer advised him on the legal matter.",
    ],
    [
        "I will check the timetable for the next train.",
        "I will check the schedule for the next train.",
    ],
    [
        "He bought a new torch for the camping trip.",
        "He bought a new flashlight for the camping trip.",
    ],
    [
        "The autumn leaves are falling from the trees.",
        "The fall leaves are falling from the trees.",
    ],
    [
        "He wrote a cheque for the full amount.",
        "He wrote a check for the full amount.",
    ],
];
//# sourceMappingURL=testConstants.js.map