export {};

// 'new' expression whose target lacks construct signature

// EXAMPLE 1 - Convert the constructor function to a class

class Employee {
  constructor(
    public fullName: string,
    public salary: number,
  ) {
    this.fullName = fullName;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

const emp1 = new Employee('Bobby Hadz', 100);

console.log(emp1.fullName); // 👉️ "Bobby Hadz"
console.log(emp1.getSalary()); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 2 - Using a hacky solution instead

// function Employee(this: any, fullName: string, salary: number) {
//   this.fullName = fullName;
//   this.salary = salary;

//   this.getSalary = function () {
//     return this.salary;
//   };
// }

// // ✅ No type checker errors
// const emp1 = new (Employee as any)('Bobby Hadz', 100);

// console.log(emp1.fullName); // 👉️ "Bobby Hadz"

// console.log(emp1.getSalary()); // 👉️ 100
