function acceptOnly2Parameters(...p) {
  if (p.length !== 2) {
    throw Error("Only 2 arguments are allowed");
  }
}

// acceptOnly2Parameters(1, 2, 3);

function addNNumbers(...n) {
  if (n.length < 1) {
    throw Error("Please pass one or more parameters");
  }
  var result = 0;
  n.forEach((num) => {
    if (typeof num !== "number") {
      throw Error("Only numbers are accepted");
    } else {
      result += num;
    }
  });
  return result;
}

// addNNumbers(1, 2, 3, 4);

function reverseItems(...items) {
  return [...items].reverse();
}

// reverseItemsBySpread(1, 2, 3);

function reverseItemsByReducer(...items) {
  return items.reduceRight((accumulator, value) => {
    return [...accumulator, value];
  }, []);
}

// reverseItemsByReducer(1, 2, 3);
