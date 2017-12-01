function printBadges(arrayNames) {
  for (let i = 0; i < arrayNames.length; i++)
  console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`)
  return arrayNames
}

function tailsNeverFails() {
  return Math.random() >= 0.5;

  while (tailsNeverFails()) {
    console.log(`You got ${tailsNeverFails[i]} tails in a row!`)
  }
}
