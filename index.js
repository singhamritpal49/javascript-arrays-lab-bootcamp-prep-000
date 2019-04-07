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
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = ["Broom", ...kittens]
}
