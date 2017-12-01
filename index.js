function printBadges(arrayNames) {
  for (let i = 0; i < arrayNames.length; i++)
  console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`)
  return arrayNames
}

function coinToss() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let counter = 0;
  while (tailsNeverFails()) {}
    counter++
  }
    return `You got ${tailsNeverFails[i]} tails in a row!`
}
