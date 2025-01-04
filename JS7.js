// Регулярний вираз для пошуку слів з 6 або більше символів, які не містять літери 'А' чи 'а'
const regex = /\b[^Aa\s]{6,}\b/g;

// Тестовий рядок
const text = "Wonderful Joyful Happiness Time Task Apple";

// Знаходження відповідностей
const matches = text.match(regex);

// Виведення результату
console.log("Слова, що відповідають умовам:", matches);




// Початковий масив
var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для перевірки email-адрес
// Email повинен мати одну або дві частини перед @, розділені крапкою, латинські букви або цифри
var trustedEmailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

// Масив з "гідними" email-адресами
var trustedEmails = [];

for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (trustedEmailRegex.test(email) && !email.endsWith("@mail.ru")) {
        trustedEmails.push(email);
    }
}

// Виведення результату
console.log("Гідні email-адреси:", trustedEmails);