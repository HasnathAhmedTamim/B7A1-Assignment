// problem 1
function filterEvenNumbers(numbers: number[]): number[] {
  const result: number[] = [];

  for (let num of numbers) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }

  return result;
}


// problem 2
function reverseString(str: string): string {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}


// problem 3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  }
  return "Number";
}

// Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}


// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true
  };
}

// Problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}


// Problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (const num of arr1) {
    if (arr2.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}