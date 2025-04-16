/* eslint-disable @typescript-eslint/no-explicit-any */
type DesignToken = Record<string, any>;

interface ColorToken extends DesignToken {
  alpha?: any[];
  tint?: any[];
  shade?: any[];
}

interface ScaleToken extends DesignToken {
  values?: any[];
}

/**
 * Counts the base color and all its variants
 * @param colorToken - A single color token with potential variants
 * @returns Count of the base color and all variants
 */
export function countColorVariants(colorToken: ColorToken): number {
  if (!colorToken || typeof colorToken !== "object") {
    return 0;
  }

  // Start with base color
  const baseCount = 1;

  // Add variant counts
  return (
    baseCount +
    countVariantArray(colorToken.alpha) +
    countVariantArray(colorToken.tint) +
    countVariantArray(colorToken.shade)
  );
}

/**
 * Counts the number of items in an array, safely handling undefined/null
 * @param variantArray - Array of variants or undefined
 * @returns Length of the array or 0 if not an array
 */
export function countVariantArray(variantArray: any[] | undefined): number {
  if (!Array.isArray(variantArray)) {
    return 0;
  }

  return variantArray.length;
}

/**
 * Counts the total number of color tokens including variants
 * @param colorTokens - Array of color tokens
 * @returns Total count of color tokens including variants
 */
export function countColorTokens(colorTokens: ColorToken[]): number {
  if (!Array.isArray(colorTokens)) {
    return 0;
  }

  return colorTokens.reduce(
    (total, colorToken) => total + countColorVariants(colorToken),
    0,
  );
}

/**
 * Counts tokens in scale-based categories (measurement, fontsize, opacity, depth)
 * @param scaleTokens - Array of scale tokens
 * @returns Total count of values across all scales
 */
export function countScaleTokens(scaleTokens: ScaleToken[]): number {
  if (!Array.isArray(scaleTokens)) {
    return 0;
  }

  return scaleTokens.reduce(
    (total, scale) => total + countVariantArray(scale.values),
    0,
  );
}
