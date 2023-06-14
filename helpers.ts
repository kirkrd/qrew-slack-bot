export function getRandomNumber(min: number, max: number) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();

  // Scale the random decimal to the desired range
  const randomInRange = randomDecimal * (max - min + 1) + min;

  // Floor the result to get an integer within the range
  const randomNumber = Math.floor(randomInRange);

  return randomNumber;
}
