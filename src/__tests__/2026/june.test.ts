import {
  BMI_ERROR_MESSAGES,
  DETECT_MUTATION_ERROR_MESSAGES,
  PARSE_FRONTMATTER_ERROR_MESSAGES,
} from "../../constants/config";
import {
  BRITISH_TO_AMERICAN_SENTENCES,
  FRONTMATTER_STRINGS,
  KEY_VALUE_ARRAY,
  MAKE_KEY_VALUE_PAIR_CASES,
  PARSE_FRONTMATTER_STRINGS_CASES,
  STRING_WITH_NEWLINE_CHAR,
  TEST_CASES_FOR_CAPITALIZE_WORD,
  TESTCASES_FOR_DETECT_MUTATIONS,
  TESTCASES_FOR_IS_STRAND_VALID,
} from "../../constants/testConstants";
import {
  britishToAmerican,
  calculateBmi,
  capitalizeWord,
  detectMutations,
  isStrandValid,
  getNewLineCharRemovedArr,
  validateFrontMatterStr,
  extractKeyValuePair,
  mapKeyValuePair,
  parseFrontmatter,
} from "../../challenges/2026/june";

describe("Test calculateBmi for Error cases:", () => {
  it(BMI_ERROR_MESSAGES.MISSING_WEIGHT_AS_ARGUMENT, () => {
    expect(() => calculateBmi(undefined, 0)).toThrow(
      BMI_ERROR_MESSAGES.MISSING_WEIGHT_AS_ARGUMENT,
    );
  });

  it(BMI_ERROR_MESSAGES.MISSING_HEIGHT_AS_ARGUMENT, () => {
    expect(() => calculateBmi(undefined, undefined)).toThrow(
      BMI_ERROR_MESSAGES.MISSING_HEIGHT_AS_ARGUMENT,
    );
    expect(() => calculateBmi(1, undefined)).toThrow(
      BMI_ERROR_MESSAGES.MISSING_HEIGHT_AS_ARGUMENT,
    );
    expect(() => calculateBmi(1)).toThrow(
      BMI_ERROR_MESSAGES.MISSING_HEIGHT_AS_ARGUMENT,
    );
    expect(() => calculateBmi()).toThrow(
      BMI_ERROR_MESSAGES.MISSING_HEIGHT_AS_ARGUMENT,
    );
    expect(() => calculateBmi("1")).toThrow(
      BMI_ERROR_MESSAGES.MISSING_HEIGHT_AS_ARGUMENT,
    );
    expect(() => calculateBmi("1", undefined)).toThrow(
      BMI_ERROR_MESSAGES.MISSING_HEIGHT_AS_ARGUMENT,
    );

    expect(() => calculateBmi(1, 0)).toThrow("Height cannot be zero");
  });

  it(BMI_ERROR_MESSAGES.HEIGHT_SHOULD_BE_A_NUMBER, () => {
    expect(() => calculateBmi(1, "1")).toThrow(
      BMI_ERROR_MESSAGES.HEIGHT_SHOULD_BE_A_NUMBER,
    );
  });

  it(BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER, () => {
    expect(() => calculateBmi("1", 1)).toThrow(
      BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER,
    );
    expect(() => calculateBmi("1", "1")).toThrow(
      BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER,
    );
    expect(() => calculateBmi("1", 0)).toThrow(
      BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER,
    );
    expect(() => calculateBmi(null, 0)).toThrow(
      BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER,
    );
    expect(() => calculateBmi({}, 0)).toThrow(
      BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER,
    );
    expect(() => calculateBmi([], 0)).toThrow(
      BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER,
    );
    expect(() => calculateBmi(" ", 0)).toThrow(
      BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER,
    );
    expect(() => calculateBmi(false, 0)).toThrow(
      BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER,
    );
    expect(() => calculateBmi(true, 0)).toThrow(
      BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER,
    );
    expect(() => calculateBmi("", 0)).toThrow(
      BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER,
    );
  });
});

describe("Test isStrandValid:", () => {
  test.each(TESTCASES_FOR_DETECT_MUTATIONS.INVALID_STRAND1)(
    `${DETECT_MUTATION_ERROR_MESSAGES.STRAND1_CONTAINS_INVALID_CHARACTERS} for strand1: %p and strand2: %p`,
    (strand1, strand2) => {
      expect(() => detectMutations(strand1, strand2)).toThrow(
        DETECT_MUTATION_ERROR_MESSAGES.STRAND1_CONTAINS_INVALID_CHARACTERS,
      );
    },
  );

  test.each(TESTCASES_FOR_DETECT_MUTATIONS.INVALID_STRAND2)(
    `${DETECT_MUTATION_ERROR_MESSAGES.STRAND2_CONTAINS_INVALID_CHARACTERS} for strand1: %p and strand2: %p`,
    (strand1, strand2) => {
      expect(() => detectMutations(strand1, strand2)).toThrow(
        DETECT_MUTATION_ERROR_MESSAGES.STRAND2_CONTAINS_INVALID_CHARACTERS,
      );
    },
  );

  test.each(TESTCASES_FOR_DETECT_MUTATIONS.NON_STRING_STRAND1)(
    `${DETECT_MUTATION_ERROR_MESSAGES.STRAND1_SHOULD_BE_A_STRING} for strand1: %p and strand2: %p`,
    (strand1, strand2) => {
      expect(() => detectMutations(strand1, strand2)).toThrow(
        DETECT_MUTATION_ERROR_MESSAGES.STRAND1_SHOULD_BE_A_STRING,
      );
    },
  );

  test.each(TESTCASES_FOR_DETECT_MUTATIONS.NON_STRING_STRAND2)(
    `${DETECT_MUTATION_ERROR_MESSAGES.STRAND2_SHOULD_BE_A_STRING} for strand1: %p and strand2: %p`,
    (strand1, strand2) => {
      expect(() => detectMutations(strand1, strand2)).toThrow(
        DETECT_MUTATION_ERROR_MESSAGES.STRAND2_SHOULD_BE_A_STRING,
      );
    },
  );

  test.each(TESTCASES_FOR_DETECT_MUTATIONS.UNEQUAL_LEN_STRANDS)(
    `${DETECT_MUTATION_ERROR_MESSAGES.STRAND1_STRAND2_SHOULD_BE_OF_EQUAL_LENGTH} for strand1: %p and strand2: %p`,
    (strand1, strand2) => {
      expect(() => detectMutations(strand1, strand2)).toThrow(
        DETECT_MUTATION_ERROR_MESSAGES.STRAND1_STRAND2_SHOULD_BE_OF_EQUAL_LENGTH,
      );
    },
  );

  test.each(TESTCASES_FOR_IS_STRAND_VALID.NON_STRINGS)(
    `${DETECT_MUTATION_ERROR_MESSAGES.STRAND_SHOULD_BE_A_STRING} for: %p`,
    (strand) =>
      expect(() => isStrandValid(strand)).toThrow(
        DETECT_MUTATION_ERROR_MESSAGES.STRAND_SHOULD_BE_A_STRING,
      ),
  );

  test.each(TESTCASES_FOR_IS_STRAND_VALID.INVALID_STRANDS)(
    `${DETECT_MUTATION_ERROR_MESSAGES.STRAND_CONTAINS_INVALID_CHARACTERS} for %p`,
    (strand) =>
      expect(() => isStrandValid(strand)).toThrow(
        DETECT_MUTATION_ERROR_MESSAGES.STRAND_CONTAINS_INVALID_CHARACTERS,
      ),
  );

  test.each(TESTCASES_FOR_IS_STRAND_VALID.VALID_STRANDS)(
    `isValidStrand returns true for %p`,
    (strand) => {
      expect(isStrandValid(strand)).toBe(true);
    },
  );
});

describe("Test capitalizeWord", () => {
  test.each(TEST_CASES_FOR_CAPITALIZE_WORD.ALL_LOWERCASED_WORDS)(
    `capitalizeWord(%p) should return %p`,
    (word, result) => {
      expect(capitalizeWord(word)).toBe(result);
    },
  );

  test.each(TEST_CASES_FOR_CAPITALIZE_WORD.ALL_UPPERCASED_WORDS)(
    `capitalizeWord(%p) should return %p`,
    (word, result) => {
      expect(capitalizeWord(word)).toBe(result);
    },
  );
  test.each(TEST_CASES_FOR_CAPITALIZE_WORD.ALPHA_NUMERIC_WORDS)(
    `capitalizeWord(%p) should return %p`,
    (word, result) => {
      expect(capitalizeWord(word)).toBe(result);
    },
  );
});

describe("Test britishToAmerican", () => {
  test.each(BRITISH_TO_AMERICAN_SENTENCES)(
    `britishToAmerican(%p) will return %p`,
    (british, american) => {
      expect(britishToAmerican(british)).toMatch(american);
    },
  );
});

describe("Test validateFrontMatterStr", () => {
  test.each(FRONTMATTER_STRINGS.VALID_STRINGS)(
    "validateFrontMatterStr for %p should return true",
    (str) => {
      expect(validateFrontMatterStr(str)).toBe(true);
    },
  );

  test.each(FRONTMATTER_STRINGS.INVALID_STRING)(
    `validateFrontMatterStr for %p should throw ${
      PARSE_FRONTMATTER_ERROR_MESSAGES.VALIDATE_FRONTMATTER_STR
        .INVALID_FRONTMATTER_STRING
    }`,
    (str) => {
      expect(() => validateFrontMatterStr(str)).toThrow(
        PARSE_FRONTMATTER_ERROR_MESSAGES.VALIDATE_FRONTMATTER_STR
          .INVALID_FRONTMATTER_STRING,
      );
    },
  );

  test.each(FRONTMATTER_STRINGS.NON_STRINGS)(
    `For %p, validateFrontMatterStr threw ${PARSE_FRONTMATTER_ERROR_MESSAGES.VALIDATE_FRONTMATTER_STR.EXPECTED_STRING_RECEIVED} %p`,
    (str, result) => {
      expect(() => validateFrontMatterStr(str as any)).toThrow(
        `${PARSE_FRONTMATTER_ERROR_MESSAGES.VALIDATE_FRONTMATTER_STR.EXPECTED_STRING_RECEIVED} ${result}`,
      );
    },
  );
});

describe("Test getNewLineCharRemovedArr", () => {
  test.each(STRING_WITH_NEWLINE_CHAR)(
    "getNewLineCharRemovedArr should return %p for %p",
    (result, str) => {
      expect(getNewLineCharRemovedArr(str)).toStrictEqual(result);
    },
  );
});

describe("Test extractKeyValuePair", () => {
  test.each(KEY_VALUE_ARRAY)(
    "extractKeyValuePair for %p should return %p",
    (arg, result) => {
      expect(extractKeyValuePair(arg)).toStrictEqual(result);
    },
  );
});

describe("Test mapKeyValuePair", () => {
  test.each(MAKE_KEY_VALUE_PAIR_CASES)(
    "For %p, mapKeyValuePair should return %p",
    (arg, result) => {
      expect(mapKeyValuePair(arg)).toStrictEqual(result);
    },
  );
});

describe("Test parseFrontmatter", () => {
  test.each(PARSE_FRONTMATTER_STRINGS_CASES)(
    "For %p parseFrontmatter should return %p",
    (arg, result) => {
      expect(parseFrontmatter(arg)).toStrictEqual(result);
    },
  );
});
