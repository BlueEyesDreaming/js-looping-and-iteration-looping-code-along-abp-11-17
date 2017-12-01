function printBadges(arrayNames) {
  for (let i = 0; i < arrayNames.length; i++)
  console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`)
  return arrayNames
}

function coinToss() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let i = 0;
  while (coinToss()) {
    i++
  }
  return `You got ${i} tails in a row!`
}
