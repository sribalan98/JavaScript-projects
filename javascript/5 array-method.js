//~ https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769
{
  // array map method
  // it will return a new array ( can't change the original array )
  let mapArr = [1, 2, 3, 4, 5];
  let mapResult = mapArr.map((e) => 2);
  console.log(mapResult);
  console.log(mapArr == mapResult); //it returns new array
}

{
  //array fillter method
  // it will return a new array ( can't change the original array )
  let filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let filterResult = filterArray.filter((e) => e % 2 == 0);
  console.log(filterResult); //it returns new array
}

{
  //array.reduce
  let reduceArray = [34, 39, 72, 100, 95, 60, 50, 18, 70];
  let valueofitem = 0;
  let resultReduce = reduceArray.reduce(
    (totalvalue, arrayvalue) => totalvalue + arrayvalue,
    valueofitem
  );
  console.log(resultReduce);
}

{
  //array.reduceright
  let reduceRightArray = [100, 70, 50, 30, 20, 30];
  let valueOfitem = 1000;
  let resultOfreduceRightArray = reduceRightArray.reduceRight(
    (totalvalue, arrayvalue) => totalvalue - arrayvalue,
    valueOfitem
  );
  console.log(resultOfreduceRightArray);
}
