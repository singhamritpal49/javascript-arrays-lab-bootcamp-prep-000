var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}
function appendKitten(name) {
  var kitten = ["Milo", "Otis", "Garfield"]
  const moreCats = ["Broom",...kitten]
}
