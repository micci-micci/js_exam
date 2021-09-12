'use strict';

{
  const array = [2, 4, 7, 5, 4, 3, 8];

  let result = array.filter( (val, i, array) => {
    return (array.indexOf(val) === i);
  });
  console.log(result);
}