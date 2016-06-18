function bubbleSort(arr) {
  // parameter checking
  if(arr.length === 0) {
    throw new Error();
  }
  else if(arr.length === 1) {
    throw new Error();
  }
  for (var j = 0; j < arr.length; j++) {
    if(isNaN(arr[j])) {
      throw new Error();
    }
  }
  var temp;
  var length = arr.length;
  var moves = 0;
  var divSorting;
  var divArr = document.getElementById("sorting");
  divArr.innerHTML = arr;

  while(length > 1) {
    for(var i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        moves++;
        divSorting = document.createElement("div");
        divSorting.innerHTML = arr;
        divArr.appendChild(divSorting);
      }
    }
    length--;
  }
  return moves;
}

Array.prototype.bubbleSort = function () {
  // parameter checking
  if(this.length === 0) {
    throw new Error("Length cannot be less than 1.");
  }
  else if(this.length === 1) {
    throw new Error("Array with 1 value already sorted.");
  }
  var temp;
  var length = this.length;
  var moves = 0;
  var divSorting;
  var divthis = document.getElementById("sorting");
  divthis.innerHTML = this;

  while(length > 1) {
    for(var i = 0; i < this.length - 1; i++) {
      if(this[i] > this[i + 1]) {
        temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        moves++;
        divSorting = document.createElement("div");
        divSorting.innerHTML = this;
        divthis.appendChild(divSorting);
      }
    }
    length--;
  }
  return moves;
};