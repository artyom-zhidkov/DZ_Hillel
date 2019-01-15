//1. Напишите функцию, которая выделяет все параграфы 
//на странице красным цветом фона.

let arrAllParagraph = document.querySelectorAll('p');   //вынесли из функции 
    
function changeElementsColor(arrayElements, color) {
    for (let i = 0; i < arrayElements.length; i++) {
        arrayElements[i].style.background = color;
    }
}

//2. Функция принимает параметр - возраст пользователя. Если число больше 16 
// – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

function checkAge(age) {
    return age >= 16 ? "Добро пожаловать" : "Вы еще молоды";
}

function runTask2() {
    const age = Number(prompt("Enter the beginning of the range : ", ''));
    if (!Number.isInteger(age)) {
        return alert("Enter valid age");
    }
    alert(checkAge(age));
}

//3. Написать функцию возведения числа в степень.
// сделать через рекурсию

function customPow(x,n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function runTask3() {
    const x = Number(prompt("Введите число : ", ''));
    if (!Number.isFinite(x)) {
        return alert("Enter valid number");
    }
    const n = Number(prompt("Введите степень : ", ''));
    if (!Number.isFinite(x)) {
        return alert("Enter valid number");
    }
    alert( x + "^" + n + " = " + customPow(x,n));
}

//4. Написать функцию расчета факториала числа (рекурсивную).

function factorial(x) {
    return x ? x * factorial(x - 1) : 1;
}

function runTask4() {
    const x = Number(prompt("Введите число : ", ''));
    if (!Number.isInteger(x)) {
        return alert("Enter valid number");
    }
    alert(x + "! = " + factorial(x));
}

//5. Написать функцию преобразования температуры из цельсия в фаренгейт.

function convertCelsiusToFaringeit(degrees) {
    return (degrees * (9/5) + 32);
}


function runTask5() {
    const x = Number(prompt("Введите значение по цельсию °C : ", ''));
    if (!Number.isFinite(x)) {
        return alert("Enter valid number");
    }
    alert(x + " °C = " + convertCelsiusToFaringeit(x) + " °F");
}

//6. Написать функцию расчета расстояния между 2 точками (x, y);

function getDistanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt(customPow((x2-x1),2) + customPow((y2-y1),2));
}

const x1str = document.getElementById("x1");
const y1str = document.getElementById("y1");
const x2str = document.getElementById("x2");
const y2str = document.getElementById("y2");

function runTask6() {
    const x1 = x1str.value;
    const y1 = y1str.value;
    const x2 = x2str.value;
    const y2 = y2str.value;
    const hasError = [x1,x2,y1,y2].every( val => {
        if (x1 === "") {
            return false;
        }
        return Number.isFinite(Number(val));
    });
    if (!hasError) {
        return alert("Enter valid number");
    }
    alert("Расстояние между точками = " + getDistanceBetweenPoints(x1, y1, x2, y2));
}

//7. Написать функцию, которая считает количество кликов по кнопке.

const myCounter1 = getCounter(document.getElementById("btn-1"));
const myCounter2 = getCounter(document.getElementById("btn-2"));
const myCounter3 = getCounter(document.getElementById("btn-3"));

function getCounter(el) {
    let count = 0;
    return {
        changeInnerTextButton: function () {
            count++;
            el.innerText = "На меня нажали " + count + " раз";
        },
        //метод для получения количества кликов
        getValueCount: function () {
    	   return count;
        }
    }
}

//8. Написать функцию сортировки (пузырьковая сортировка).

let myArr = [45, 2, 98, 34, 4, 145, 65, 12, 72, 33, 82, 23, 64];
document.getElementById("myArr").innerHTML = myArr;

function sortArrayBubbleMethod(arr) {
    const len = arr.length;
    for (let j = 1; j < len; j++ ) {
        for (let i = 1; i < len + 1 - j; i++ ) {
            if (arr[i] < arr[i-1]) {
                let temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

function runTask8() {
    document.getElementById("sortArr").innerHTML = sortArrayBubbleMethod(myArr);
}

//9. Написать функцию, которая принимает цвет в формате { R, G, B } и затемняет его на величину “a”.

function darkenColorRGB(r,g,b,a) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function runTask9() {
    document.querySelector(".div__task9").style
    .background = darkenColorRGB(155,233,32,0.8);
}

document.getElementById("task1").addEventListener("click", () => changeElementsColor(arrAllParagraph,"red"));
document.getElementById("task2").addEventListener("click", runTask2);
document.getElementById("task3").addEventListener("click", runTask3);
document.getElementById("task4").addEventListener("click", runTask4);
document.getElementById("task5").addEventListener("click", runTask5);
document.getElementById("task6").addEventListener("click", runTask6);
document.getElementById("btn-1").addEventListener("click", myCounter1.changeInnerTextButton);
document.getElementById("btn-2").addEventListener("click", myCounter2.changeInnerTextButton);
document.getElementById("btn-3").addEventListener("click", myCounter3.changeInnerTextButton);
document.getElementById("task8").addEventListener("click", runTask8);
document.getElementById("task9").addEventListener("click", runTask9);


//1. Напишите функцию, которая принимает параметром массив, и возвращает массив, состоящий только из положительных элементов входного массива.

let myArr2 = [45, -2, 98, 34, -4, 145, 65, -12, 72, -33, 82, -23, -64];
document.getElementById("myArr2").innerHTML = myArr2.join(",  ");

function getPositiveElements(arr) {
    let res = [];
    for (let i = 0, len = arr.length; i < len; i++ ) {
        if (arr[i] > 0) {
            res.push(arr[i]);
        }    
    }
    return res;
//    альтернативный вариант
//    return arr.filter( element => element > 0);
}

function runHomeTask1() {
    document.getElementById("positiveArr").innerHTML = getPositiveElements(myArr2);
}

//2. Напишите функцию, которая на вход принимает массив чисел, а на выходе возвращает массив удвоенных элементов входного.

let myArr3 = [45, -2, 98, 34, -4, 145, 65, -12, 72, -33, 82, -23, -64];
document.getElementById("myArr3").innerHTML = myArr3;

function getDoubleElements(arr) {
    for (let i = 0, len = arr.length; i < len; i++ ) {
        arr[i] += arr[i];  
    }    
    return arr;
//    альтернативный вариант
//    return arr.map(element => element*2);
}

function runHomeTask2() {
    document.getElementById("doubleArray").innerHTML = getDoubleElements(myArr3);
}

//3. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let myArr4 = [12, 15, 20, 25, 59, 79];
document.getElementById("myArr4").innerHTML = myArr4;

function calcAverage(arr) {
    let sum = 0;
    const len = arr.length;
    for (let i = 0; i < len; i++ ) {
        sum += arr[i];  
    }    
    return sum/len;
//    альтернативный вариант
//    return arr.reduce((sum, i) => sum + i) / arr.length;
}

function runHomeTask3() {
    document.getElementById("resAverage").innerHTML = calcAverage(myArr4);
}

//4. Напишите функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля.

function Person(position, name, age) {
    this.position = position;
    this.name = name;
    this.age = age;
}

const staff = [new Person("waiter", "Vasya", 23), 
               new Person("barman", "Grigoriy", 28), 
               new Person("cook", "Elena", 30),
               new Person("security guard", "Alex"),
               new Person("administrator", "Olga", 30)
              ]


function pluck(arr, propName) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
       res.push(arr[i][propName]);
    }
    return res.filter(Boolean);
}

function runHomeTask4() {
    document.getElementById("resPluck").innerHTML = pluck(staff, "age");
}

//5. Напишите функцию filter, которая принимает функцию “fn” и массив. Возвращает она массив значений, для которых “fn” вернет true.

let myArr6 = [45, -2, 98, 34, -4, 145, 65, -12, 72, -33, 82, -23, -64];
document.getElementById("myArr6").innerHTML = myArr6;

function customfilter(arr, fn) {
    let res = [];
    for (let i = 0, len = arr.length; i < len; i++ ) {
        if (fn(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

function runHomeTask5() {
    document.getElementById("filterArray").innerHTML = 
    (customfilter(myArr6, el => !(el % 2) ));
}

//6. Напишите функцию, считающую число свойств в объекте

const myObject = {
    name: "Artyom",
    surname: "Zhidkov",
    sex: "male",
    age: 34
}

function countProperty(obj) {
    let count = 0
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            count++;
        }
    }
    return count;
//    альтернативные варианты
//    return Object.getOwnPropertyNames(obj).length;
//    return Object.keys(obj).length;
}

function runHomeTask6() {
    document.getElementById("resCountProperty").innerHTML = countProperty(myObject);
}

//7. Дан узел DOM. Сделай функции hasClass(node, className), addClass(node, className), removeClass(node, className), которые позволяют проверить, есть ли у элемента заданный CSS-класс, добавить к нему класс (если его еще нет) и удалить класс.

//сделал без применения существующих методов ClassList, так как было бы слишком просто

let nodeDom = document.getElementById("NodeDom");

function hasClass(node, classNew) {
    let arr = node.className.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === classNew) {
            return true;
        }
    }
    return false;
}

function addClass(node, classNew) {
    if (!hasClass(node, classNew)) {
        if (node.className) {
            node.className += " " + classNew;
        } else {
            node.className = classNew;
        }
        return true;
    }
    return false;
}

function removeClass(node, classNew) {
    let arr = node.className.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === classNew) {
            arr.splice(i,1);
            node.className = arr.join(" ");
            return true;
        }
    }
    return false;
}

function runHomeTask7() {
    console.log("СSS классы узла DOM на данный момент: ");
    console.log(nodeDom.className);
    console.log("Есть ли класс anyClass2 ? : " + hasClass(nodeDom, "anyClass2"));
    console.log("Есть ли класс anyClass5 ? : " + hasClass(nodeDom, "anyClass5"));
    console.log("");
    console.log("Добавляем класс anyClass7 ? : " + addClass(nodeDom, "anyClass7"));
    console.log("Добавляем класс anyClass2 ? : " + addClass(nodeDom, "anyClass2"));
    console.log("СSS классы узла DOM на данный момент: ");
    console.log(nodeDom.className);
    console.log("");
    console.log("Удаляем класс anyClass1 ? : " + removeClass(nodeDom, "anyClass1"));
    console.log("Удаляем класс anyClass55 ? : " + removeClass(nodeDom, "anyClass55"));
    console.log("СSS классы узла DOM на данный момент: ");
    console.log(nodeDom.className);
}

document.getElementById("homeTask1").addEventListener("click", runHomeTask1);
document.getElementById("homeTask2").addEventListener("click", runHomeTask2);
document.getElementById("homeTask3").addEventListener("click", runHomeTask3);
document.getElementById("homeTask4").addEventListener("click", runHomeTask4);
document.getElementById("homeTask5").addEventListener("click", runHomeTask5);
document.getElementById("homeTask6").addEventListener("click", runHomeTask6);
document.getElementById("homeTask7").addEventListener("click", runHomeTask7);