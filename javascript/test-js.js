// Make a bubble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap. Add a holder
        let temp = arr[j];
        // Show what the lesser value is equal to.
        arr[j] = arr[j + 1];
        // Show what the greater value is equal to.
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5, 3, 8, 4, 2]));

// make a binary search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 3));