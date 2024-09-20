
function bubbleSort(arr, n){
  let sorted = arr;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      const first = sorted[j];

      const second = sorted[j + 1];

      if (first > second) {
        sorted[j] = second;

        sorted[j + 1] = first;

        swapped = true;
      }
    }
    
    if(!swapped) break
  }

  return sorted;
}

const arr = [ 64, 34, 25, 12, 22, 11, 90 ];

console.log(bubbleSort(arr, arr.length));