const arr = [1,2,3,54,6,7]
var index = arr.indexOf(54);
if (index !== -1) {
  arr.splice(index, 1);
}
console.log(arr);