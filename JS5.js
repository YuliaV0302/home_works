var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

// Додавання нової послуги
services['Розбити скло'] = "200 грн";

// Метод для обчислення загальної вартості послуг
services.price = function() {
    let total = 0;
    for (let key in this) {
        if (this.hasOwnProperty(key) && typeof this[key] === "string" && this[key].includes("грн")) {
            total += parseInt(this[key]);
        }
    }
    return total + " грн";
};

// Метод для знаходження мінімальної ціни
services.minPrice = function() {
    let min = Infinity;
    for (let key in this) {
        if (this.hasOwnProperty(key) && typeof this[key] === "string" && this[key].includes("грн")) {
            let price = parseInt(this[key]);
            if (price < min) {
                min = price;
            }
        }
    }
    return min + " грн";
};

// Метод для знаходження максимальної ціни
services.maxPrice = function() {
    let max = -Infinity;
    for (let key in this) {
        if (this.hasOwnProperty(key) && typeof this[key] === "string" && this[key].includes("грн")) {
            let price = parseInt(this[key]);
            if (price > max) {
                max = price;
            }
        }
    }
    return max + " грн";
};

// Приклади використання
console.log("Загальна вартість послуг: " + services.price());
console.log("Мінімальна ціна: " + services.minPrice());
console.log("Максимальна ціна: " + services.maxPrice());
