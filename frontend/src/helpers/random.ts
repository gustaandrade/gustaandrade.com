export function getRandomIntBetween(
  min: number,
  max: number,
  banished?: number[]
) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
