//1 задание
var name = "Kate and Albina";
console.log("Привет, " + name + "!");

//2 задание
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); // Вывод: true
console.log(isEven(7)); // Вывод: false

//3 задание
var person = {
    name: "Martin",
    age: 40,
    city: "London"
};
  
console.log("Меня зовут " + person.name + ". Мне " + person.age + " лет. Я живу в городе " + person.city + ".");

//4 задание
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log("Сумма чисел в массиве: " + sum);

//задание по вариантам (1 вариант)
function factorial(n) {
    if (n < 0) {
      return "Ошибка: факториал не может быть вычислен для отрицательного числа";
    }
    else if (n === 0) {
      return 1;
    }
    else {
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    }
}
  
console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(-5));
  
  