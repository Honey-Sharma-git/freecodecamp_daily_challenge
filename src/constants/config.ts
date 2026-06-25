export const LOOKUP_TABLE = {
  // --- Original Examples & Base Spelling Patterns ---
  analyse: "analyze",
  centre: "center",
  colour: "color",
  defence: "defense",
  fibre: "fiber",
  flavour: "flavor",
  honour: "honor",
  humour: "humor",
  labour: "labor",
  neighbour: "neighbor",
  offence: "offense",
  organise: "organize",
  recognise: "recognize",

  // --- Case-Sensitive Variants from Test Cases ---
  Colour: "Color",
  colouring: "coloring",
  Colouring: "Coloring",
  unorganised: "unorganized",
  Unorganised: "Unorganized",

  // --- Spelling & Inflection Matches ---
  aeroplane: "airplane",
  aluminium: "aluminum",
  apologised: "apologized",
  cancelled: "canceled",
  cheque: "check",
  grey: "gray",
  jewellery: "jewelry",
  licence: "license",
  metre: "meter",
  penalised: "penalized",
  programme: "program",
  realise: "realize",
  skilful: "skillful",
  theatre: "theater",
  travelling: "traveling",
  tyre: "tire",
  favourite: "favorite",
  boot: "trunk",

  // --- Vocabulary / Phrase Matches ---
  aubergine: "eggplant",
  autumn: "fall",
  bin: "trash can",
  bonnet: "hood",
  cinema: "movie theater",
  courgette: "zucchini",
  crisps: "potato chips",
  "cul-de-sac": "dead-end street",
  film: "movie",
  flat: "apartment",
  football: "soccer",
  holiday: "vacation",
  jumper: "sweater",
  lift: "elevator",
  lorry: "truck",
  motorway: "highway",
  nappy: "diaper",
  packet: "pack",
  pavement: "sidewalk",
  petrol: "gas",
  plaster: "bandage",
  post: "mail",
  queue: "line",
  rubbish: "garbage",
  solicitor: "lawyer",
  sweets: "candy",
  "telephone box": "phone booth",
  "tin opener": "can opener",
  timetable: "schedule",
  torch: "flashlight",
  trousers: "pants",
  waistcoat: "vest",
} as const;

export const DETECT_MUTATION_ERROR_MESSAGES = {
  STRAND1_SHOULD_BE_A_STRING: "strand1 should be a string",
  STRAND2_SHOULD_BE_A_STRING: "strand2 should be a string",
  STRAND1_STRAND2_SHOULD_BE_OF_EQUAL_LENGTH:
    "strand1 and strand2 should be of equal length",
  STRAND_SHOULD_BE_A_STRING: "strand should be string",
  STRAND_CONTAINS_INVALID_CHARACTERS: "strand contains invalid characters",
  STRAND1_CONTAINS_INVALID_CHARACTERS: "strand1 contains invalid characters",
  STRAND2_CONTAINS_INVALID_CHARACTERS: "strand2 contains invalid characters",
} as const;

export const BMI_MULTIPLIER = 703 as const;

export const BMI_ERROR_MESSAGES = {
  WEIGHT_SHOULD_BE_A_NUMBER: "Weight should be a number",
  HEIGHT_SHOULD_BE_A_NUMBER: "Height should be a number",
  MISSING_HEIGHT_AS_ARGUMENT: "Missing height as argument",
  MISSING_WEIGHT_AS_ARGUMENT: "Missing weight as argument",
} as const;

export const LEET_CODES: Record<string, string> = {
  a: "4",
  e: "3",
  g: "9",
  i: "1",
  l: "1",
  o: "0",
  s: "5",
  t: "7",
};
