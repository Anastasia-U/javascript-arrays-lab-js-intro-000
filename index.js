  var kittens = ["Milo", "Otis", "Garfield"];

  function destructivelyAppendKitten(name) {
    kittens.push(name);
    return kittens;
  }

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}


function appendKitten(name) {
  var p = [...kittens, name];
  return p;
}

function prependKitten(name) {
  var p = [name, ...kittens];
  return p;
}

function removeLastKitten() {
   var p = kittens.slice(0, kittens.length-1);
   return p;
}

function removeFirstKitten() {
  var p = kittens.slice(1);
  return p;
}
