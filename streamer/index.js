/*
Build a component that supports these operations on a given set of streams

Get the next item by cycling through the given streams
T next()

Returns true if there is at least one item that can returned by next(), false otherwise
boolean hasNext()

Sample Input
———————
Stream #1 34,36,2,5,1
Stream #2 4,65,3
Stream #3 
Stream #4 1


Output
———————
next() -> 34
next() -> 4
hasNext() -> true
next() -> 1
next() -> 36
.
.
.
,65, 2, 3, 5, 
next() -> 1
hasNext() -> false
next() -> null

*/

class Streamer {
  constructor() {
    this.m = [];
    this.r = 0;
    this.c = 0;
    this.complete = true;
    this.iterables = 0;
    this.iterates = 0;
    this.size = 0;
  }

  add(stream) {
    const s = stream.split(',');
    if(s.length && !!s[0]) {
      this.iterables += s.length;
      this.m.push(s);
      this.complete = false;
      this.size += 1;
    }
  }

  next() {
    if (this.complete) return null;

    let nextVal = null;

    if (this.m[this.c][this.r]) {
      nextVal = this.m[this.c].shift();
    }

    this.increment();

    return nextVal;
  }

  hasNext() {
    return !this.complete;
  }

  increment() {
    let fountNext = false;

    while(!this.complete && !fountNext){
      if (this.iterates + 1 >= this.iterables) {
        this.complete = true;

        break;
      } else {
        if (this.c + 1 >= this.size){
          this.c = 0;
        } else {
          this.c +=1;
        }

        if(this.m[this.c]?.[this.r]){
          this.iterates += 1;
          fountNext = true;
        } else {
          this.refreshList()
        }

      }
    }
  }
  refreshList(){
    this.m = this.m.slice(0, this.c).concat(this.m.slice(this.c + 1))
  }

  incrementColumn() {
    this.c += 1;
  }

  incrementRow() {
    this.r += 1;
  }
}

const stream = new Streamer();

stream.add('34,36,2,5,1')
stream.add('4,65,3')
stream.add('')
stream.add('1')

console.log(stream.next())
console.log(stream.hasNext())
console.log(stream.next())
console.log(stream.next())
console.log(stream.next())
console.log(stream.next())
console.log(stream.next())
console.log(stream.next())
console.log(stream.next())
console.log(stream.next())
console.log(stream.next())
stream.add('4,65,3')
console.log(stream.hasNext())
console.log(stream.next())
console.log(stream.next())
console.log(stream.next())
console.log(stream.next())

