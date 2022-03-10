function Calculator() {
    this.read = function() {
        this.value1 = +prompt("Введите первое значение", 0);
        this.value2 = +prompt("Введите второе значение", 0);
    };
    this.sum = function() {
        return this.value1 + this.value2;
    };
    this.mul = function() {
        return this.value1 * this.value2;
    };
    this.value3 = null;
    this.del = null;
}

let calculator = new Calculator();

calculator.read();

let val = calculator.value3 ? .num

alert(calculator.del ? .())

alert(calculator.sum());

alert(calculator.mul());