//  DZ-5 Writen by "Artyom Zhidkov
//1. Написать функцию, которая принимает параметром n - размерность матрицы,
//а возвращает - заполненную “1” диагональную матрицу размерности n.

function getDiagonalMatrix(n) {
    if (!Number.isFinite(n)) {
        return alert("Enter valid number");
    }
    const arr = new Array(n);
    let k = 0;
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            (k === j) ? arr[i][j] = 1 : arr[i][j] = 0;             
        }
        k++;
    }
    return arr;
}

console.log("Task 1.");
console.log(getDiagonalMatrix(10).join('\n'));

//2. Напишите функцию, которая принимает строку, а возвращает объект с количеством вхождений каждой уникальной буквы в строке. Например: для строки “My name is Mike.” функция должна вернуть - { a: 1, m: 3, i: 2, n: 1, k: 1, e: 2, s: 1, y: 1 }

function onlyLetters(str) {
    return str.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,', ');
}

function countLetters(str) {
    const arr = onlyLetters(str.toLowerCase()).split("");
    return arr.reduce((obj, current) => {
        obj[current] ?  obj[current]++ : obj[current] = 1;
        return obj;
    },{});
}
console.log("Task 2.");
console.log(countLetters("Need to quickly learn Javascript."));

//3. Напишите функцию, которая принимает параметром строку 
//(число в двоичном формате),
//и возвращает его десятичное представление. 
//Например: на входе строка “10”, на выходе - 2.

function binaryToDecimal(binary) {
    if (binary.split("").some(item => (item!=0 && item!=1))) {
        return alert("Enter number in decimal format");
    }
    return binary.split("").reduceRight((accum, current, index) => {
        return accum + Math.pow(2, binary.length-index-1) * current;
    }, 0); 
}
console.log("Task 3.");
console.log("Десятеричное представление : " + binaryToDecimal("10010111"));

//4. Напишите функцию, которая возвращает случайное число в указанном диапазоне (a, b).

function getRandomFromRange(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return alert("Enter valid number");
    }
    return Math.floor(a + Math.random() * (b + 1 - a));
}

console.log("Task 4.");
console.log("Случайные числа от 1 до 10");
console.log(getRandomFromRange(1, 10));
console.log(getRandomFromRange(1, 10));
console.log(getRandomFromRange(1, 10));
console.log(getRandomFromRange(1, 10));
console.log(getRandomFromRange(1, 10));
console.log(getRandomFromRange(1, 10));
console.log(getRandomFromRange(1, 10));
console.log(getRandomFromRange(1, 10));

//5. Напишите функцию, которая копирует входящий объект.
//6. Напишите функцию, которая копирует входящий массив.

//варинаты с неглубоким копированием

//function cloneObject(obj) {
//    const clone = {};
//    for (let key in obj) {
//        if (obj.hasOwnProperty(key)) {
//            clone[key] = obj [key];
//        }
//    }
//    return clone;
//}

//function cloneObject(obj) {
//    return Object.assign({},obj);
//}

//function cloneObject(obj) {
//    return { ...obj };
//}

//этот правда не копирует методы
//function cloneObject2(obj) {
//    return JSON.parse( JSON.stringify(obj));
//}

//можно разными методами
//function cloneArray(arr) {
//    return arr.slice();
//}

//function cloneArray2(arr) {
//    return arr.filter(() => true);
//}

//function cloneArray2(arr) {
//    return arr.map(item => item);
//}

//глубокое копирование, даже если есть 
//[{a:[1,2]},....] или {а:[1,2],.....}

function cloneObject(obj) {
    const cloneObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (Array.isArray(obj[key])) {
                cloneObj[key] = cloneArray(obj[key]);
            } else {
                if (typeof obj[key] === "object") {
                    cloneObj[key] = cloneObject(obj[key]);
                } else {
                    cloneObj[key] = obj[key];
                }
            }
        }
    }
    return cloneObj;
}

function cloneArray(arr) {
    const clone = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
                clone[i] = cloneArray(arr[i]);
        } else {
            if (typeof arr[i] === "object") {
                clone[i] = cloneObject(arr[i]);
            } else {
                clone[i] = arr[i];
            }
        }
    }
    return clone;
}

const obj = {
    name: ["Artyom",{a:12,b:13}],
    age: 34,
    sex: "male",
    wife: {
        name: "Alena",
        age: 30,
        sex: "female",
        profession: "mather",
        changeProfession: function(newProf) {
            this.profession = newProf;
        }
    }
}

console.log("Task 5.");
console.log("Исходный объект");
console.log(obj);

const newObj = cloneObject(obj);

//теперь делаю несколько глубоких изменений в новом объекте
newObj.wife.changeProfession("Design");
newObj.name[0] = "Oleg"; 
newObj.name[1].a = 555;

//потом проверяю что исходный объект не изменился
console.log("Новый объект (после копирования изменения свойств и вызова метода)");
console.log(newObj);

//смотрим не изменился ли исходный объект
console.log("Исходный объект не изменился");
console.log(obj);

// в данном примере осуществляется глубокое копирование, когда
// есть массив, в нём объект, а в нём ещё один массив
const arr2 = cloneArray([obj,3,4,5,6,7,8,9]);

console.log("Task 6.");
console.log("Новый массив");
console.log(arr2);

//7. Напишите функцию, которая принимает параметрами 2 числа, и возвращает массив чисел в указанном диапазоне.Например: для чисел -2 и 1 функция должна вернуть массив [-2, -1, 0, 1].

function getSequenceFromRange(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return alert("Enter valid number");
    }
    
    const arr = [];
    for (let i = a, k = 0 ; i <= b; i++ ) {
        arr[k++] = i;
    }
    return arr;
}

console.log("Task 7.");
console.log(getSequenceFromRange(-5, 4));

//HARD:
//Напишите функцию, которая принимает параметром массив (не обязательный параметр) а возвращает объект, в котором есть метод next, при каждом последующем вызове которого он будет возвращать следующий объект из массива. В объекте также должен быть метод set, который должен принимать массив и заменять им первоначальный массив. Также в объекте должно быть свойство completed, которое по умолчанию равно false, но должно быть изменено на true в тот момент, когда метод next вернет последний элемент массива.


function getIterableObject(arr) {
    const obj = {};
    let i = 0;
    if (!Array.isArray(arr)) {
        arr = [];
    }
    obj.next = () => {
        if (obj.completed) return;
        if (i === arr.length-1) {
            obj.completed = true;
        }
        return arr[i++];
    };
    obj.set = newArr => {
        if (!Array.isArray(newArr)) {
            alert("Метод set(arr) принимает только массив. Укажите массив");
        } else {
            i = 0;
            obj.completed = false;
            arr.splice(0, arr.length); // очищаем массив на случай если новый будет меньшего размера
            newArr.forEach(item => arr.push(item)); // можно доработать на случай того, если элементами массива будут объекты
        }
    };
    obj.print = () => console.log(arr);//метод создан для проверки масива
    obj.completed = false;
    return obj;
}

const myobj = getIterableObject(["first", "second", "three"]);

console.log("Task HARD");
console.log(myobj.print());
console.log(myobj.set([1,2]));
console.log(myobj.print());
console.log("next() " + myobj.next());
console.log(".completed " + myobj.completed);
console.log("next() " + myobj.next());
console.log(".completed " + myobj.completed);
console.log("next() " + myobj.next());
console.log(".completed " + myobj.completed);
console.log("next() " + myobj.next());
console.log(".completed " + myobj.completed);


