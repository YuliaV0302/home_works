// Регулярний вираз для пошуку слів з 6 або більше символів, які не містять літери 'А' чи 'а'
const regex = /\b[^Aa\s]{6,}\b/g;

// Тестовий рядок
const text = "Wonderful Joyful Happiness Time Task Apple";

// Знаходження відповідностей
const matches = text.match(regex);

// Виведення результату
console.log("Слова, що відповідають умовам:", matches);