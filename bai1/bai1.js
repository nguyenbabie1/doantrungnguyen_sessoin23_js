let arr = [];
let value = [];
let check = 0;
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt(`Mời bạn nhập vào số thứ ${i + 1}`);
    if (arr[i] >= 10) {
        value.push(arr[i]);
        check++;
    }
}

if (check > 0) {
    console.log(`Số lớn hơn 10 trong mảng là ${value}`);
    alert(`Số lớn hơn 10 trong mảng là ${value}`);
} else {
    console.log("Không có số lớn hơn 10");
    alert("Không có số lớn hơn 10");
}