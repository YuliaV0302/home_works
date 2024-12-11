function pow(x, y) {
    // Перевірка на 0 степінь
    if (y === 0) {
        return 1;
    }

    // Перевірка на від'ємну степінь
    if (y < 0) {
        x = 1 / x;
        y = -y;
    }

    // Зведення 
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}

