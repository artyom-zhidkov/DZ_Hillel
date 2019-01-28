// DZ - 6 by Artyom Zhidkov
//1.Напишите модуль Complex, который предоставляет методы для работы с комплексными числами. Модуль должен иметь такие методы:
//add
//subtract
//multiply
//divide

const Complex = (function() {
    return {
        add: function(c1, c2) {
            return {
                a: (c1.a + c2.a),
                b: (c1.b + c2.b),
            };
        }, 
        subtract: function(c1, c2) {
            return {
                a: (c1.a - c2.a),
                b: (c1.b - c2.b),
            };
        },
        multiply: function(c1, c2) {
            return {
                a: ((c1.a * c2.a) - (c1.b * c2.b)),
                b: ((c1.a * c2.b) + (c1.b * c2.a)),
            };
        },
        divide: function(c1, c2) {
            return {
                a: (((c1.a * c2.a) + (c1.b * c2.b)) / ((c2.a * c2.a) + (c2.b * c2.b))),
                b: (((c2.a * c1.b) - (c1.a * c2.b)) / ((c2.a * c2.a) + (c2.b * c2.b))),
            };
        },
    };
})();

const c1 = {
    a: 1,
    b: 2,
};
const c2 = {
    a: 3,
    b: 4,
};

console.log("1. Работа с комплексными числами");
console.log("Сложение: ", Complex.add(c1, c2) );
console.log("Вычитание: ", Complex.subtract(c1, c2) );
console.log("Умножение: ", Complex.multiply(c1, c2) );
console.log("Деление: ", Complex.divide(c1, c2) );



//2. Напишите модуль Data, который предоставляет методы:
//createStack
//функция может принимать массив
//функция возвращает объект, у которого есть следующие методы:
//next - возвращает следующий элемент по принципу LIFO и удаляет его из стека.
//add(item) - добавляет item в стек
//createQueue
//функция может принимать массив
//функция возвращает объект, у которого есть следующие методы:
//next - возвращает следующий элемент по принципу FIFO и удаляет его из очереди.
//add(item) - добавляет item в очередь

const Data = (function() {
    return {
        createStack : function (arr=[]) {
            const stack = [...arr];
            return {
                next: function() {
                    return stack.pop();
                },
                add: function(...item) {
                        item.forEach( (i) => stack.push(i) );
                },
                show: function() {
                    console.log(stack);
                },
            };
        },
        createQueue: function (arr=[]) {
            const stack = [...arr];
            return {
                next: function() {
                    return stack.shift();
                },
                add: function(...item) {
                        item.forEach( (i) => stack.push(i) );
                },
                show: function() {
                    console.log(stack);
                },
            };
        }
    };
})();

const Stack1 = Data.createStack([1,2,3,4,5]);

console.log("2. Модуль Data");
console.log("createStack");
Stack1.show();
Stack1.add(6, 7, 8, 9, 10);
Stack1.show();
Stack1.add(11);
Stack1.show();
Stack1.add();
Stack1.show();
console.log(Stack1.next());
Stack1.show();
console.log(Stack1.next());
Stack1.show();
console.log(Stack1.next());
Stack1.show();


const Stack2 = Data.createQueue([1,2,3,4,5]);

console.log("createQueue");
Stack2.show();
Stack2.add(6, 7, 8, 9, 10);
Stack2.show();
Stack2.add(11);
Stack2.show();
Stack2.add();
Stack2.show();
console.log(Stack2.next());
Stack2.show();
console.log(Stack2.next());
Stack2.show();
console.log(Stack2.next());
Stack2.show();

//Как вы можете узнать, в JavaScript есть максимальное и минимальное целое число, которое вы можете использовать.
//Реализовать функцию, которая принимает 2 строки (в каждой из строк должно быть число, например “567345981”), а возвращает - строку, которая представляет собой сумму чисел, которые содержатся во входящих строках. Например: str1 = “123456”, str2 = “123456”, result => “246912”

function sum(str1, str2) {
    const arr1 = str1.split("");
    const arr2 = str2.split("");
    const res = [];
    let transfer = 0;

    while (arr1.length || arr2.length) {
        let a = +(arr1.pop() || 0);
        let b = +(arr2.pop() || 0);
        
        if (a + b + transfer > 9) {
            res.unshift(a + b + transfer - 10);
            transfer = 1;
        } else {
            res.unshift(a + b + transfer);
            transfer = 0;
        }
    };
    if (transfer) {
        res.unshift(1);
    }
    
    return res.join("");
};
           
console.log("3. Сложение больших чисел"); 
console.log(sum("2310020300120300020023", "12323210403040302023032004342234")); 
console.log(sum("999999999999", "11")); 
console.log(sum("11", "999999999999")); 
console.log(sum("123", "1000")); 

//Реализовать функцию, которая принимает 2 строки (в каждой из строк должно быть число, например “567345981”), а возвращает - строку, которая представляет собой разность чисел, которые содержатся во входящих строках.

// возвращает true, если str1 >= str2, иначе возвращает false;
function compareNumbers(str1, str2) {
    const a = str1.split("");
    const b = str2.split("");
    
    if (a.length > b.length) {
        return true;
    }
    if (a.length < b.length) {
        return false;
    }
    
    for (let i = 0; i < str1.length; i++) {
        if (a[i] === b[i]) continue;
        return (a[i] > b[i]) ? true : false;
    }
    
    return true;
};

// работает только с 0 и положительных числах на входе. Можно доработать вариант, когда на вход поступают отрицательные числа
function sub(str1, str2) {
    const res = [];
    const cond = compareNumbers(str1, str2);
    const arr1 = cond ? str1.split("") : str2.split("");
    const arr2 = cond ? str2.split("") : str1.split("");
    let transfer = 0;
    
    while (arr1.length || arr2.length) {
        let a = +(arr1.pop() || 0);
        let b = +(arr2.pop() || 0);
        
        if ((a - transfer) < b) {
            res.unshift(a - transfer + 10 - b);
            transfer = 1;
        } else {
            res.unshift(a - b - transfer);
            transfer = 0;
        }
    }
    if (!res[0]) {
        res.shift();
    }
    if (!cond) {
        res.unshift("-");
    }
    
    return res.join("");
};
           
console.log("4. Вычитание больших чисел"); 
console.log(sub("123", "246")); 
console.log(sub("23", "123")); 
console.log(sub("100", "10")); 
console.log(sub("1", "101")); 
console.log(sub("1", "100001")); 

//Реализовать функцию сортировки массива. На вход функции подается массив, на выход - отсортированный массив. Использовать алгоритм быстрой сортировки.

function partition(arr, low, hi) {
    const pivot = arr[Math.floor((low + hi) / 2)];
    
    while (hi >= low) {
        while (arr[hi] > pivot) {
            hi--;
        }
        while (arr[low] < pivot) {
            low++;
        }
        if (hi >= low) {
            const swap = arr[low];
            arr[low] = arr[hi];
            arr[hi] = swap;
            hi--;
            low++;
        }
    }
    
    return low;
};

function quickSort (arr, low = 0, hi = arr.length-1) {
    if (low < hi) {
        const index = partition(arr, low, hi);
        quickSort(arr, low, index-1);
        quickSort(arr, index, hi);
    } 
    
    return arr;
};

console.log("5. Быстрая сортировка"); 
console.log(quickSort([3,5,6,9,8,7,-4,5,2,1,4,555,4]));
