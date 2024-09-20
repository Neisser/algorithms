function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  return arr
}

function selectionSort(arr, n){
  let sorted = arr;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (sorted[j] < sorted[minIndex]) minIndex = j;
    }

    if (sorted[i] > sorted[minIndex]) sorted = swap(sorted, i, minIndex);
  }

  return sorted;
}

const arr = [64, 25, 12, 22, 11];

console.log(selectionSort(arr, arr.length))