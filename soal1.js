var data1 = [1, 1, 1, 2, 2, 4, 1, 1]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1]

function cariData(arr) {
  let x = 1;
  let y = 0;
  let result;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        y++;
        if (y > x) {
          x = y;
          result = arr[i];
        }
      }
    }
    y = 0;
  }
  return result;
};

function count(array, value) {
  return array.filter((nilai) => (nilai === value)).length
};

console.log("total data paling banyak keluar adalah", cariData(data1), "dengan jumlah", count(data1, cariData(data1)))
console.log("total data paling banyak keluar adalah", cariData(data2), "dengan jumlah", count(data2, cariData(data2)))
console.log("total data paling banyak keluar adalah", cariData(data3), "dengan jumlah", count(data3, cariData(data3)))