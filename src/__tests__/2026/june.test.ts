import {
  BMI_ERROR_MESSAGES,
  DETECT_MUTATION_ERROR_MESSAGES,
} from "../../constants/config";
import {
  BRITISH_TO_AMERICAN_SENTENCES,
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
