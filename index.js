var katzDeli = [];

function takeANumber(line, name) {
  var newPosition = [];
  for (let i = 1; i < line.length; i++) {
    newPosition.push(`Welcome ${name[i]}. You are number ${line[i]} in line.`)
  }
  return newPosition
}
