//-------------------List ADT----------------------
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.find = find;
  this.toString = toString;
  this.length = length;
  this.append = append;
  this.remove = remove;
  this.clear = clear;
  this.contains = contains;
  this.insert = insert;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
}

//Add Element
function append(element) {
  this.dataStore[this.listSize++] = element;
}

//Find Element
function find(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

//Remove Element
function remove(element) {
  let foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

//Lenght
function length() {
  return this.listSize;
}

//toString
function toString() {
  return this.dataStore;
}

//clear
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

//contains
function contains(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}

//front
function front() {
  this.pos = 0;
}

//prev
function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

//end
function end() {
  this.pos = this.listSize - 1;
}

//next
function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
}

//currPos
function currPos() {
  return this.pos;
}

//moveTo
function moveTo(position) {
  this.pos = position;
}

//getElement
function getElement() {
  return this.dataStore[this.pos];
}

//insert
const insert = () => {};

var names = new List();
names.append('a');
names.append('b');
names.append('c');
console.log(names.toString());
// console.log(names.length());
// console.log(names.toString());
// names.remove('b');
// console.log(names.toString());
// console.log(names.contains('a'));
// names.clear();
// names.front();
// console.log(names.getElement());
// names.next();
// console.log(names.getElement());
// names.end();
// console.log(names.getElement());
names.front();
console.log(names.getElement());
//for (names.front(); names.currPos() < names.length(); //names.next()) {
//  console.log('a');
//  console.log(names.getElement());
//}
