let arr = [];
for (let i = 0; i < 10; i++) {
    let num;
    do {
        num = parseFloat(prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}`));
    } while (isNaN(num));
    arr[i] = num;
}
let max = arr[0];
let max_i = 1;

for (let i = 1; i < 10; i++) {
    if (arr[i] > max) {
        max = arr[i];
        max_i = i + 1;
    }
}
console.log(`Số lớn nhất: ${max}`);
alert(`Số lớn nhất: ${max}`);
console.log(`Vị trí: ${max_i}`);
alert(`Vị trí: ${max_i}`);