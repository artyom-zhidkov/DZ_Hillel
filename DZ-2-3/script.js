//переименовать всё в камелкейс

function customPow(x,n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function task1() {
    alert("Result 2^10 with cycle : " + customPow(2,10));
}

function task2() {
    const start = Number(prompt("Enter the beginning of the range : ", ''));
    if (!Number.isInteger(start)) {
        return alert("Enter valid integer number");
    }
    
    const end = Number(prompt("Enter end of range : ", ''));
    if (!Number.isInteger(end)) {
        return alert("Enter valid integer number");
    }
    
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2) {
            sum += i;
        }
    }
    alert("The sum of all odd numbers in this range is:  " + sum);
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    } 
    return num !== 1 && num !== 0;
}

function task3() {
    const start = Number(prompt("Enter the beginning of the range : ", ''));
    if (!Number.isInteger(start)) {
        return alert("Enter valid integer number");
    }
    const end = Number(prompt("Enter end of range : ", ''));
    if (!Number.isInteger(end)) {
        return alert("Enter valid integer number");
    }
    const result = [];
    
    for (let  i = start; i <= end; i++) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    if (!result.length) {
        return alert("This range does not contain prime numbers.");
    }
    alert("All prime numbers from this range is:  " + result);
}

function task4() {
    const n = prompt("Enter value n : ", '');
    if (!Number.isInteger(Number(n))) {
        return alert("Enter valid integer number");
    }
    let sum = 0;
    let nNumber = [];
    let nReverse = "";

    for (let i = 0; i < n.length; i++) {
        nNumber[i] = n[i];
        sum += Number(n[i]);
        if (n.length != 1) {
            nReverse += n[n.length-i-1];
        }
    }
    
    //с отрицательными надо проработать

    alert("Разбитое на цифры число n : " + nNumber);
    alert("Количество цифр в числе :  " + nNumber.length);
    alert("Сумма цифр числа n :  " + sum);
    alert("Обратный порядок цифр числа n :  " + nReverse);
}

function task5() {
    const arr = [4, 23, 7, 39, 19, 0, 9, 14, 45, 93, 117, 55, 38, 24, 87];
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] >= 20 && arr[i] <= 80) {
            summ += arr[i];
        }
    }
    alert("Task5. Сумма элементов массива в пределе [20, 80] :  " + summ);

    for (let i = 0; i < arr.length; i++) {
        let v = arr[ i ];
        let j = i-1;
        while (j >= 0 && arr[j] > v) {
            arr[j+1] = arr[j];
            j--; 
        }
        arr[j+1] = v;
    }
    alert("Отсортированный массив (Метод вставок) :  " + arr);
}

function task6() {

    const myText = "Я занимаюсь фигурным катанием с 5 лет. Очень хорошо помню этот день,1 сентября, когда мама привела в спортивную школу. Моя первая победа была в 8 лет. А сколько было падений? Их уже не перечесть. Огромное спасибо моему тренеру, который помогал и верил в меня!"
    let numberCounter = 0;

    for (let i = 0; i < myText.length; i++) {
         if (Number(myText[i])) {
             numberCounter += Number(myText[i]);
         }
    }

// написанный цикл выше будет работать только для текущей задачи, то есть где нет цифр больше 10. На случай если текст будет содежать числа, состоящие более чем из одной цифры я написал следующий цикл. Его ещё можно доработать для дробных чисел.
//    for (let i = 0; i < myText.length; i++) {
//        if (Number(myText[i])) {
//            let nextNumber = myText[i];
//            for (let k = 1; k <= 10; k++) {
//                if (Number(myText[i+k]) || myText[i+k] === "0") {
//                    nextNumber += myText[i+k];
//                }
//                else {
//                    i +=k;
//                    break;
//                }
//            }
//            numberCounter += Number(nextNumber);
//         }
//    }
    alert("Cумма всех чисел в строке : " + numberCounter);
}


document.getElementById("task1").addEventListener("click", task1);
document.getElementById("task2").addEventListener("click", task2);
document.getElementById("task3").addEventListener("click", task3);
document.getElementById("task4").addEventListener("click", task4);
document.getElementById("task5").addEventListener("click", task5);
document.getElementById("task6").addEventListener("click", task6);
