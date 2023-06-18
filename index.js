
    function areArraysEqual(arr1, arr2) {
    // Проверяем, имеют ли массивы одинаковую длину
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    // Создаем объекты-счетчики для элементов массивов
    const counter1 = {};
    const counter2 = {};
    
    // Заполняем счетчик для первого массива
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        counter1[element] = (counter1[element] || 0) + 1;
    }
    
    // Заполняем счетчик для второго массива
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        counter2[element] = (counter2[element] || 0) + 1;
    }
    
    // Сравниваем счетчики элементов массивов
    for (const key in counter1) {
        if (counter1.hasOwnProperty(key)) {
        // Проверяем, есть ли такой же элемент и количество повторений во втором массиве
        if (!counter2.hasOwnProperty(key) || counter1[key] !== counter2[key]) {
            return false;
        }
        }
    }
    
    return true;
    }

    // Пример использования:
    const arr1 = [1, 2, 5, 4, 0];
    const arr2 = [2, 4, 5, 0, 1];

    if (areArraysEqual(arr1, arr2)) {
    console.log("Да");
    } else {
    console.log("Нет");
    }