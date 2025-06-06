/**
 * Transpose a 2D array (matrix).
 * @param {any[][]} matrix - The 2D array to transpose.
 * @returns {any[][]} - The transposed 2D array.
 **/

export function transpose<T>(matrix: T[][]): any[][] {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}

/**
 * Normalize and fill a 2D array to ensure all rows have the same length.
 * @param {any[][]} matrix - The 2D array to normalize and fill.
 * @param {any} fillValue - The value to fill in for missing elements.
 * @param {number} desiredLength - The target length of the array. if given take it as maxLength.
 * @returns {any[][]} - The normalized and filled 2D array.
 * **/
export function normalizeAndFill<T>(
  matrix: T[][],
  fillValue: T,
  desiredLength?: number
): T[][] {
  const maxLength = !desiredLength
    ? Math.max(...matrix.map((row) => row.length))
    : desiredLength;
  return matrix.map((row) => {
    const filledRow = [...row];
    while (filledRow.length < maxLength) {
      filledRow.push(fillValue);
    }
    return filledRow;
  });
}
