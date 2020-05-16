import { getRandomIntBetween } from "./random";

export function generateRandomBlob() {
  const plusPercentages: number[] = [];
  const minusPercentages: number[] = [];

  for (let i = 0; i < 4; i++) plusPercentages.push(getRandomIntBetween(25, 75));
  for (let j = 0; j < 4; j++) minusPercentages.push(100 - plusPercentages[j]);

  var borderRadius = `${plusPercentages[0]}% ${minusPercentages[0]}% ${minusPercentages[1]}% ${plusPercentages[1]}% / ${plusPercentages[2]}% ${plusPercentages[3]}% ${minusPercentages[3]}% ${minusPercentages[2]}%`;
  return borderRadius;
}
