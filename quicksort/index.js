let iterations = 0;

function quicksort(arr) {
  iterations++;

  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];

  let left = [];

  let right = [];

  for (i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)]
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(quicksort(arr))

console.log(iterations)