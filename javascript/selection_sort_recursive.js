function selectionSortRecursive(arr) {
  //console.log(arr)
  if (arr[0] == undefined){
    return arr
  }
  let min = Math.min(...arr)
  let indx = arr.indexOf(min)
  arr.splice(indx,1)
  selectionSortRecursive(arr)
  arr.unshift(min)
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));
  console.log("");
  console.log("Expecting: [1, 2, 3, 4, 5, 6, 7]");
  console.log("=>", selectionSortRecursive([3, 4, 1, 7, 6, 5, 2]));
  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
