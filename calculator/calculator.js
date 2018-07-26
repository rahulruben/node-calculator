module.exports = function Calculator() {
    this.addition = function (num1, num2) {
        return num1 + num2;
    }

    this.subtraction = function (num1, num2) {
        return num1 - num2;
    }

    this.multiplication = function (num1, num2) {
        return num1 * num2;
    }

    this.division = function (num1, num2) {
        return num1 / num2;
    }
}
