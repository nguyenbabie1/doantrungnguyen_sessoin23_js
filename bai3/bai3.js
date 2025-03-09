let n = +prompt("Bạn muốn nhập vào bao nhiêu phần tử");
let arr = [];
if (n === 0) {
    console.log("Mảng không có phần tử");
    alert("Mảng không có phần tử");
} else if (n > 0) {
    let number = [];
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}`);
        if (arr[i] < 0) {
            number.push(arr[i]);
        }
    }
    console.log(number.length > 0 ? `Các số âm: ${number}` : "Không có số âm nào.");
    alert(number.length > 0 ? `Các số âm: ${number}` : "Không có số âm nào.");
} else if(n < 0) {
    console.log("Số phần tử không hợp lệ");
    alert("Số phần tử không hợp lệ");
}
