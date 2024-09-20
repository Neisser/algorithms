function arrangeCoins(n) {

  const sum = (n) => (n * (n + 1)) / 2;
  
  let n1 = 0;

  for (let i = 1; sum(i) <= n; i++) {
      if(sum(i) === n) return i;

      n1 = i;
  }

  n1 += 1;

  const r = sum(n1) - n;

  let n2 = 0;

  for(let i = 1; sum(i) <= r; i++) {
      if(sum(i) === r) return n1 - i;
      
      n2 = i;
  }

  return n1 - n2;
};

console.log(arrangeCoins(7))