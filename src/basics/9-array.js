let brands = ["Mercedes", "Audi", "Skoda"];

brands.forEach((element) => {
  console.log(element);
});

for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}

for (let i in brands) {
  //index
  console.log(brands[i]);
}

for (let i of brands) {
  //item
  console.log(i);
}
