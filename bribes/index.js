const q = [2,1,5,6,3,4,9,8,11,7,10,14,13,12,17,16,15,19,18,22,20,24,23,21,27,28,25,26,30,29,33,32,31,35,36,34,39,38,37,42,40,44,41,43,47,46,48,45,50]

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    const n = q.length;
    
    let s = new Set();
    
    let totals = {};
    
    for (let i = 1; i < n; i++) {
        if (q[i - 1] === 37) {
          console.log(37)
        }
        if (q[i - 1] > i && !totals[q[i - 1]]) {
            if (q[i - 1] - i > 2) {
                console.log('first: ', q[i - 1])
                process.stdout.write('Too chaotic \n');
                
                return;
            } else {
                s.add(i);
                
                totals[q[i - 1]] = q[i - 1] - i;
            }
        }
        
        if (q[i - 1] < i && s.size > 0) {
            let bribes = 0;
            
            for(let b of s) {
                if (q[i - 1] > b) {
                    bribes ++;
                    
                    if(bribes > 2) {
                        console.log('here: ', q[i - 1])
                        process.stdout.write('Too chaotic \n');
                
                        return;
                    } else {
                      totals[q[i - 1]] = q[i - 1] - i;
                    }
                }
                
                if (q[i - 1] === b) {
                    s.delete(b);
                }
            }
        }
    }

    const sum = Object.values(totals).reduce((acc, curr) => acc + curr, 0);
    
    process.stdout.write(sum.toString() + '\n')

}

minimumBribes(q);
