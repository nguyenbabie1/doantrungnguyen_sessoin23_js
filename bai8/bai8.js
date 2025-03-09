let number = +prompt("Nhập số lượng phần tử:");

if (isNaN(number) || number < 0) {
    alert("Số lượng phần tử không hợp lệ");
} else if (number === 0) {
    alert("Mảng không có phần tử");
} else {
    let arr = [];
    for (let i = 0; i < number; i++) {
        let input;
        do {
            input = prompt(`Nhập phần tử thứ ${i + 1}:`);
        } while (isNaN(input)); // Kiểm tra nhập số hợp lệ
        arr.push(Number(input));
    }

    let isFibonacci = number >= 2 && arr[0] === 0 && arr[1] === 1 &&
        arr.slice(2).every((num, i) => num === arr[i] + arr[i + 1]);

    let result = isFibonacci
        ? "Dãy số là dãy Fibonacci!"
        : "Dãy số KHÔNG phải Fibonacci!";

    alert(result + "\nMảng của bạn: " + arr.join(", "));
    console.log(result);
    console.log("Mảng của bạn:", arr);
}
