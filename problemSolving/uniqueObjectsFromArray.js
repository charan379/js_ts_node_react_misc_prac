console.log(
  uniqueObjectsFromArray([{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}])
);

// Output: [{ name: "Sai" }, { name: "Charan" }]

function uniqueObjectsFromArray(objs) {
  let seenValues = [];

  for (let obj of objs) {
    let value = JSON.stringify(obj);
    if (!seenValues.includes(value)) {
      seenValues.push(value);
    } else {
      continue;
    }
  }

  return seenValues.map((str) => JSON.parse(str));
}
