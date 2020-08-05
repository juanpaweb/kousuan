export function generateSimpleArithmetic() {
  this.operation;
  this.num1;
  this.num2;
  this.trueAns;
  this.answers = [];

  const operations = {
    ADDITION: 0,
    SUBTRACTION: 1,
    DIVISION: 2,
    MULTIPLICATION: 3,
  };

  this.getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  this.getNums = (max) => {
    this.num1 = this.getRandomInt(0, max);
    this.num2 = this.getRandomInt(0, max);
  };

  this.getOperation = () => {
    const rand = this.getRandomInt(0, 4);
    switch (rand) {
      case operations.ADDITION:
        this.operation = "+";
        this.trueAns = this.num1 + this.num2;
        break;
      case operations.SUBTRACTION:
        this.operation = "-";
        this.trueAns = this.num1 - this.num2;
        break;
      case operations.DIVISION:
        this.operation = "÷";
        this.trueAns = Math.floor(this.num1 / this.num2);
        break;
      case operations.MULTIPLICATION:
        this.operation = "×";
        this.trueAns = this.num1 * this.num2;
        break;
    }
  };

  this.getAnsArray = () => {
    this.answers = [];
    let count = 4;
    while (count != 0) {
      let randInt = this.getRandomInt(-4 + this.trueAns, 4 + this.trueAns);
      this.answers.push(randInt);
      count--;
    }
    console.log(this.answers);
    this.answers.splice(this.getRandomInt(0, 4), 1, this.trueAns);
  };

  this.getQuestion = () => {
    return {
      num1: this.num1,
      num2: this.num2,
      operation: this.operation,
      trueAns: this.trueAns,
      answers: this.answers,
    };
  };
}