//Задача: Управление аккаунтом с использованием `this` account
// const account = {
//   owner: "Alice",
//   balance: 1000,
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Депозит: ${amount}. Текущий баланс: ${this.balance}`);
//   },

//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       console.log(`Снято: ${amount}. Текущий баланс: ${this.balance}`);
//     } else {
//       console.log(`Недостаточно средств для снятия: ${amount}`);
//     }
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getOwner() {
//     return this.owner;
//   },
// };

// console.log(`Владелец аккаунта: ${account.getOwner()}`);

// account.deposit(500);
// account.withdraw(200);
// account.withdraw(2000);
// console.log(account.getBalance());

// Задача: Слияние объектов address
//
// const user = {
//   username: "john_doe",
//   email: "john@example.com",
//   age: 30,
// };

// const address = {
//   city: "New York",
//   state: "NY",
//   postalCode: "10001",
// };

// const userProfile = {
//   ...user,
//   ...address,
// };

// console.log(userProfile);

// Задача: Функция Конструктор Book-construct
// Функция-конструктор для создания объектов книг
// Функция-конструктор для создания объектов книг
// function Book(title, author, year, genre) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.genre = genre;
// }

// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
// const book2 = new Book("1984", "George Orwell", 1949, "Dystopian");
// const book3 = new Book(
//   "The Great Gatsby",
//   "F. Scott Fitzgerald",
//   1925,
//   "Classic"
// );

// console.log(book1);
// console.log(book2);
// console.log(book3);

//Задача: Создание объекта с помощью литерала объекта
// Создание объекта с помощью литерала объекта
// const book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,
//   isAvailable: true,
// };

// console.log(book);

// Задача: Объекты и методы в контексте `this` calculator
// const calculator = {
//   num1: 0,
//   num2: 0,

//   setNumbers(a, b) {
//     this.num1 = a;
//     this.num2 = b;
//   },

//   add() {
//     return this.num1 + this.num2;
//   },

//   subtract() {
//     return this.num1 - this.num2;
//   },

//   multiply() {
//     return this.num1 * this.num2;
//   },

//   divide() {
//     if (this.num2 !== 0) {
//       return this.num1 / this.num2;
//     } else {
//       return "Деление на ноль невозможно!";
//     }
//   },
// };

// calculator.setNumbers(10, 5);
// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());

//  Задача: Создание объекта с помощью Object() car

// const car = new Object();

// car.brand = "Tesla";
// car.model = "Model S";
// car.year = 2023;
// car.isElectric = true;

// console.log(car);

//Задача: Управление транзакцией карты

// const cardTransaction = {
//   amount: 0,
//   transactionType: "",
//   transactionStatus: "pending",

//   updateTransaction(amount, type, status) {
//     this.amount = amount;
//     this.transactionType = type;
//     this.transactionStatus = status;
//     console.log(
//       `Транзакция обновлена: ${type} на сумму ${amount}, статус: ${status}`
//     );
//   },

//   resetTransaction() {
//     this.amount = 0;
//     this.transactionType = "";
//     this.transactionStatus = "pending";
//     console.log("Информация о транзакции сброшена.");
//   },

//   getTotal(balance) {
//     if (this.transactionStatus === "completed") {
//       if (this.transactionType === "purchase") {
//         return balance - this.amount;
//       } else if (this.transactionType === "refund") {
//         return balance + this.amount;
//       }
//     }
//     return balance;
//   },

//   displayTransaction() {
//     if (this.transactionType && this.transactionStatus !== "pending") {
//       console.log(
//         `Транзакция: ${this.transactionType} на сумму ${this.amount}, статус: ${this.transactionStatus}`
//       );
//     } else {
//       console.log("Транзакция не была выполнена.");
//     }
//   },
// };

// let currentBalance = 500;

// cardTransaction.updateTransaction(100, "purchase", "completed");
// cardTransaction.displayTransaction();

// currentBalance = cardTransaction.getTotal(currentBalance);
// console.log(`Новый баланс: $${currentBalance}`);

// cardTransaction.resetTransaction();
// cardTransaction.displayTransaction();

// ### Задача: Копирование объекта

// function copyObject(obj) {
//   return Object.assign({}, obj);
// }

// const original = { name: "Alice", age: 30 };
// const copy = copyObject(original);

// console.log(copy);

// console.log(original === copy);

// ### Задача: Подсчёт количества свойств в объекте

// function countProperties(obj) {
//   return Object.keys(obj).length;
// }

// const user = { name: "Alice", age: 30, city: "New York" };
// console.log(countProperties(user));

// ### Задача: Итерация по объектам с помощью Object.values()
// Создаем объект course с начальными свойствами
// const course = {
//   title: "JavaScript ",
//   instructor: "Иван Иванов",
//   duration: 10,
//   price: 199,
// };

// const values = Object.values(course);

// values.forEach((value) => {
//   console.log(value);
// });
// ### Задача: Создание объекта пользователя

// function createUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// console.log(createUser("Alice", 30));

// ### Задача: Управление кредитным счетом

// const creditAccount = {
//   owner: "Alice",
//   balance: 0,
//   creditLimit: -2000,
//   apr: 0.18,

//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Пополнение на: ${amount}. Текущий баланс: ${this.balance}`);
//   },

//   withdraw(amount) {
//     if (this.balance - amount < this.creditLimit) {
//       console.log(`Не удалось снять: ${amount}. Превышение кредитного лимита!`);
//     } else {
//       this.balance -= amount;
//       console.log(`Снято: ${amount}. Текущий баланс: ${this.balance}`);
//     }
//   },

//   applyInterest() {
//     if (this.balance < 0) {
//       const interest = (Math.abs(this.balance) * this.apr) / 12;
//       this.balance -= interest;
//       console.log(
//         `Начислены проценты: ${interest.toFixed(
//           2
//         )}. Текущий баланс: ${this.balance.toFixed(2)}`
//       );
//     }
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getDebt() {
//     return this.balance < 0 ? Math.abs(this.balance) : 0;
//   },
// };

// creditAccount.deposit(1000);
// creditAccount.withdraw(2000);
// creditAccount.applyInterest();
// console.log(creditAccount.getDebt());

// ### Задача: Удаление свойства из объекта
// Функция для удаления свойства из объекта
// function deleteProperty(obj, propertyName) {
//   if (propertyName in obj) {
//     delete obj[propertyName];
//   }
//   return obj;
// }

// const person = { name: "Bob", age: 40, city: "San Francisco" };
// console.log(deleteProperty(person, "city"));

// ### Задача: Манипуляция со свойствами объекта

// const createEmployee = (name, position, salary, isFullTime) => ({
//   name,
//   position,
//   salary,
//   isFullTime,
// });

// const updateEmployee = (employee, newPosition, hireDate) => {
//   employee.position = newPosition;
//   employee.hireDate = hireDate;
//   delete employee.salary;
//   return employee;
// };

// const employee = createEmployee("Manuchehr", "Developer", 60000, true);
// console.log("Начальный объект:", employee);

// const newPosition = "Senior Developer";
// const hireDate = "2025-01-15";

// const updatedEmployee = updateEmployee(employee, newPosition, hireDate);
// console.log("Обновленный объект:", updatedEmployee);

// ### Задача: Создание объекта с информацией о фильме

// const createMovie = (title, director, year, genres, isWatched) => ({
//     title,
//     director,
//     year,
//     genres,
//     isWatched,
// });

// const title = "Inception";
// const director = "Christopher Nolan";
// const year = 2010;
// const genres = ["Sci-Fi", "Action", "Adventure"];
// const isWatched = true;

// const movie = createMovie(title, director, year, genres, isWatched);
// console.log(movie);

// ### Задача: Проверка существования свойства в объекте

// const hasProperty = (obj, propertyName) => {
//   return propertyName in obj;
// };

// const car = { brand: "Toyota", model: "Camry", year: 2021 };

// console.log(hasProperty(car, "model"));
// console.log(hasProperty(car, "color"));

// ### Задача: Итерация по объектам с помощью for...in

// const laptop = {
//   brand: "Dell",
//   model: "XPS 13",
//   year: 2022,
//   price: 999,
// };

// for (const property in laptop) {
//   if (laptop.hasOwnProperty(property)) {
//     console.log(`${property}: ${laptop[property]}`);
//   }
// }

// ### Задача: Работа с дескрипторами свойств

// const person = {
//   name: "Manucher",
//   age: 30,
// };

// Object.defineProperty(person, "age", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

// const ageDescriptor = Object.getOwnPropertyDescriptor(person, "age");
// console.log("Дескриптор свойства 'age':", ageDescriptor);

// try {
//   person.age = 35;
// } catch (error) {
//   console.log("Ошибка при изменении свойства 'age':", error.message);
// }

// console.log("Свойства объекта person:");
// for (const key in person) {
//   console.log(key, ":", person[key]);
// }

// console.log("Значение свойства 'age':", person.age);

// ### Задача: Манипуляция со свойствами объекта

// const product = {
//   name: "Smartphone",
//   price: 699.99,
//   category: "Electronics",
//   inStock: false,
// };

// function updateProduct(product, newPrice, rating) {
//   product.price = newPrice;

//   product.inStock = true;

//   product.rating = rating;

//   delete product.category;

//   return product;
// }

// const initialName = "Smartphone";
// const initialPrice = 699.99;
// const initialCategory = "Electronics";
// const initialInStock = false;
// const newPrice = 599.99;
// const rating = 4.5;

// const newProduct = {
//   name: initialName,
//   price: initialPrice,
//   category: initialCategory,
//   inStock: initialInStock,
// };

// const updatedProduct = updateProduct(newProduct, newPrice, rating);

// console.log("Обновлённый объект:", updatedProduct);

// ### Задача: Защита объектов от изменения

// const project = {
//   name: "Website Redesign",
//   team: ["Alice", "Bob", "Charlie"],
//   status: "In Progress",
// };

// const checkAddition = (obj) => {
//   obj.deadline = "2023-12-31";
//   console.log(
//     "После добавления deadline:",
//     obj.deadline ? "Добавлено" : "Не добавлено"
//   );
// };

// const checkSeal = (obj) => {
//   obj.status = "Completed";
//   delete obj.team;
//   console.log("После изменения статуса:", obj.status);
//   console.log("После удаления команды:", obj.team ? "Удалено" : "Не удалено");
// };

// const checkFreeze = (obj) => {
//   obj.name = "New Project Name";
//   console.log("После изменения имени:", obj.name);
// };

// Object.preventExtensions(project);
// checkAddition(project);

// Object.seal(project);
// checkSeal(project);

// Object.freeze(project);
// checkFreeze(project);

// console.log("Финальное состояние объекта:", project);

// ### Задача: Прототипы в JavaScript

// const Person = function (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// const person1 = new Person("John", "Doe");

// const employee = Object.create(person1);
// employee.position = "Software Engineer";

// console.log(person1.getFullName());
// console.log(employee.position);

// ### Задача: Управление корзиной одного товара

// const shoppingCart = {
//   itemName: "",
//   itemPrice: 0,
//   itemQuantity: 0,

//   updateItem(name, price, quantity) {
//     this.itemName = name;
//     this.itemPrice = price;
//     this.itemQuantity = quantity;
//     console.log(
//       `Товар обновлен: ${name}, количество: ${quantity}, цена: ${price}`
//     );
//   },

//   resetItem() {
//     this.itemName = "";
//     this.itemPrice = 0;
//     this.itemQuantity = 0;
//     console.log("Корзина пуста.");
//   },

//   getTotal() {
//     return this.itemPrice * this.itemQuantity;
//   },

//   displayCart() {
//     if (this.itemName) {
//       console.log(
//         `Товар: ${this.itemName}, количество: ${this.itemQuantity}, цена: ${this.itemPrice}`
//       );
//     } else {
//       console.log("Корзина пуста.");
//     }
//   },
// };

// shoppingCart.updateItem("Ноутбук", 999.99, 1);
// shoppingCart.displayCart();
// console.log(`Общая стоимость: $${shoppingCart.getTotal()}`);
// shoppingCart.resetItem();
// shoppingCart.displayCart();

// ### Задача: Итерация по объектам с помощью Object.keys()
// const student = {
//   name: "Иван",
//   age: 20,
//   major: "Информатика",
//   gpa: 3.7,
// };

// const keys = Object.keys(student);
// console.log(`Количество свойств: ${keys.length}`);

// keys.forEach((key) => {
//   console.log(`${key}: ${student[key]}`);
// });

// ### Задача: Обновление свойства объекта

// const updateProductQuantity = (product, newQuantity) => {
//   product.quantity = newQuantity;
//   return product;
// };

// const product = { name: "Laptop", price: 999.99, quantity: 5 };
// console.log(updateProductQuantity(product, 10));
// ### Задача: Деструктурирование объектов

// const user = {
//   username: "john_doe",
//   email: "john@example.com",
//   age: 30,
//   country: undefined,
// };

// const { username, email, age, country = "Unknown" } = user;

// console.log(username);
// console.log(email);
// console.log(age);
// console.log(country);

// ### Задача: Паттерн Фабрика (Factory Pattern)
function VehicleFactory(type) {
  switch (type) {
    case "Car":
      return {
        type: "Car",
        wheels: 4,
        engine: "V6",
      };
    case "Bike":
      return {
        type: "Bike",
        wheels: 2,
      };
    case "Truck":
      return {
        type: "Truck",
        wheels: 6,
        loadCapacity: "2 tons",
      };
    default:
      return null;
  }
}

const car = VehicleFactory("Car");
const bike = VehicleFactory("Bike");
const truck = VehicleFactory("Truck");

console.log(car);
console.log(bike);
console.log(truck);
