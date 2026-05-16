/**
 * Recursive shape of every leaf and branch in a translation tree.
 * Strings (with optional inline HTML), numbers, arrays of values, and
 * nested objects are all permissible.
 */
export type TranslationValue =
  | string
  | number
  | boolean
  | null
  | TranslationValue[]
  | { [key: string]: TranslationValue };

export type TranslationDict = { [key: string]: TranslationValue };
