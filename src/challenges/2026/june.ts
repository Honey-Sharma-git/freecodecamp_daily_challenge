import {
  BMI_ERROR_MESSAGES,
  BMI_MULTIPLIER,
  DETECT_MUTATION_ERROR_MESSAGES,
  LEET_CODES,
  LOOKUP_TABLE,
  PARSE_FRONTMATTER_ERROR_MESSAGES,
} from "../../constants/config";

export function getOddWords(str: unknown) {
  if (typeof str !== "string") {
    throw new TypeError(`Expected string as parameter, received ${typeof str}`);
  }

  if (!str.trim().length) {
    throw new Error(`Expected string of words received ${str}`);
  }

  const words = str.trim().split(" ");
  let oddWords = "";

  words.forEach((word) => {
    if (word.trim().length === 1 || word.trim().length % 2 !== 0) {
      oddWords += word;
      oddWords += " ";
    }
  });
}

function makeLeet(str: string) {
  let leetChar = "";

  for (const char of str) {
    leetChar += LEET_CODES[char] ?? char;
  }
  return leetChar;
}

/* Schema Validator Part 1
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{
  username: string
}
Extra keys are allowed */

function isValidSchema(obj: unknown) {
  if (Object.prototype.toString.call(obj) === "[object Object]") return false;

  return obj;
}

export function calculateBmi(weight?: unknown, height?: unknown): number {
  if (height === undefined) {
    throw new Error(BMI_ERROR_MESSAGES.MISSING_HEIGHT_AS_ARGUMENT);
  }

  if (weight === undefined) {
    throw new Error(BMI_ERROR_MESSAGES.MISSING_WEIGHT_AS_ARGUMENT);
  }

  if (typeof weight !== "number") {
    throw new Error(BMI_ERROR_MESSAGES.WEIGHT_SHOULD_BE_A_NUMBER);
  }
  if (typeof height !== "number") {
    throw new Error(BMI_ERROR_MESSAGES.HEIGHT_SHOULD_BE_A_NUMBER);
  }
  if (height === 0) {
    throw new Error("Height cannot be zero");
  }
  if (weight === 0) {
    return 0;
  }
  return (weight / (height * height)) * BMI_MULTIPLIER;
}

/* 
Given two DNA strands of equal length, return an array of indexes where the strands differ (mutations).

DNA strands are strings made up of the characters "A", "T", "C", and "G"
Return the indexes in ascending order
If there are no mutations, return an empty array */

/**
 *
 * The length of strand1 should be equal to strand2
 * @param {string} strand1
 * @param {string} strand2
 * @returns {array} array of indices where strands mismatched.
 */
export function detectMutations(strand1: unknown, strand2: unknown): number[] {
  if (typeof strand1 !== "string") {
    throw new Error(DETECT_MUTATION_ERROR_MESSAGES.STRAND1_SHOULD_BE_A_STRING);
  }

  if (typeof strand2 !== "string") {
    throw new Error(DETECT_MUTATION_ERROR_MESSAGES.STRAND2_SHOULD_BE_A_STRING);
  }

  if (strand1.trim().length !== strand2.trim().length) {
    throw new Error(
      DETECT_MUTATION_ERROR_MESSAGES.STRAND1_STRAND2_SHOULD_BE_OF_EQUAL_LENGTH,
    );
  }

  let isStrand1Valid = true;
  try {
    isStrand1Valid = isStrandValid(strand1);
  } catch (error) {
    throw new Error(
      DETECT_MUTATION_ERROR_MESSAGES.STRAND1_CONTAINS_INVALID_CHARACTERS,
    );
  }

  let isStrand2Valid = true;
  try {
    isStrand2Valid = isStrandValid(strand2);
  } catch (error) {
    throw new Error(
      DETECT_MUTATION_ERROR_MESSAGES.STRAND2_CONTAINS_INVALID_CHARACTERS,
    );
  }

  const mutationsIndices = [];

  if (isStrand1Valid && isStrand2Valid) {
    const len = strand1.trim().length;

    for (let i = 0; i < len; i++) {
      if (strand1.trim().at(i) !== strand2.trim().at(i)) {
        mutationsIndices.push(i);
      }
    }
  }

  return mutationsIndices;
}

export function isStrandValid(strand: unknown): boolean {
  const VALID_STRAND_CHARS = ["A", "T", "C", "G"];

  if (typeof strand !== "string") {
    throw new Error(DETECT_MUTATION_ERROR_MESSAGES.STRAND_SHOULD_BE_A_STRING);
  }

  const len = strand.trim().length;

  let isValid = true;
  for (const char of strand.trim()) {
    const isValidCharPresent = VALID_STRAND_CHARS.includes(char);

    if (!isValidCharPresent) {
      throw new Error(
        DETECT_MUTATION_ERROR_MESSAGES.STRAND_CONTAINS_INVALID_CHARACTERS,
      );
    }
  }
  return isValid;
}

/* 
British to American
Given a sentence, convert any British English spellings to their American English equivalents using the following lookup table and return the updated sentence:

Replacements should be case-insensitive. For example, "Colour" should become "Color".

The input may contain words that build on the exact spelling of a root in the table that also need to be changed. For example, "colouring" should become "coloring", and "disorganised" should become "disorganized".
*/

export function capitalizeWord(word: string): string {
  const result =
    word?.trim()?.at(0)?.toUpperCase() + word?.trim()?.slice(1)?.toLowerCase();
  return result;
}

export function britishToAmerican(sentence: string): string {
  const lookUpMap = Object.entries(LOOKUP_TABLE);

  let str = sentence;
  for (const w of lookUpMap) {
    const regExp = new RegExp(`${w[0]}`, "gi");
    if (regExp.test(str)) {
      str = str.replace(regExp, (match) => {
        if (match === capitalizeWord(w[0])) return capitalizeWord(w[1]);
        return w[1];
      });
    }
  }

  return str;
}

/* 
Frontmatter Parser
Given a string representing a frontmatter block, parse it and return an object (JavaScript) or dictionary (Python) with the keys and values.

Frontmatter is wrapped in --- delimiters and contains key: value pairs within them, one per line. For example:

---
title: My Post
draft: false
views: 100
---
Should return:

{
  title: "My Post",
  draft: false,
  views: 100
}
Numbers, Booleans, and Strings should all be returned as their respective type.
The given string will have new lines separated with the newline character ("\n"). The above example would be given as: "---\ntitle: My Post\ndraft: false\nviews: 100\n---". */

export function validateFrontMatterStr(str: string): boolean {
  if (typeof str !== "string") {
    throw new Error(
      `${PARSE_FRONTMATTER_ERROR_MESSAGES.VALIDATE_FRONTMATTER_STR.EXPECTED_STRING_RECEIVED} ${typeof str}`,
    );
  }

  const trimmedStr = str.trim();
  const firstThreeChar = trimmedStr.substring(0, 3);
  const lastThreeChar = trimmedStr.substring(trimmedStr.length - 3);
  const withoutFirstAndLastThree = trimmedStr.substring(
    3,
    trimmedStr.length - 3,
  );

  if (
    !(trimmedStr.length >= 6) ||
    firstThreeChar !== "---" ||
    lastThreeChar !== "---" ||
    withoutFirstAndLastThree.includes("--")
  ) {
    throw new Error(
      PARSE_FRONTMATTER_ERROR_MESSAGES.VALIDATE_FRONTMATTER_STR
        .INVALID_FRONTMATTER_STRING,
    );
  }
  return true;
}

export function getNewLineCharRemovedArr(str: string): string[] {
  return str
    .trim()
    .split("\n")
    .filter((s) => s);
}

export function extractKeyValuePair(arr: string[]): string[][] {
  return arr.map((e) => {
    return e
      .trim()
      .split(":")
      .filter((s) => s.trim())
      .map((s) => s.trim());
  });
}

export function mapKeyValuePair(arr: string[][]) {
  const obj: Record<string, string | number | boolean> = {};
  for (const keyVal of arr) {
    const key = keyVal[0] ?? "defaultKey";
    let value: string | number | boolean = keyVal[1] ?? "defaultValue";

    let isBool = false;
    if (value === "false" || value === "true") {
      value = value === "false" ? false : value === "true" ? true : false;
      isBool = true;
    }
    if (!isBool && isFinite(Number(value))) {
      value = Number(value);
    }

    obj[key] = value;
  }
  return obj;
}

export function parseFrontmatter(str: string) {
  try {
    validateFrontMatterStr(str);
  } catch (error) {
    console.error("frontmatter string validation failed", error);
    return {};
  }

  const withoutFrontmatterLiterals = str
    .trim()
    .substring(3, str.trim().length - 3);

  const withoutNewLineKeyValStr = getNewLineCharRemovedArr(
    withoutFrontmatterLiterals,
  );
  const keyValPairArr = extractKeyValuePair(withoutNewLineKeyValStr);
  const parsedResult = mapKeyValuePair(keyValPairArr);

  return parsedResult;
}
