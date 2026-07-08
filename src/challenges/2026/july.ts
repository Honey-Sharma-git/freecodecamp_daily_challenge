/* 
Nearest Multiple
Given two integers, round the first to the nearest multiple of the second.
*/

function roundToNearestMultiple(num: number, multiple: number): number {
  if (multiple === 0) return num;
  const quotient = num / multiple;
  const wholeNum = quotient - (quotient % 1);
  const roundUpNum = wholeNum + 1;
  const largerMultiple = roundUpNum * multiple;
  const smallerMultiple = wholeNum * multiple;

  const posDeviation = num - smallerMultiple;
  const negDeviation = num - largerMultiple;

  if (posDeviation < negDeviation * -1) {
    return smallerMultiple;
  } else {
    return largerMultiple;
  }
}
