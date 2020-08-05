//Spread operator

  const numberOfAge = [10,15,98,45,45];

  const secondAges = [20,25,68,78];

  const someValues = [25,89,56,78];

  const allValues = [...numberOfAge,...secondAges,5,...someValues];

  console.log(allValues);

  // maximum value of an array using Spread operator

  const max = Math.max(...allValues);
  console.log(max);
