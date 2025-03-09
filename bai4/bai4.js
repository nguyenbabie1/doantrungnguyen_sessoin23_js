let arr = [];
let n = +prompt("Bạn muốn nhập vào bao nhiêu phần tử");
for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}`);
}
let value = [];
let check = 0;
for (let i = 0; i < n; i ++) {
    if(!isNaN(arr[i])) {
        value.push(arr[i]);
        check++;
    }
}

if(check === 0) {
    console.log("Không tồn tại ký tự số");
    alert("Không tồn tại ký tự số");
} else {
    console.log(value);
    alert(value);
}