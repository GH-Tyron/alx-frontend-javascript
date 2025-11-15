// ===============================
// 1. Interfaces
// ===============================

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ===============================
// 2. Classes
// ===============================

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// ===============================
// 3. createEmployee Function
// ===============================

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "string") {
    salary = Number(salary.replace(/\$/g, ""));
  }

  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
// ===============================
// 4. Example usage
// ===============================

console.log(createEmployee(200).constructor.name);   // Teacher
console.log(createEmployee(1000).constructor.name);  // Director
console.log(createEmployee("$500").constructor.name); // Director

// Type guard: checks if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function that executes work depending on employee type
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Example usage
executeWork(createEmployee(200));   // Getting to work
executeWork(createEmployee(1000));  // Getting to director tasks

// String literal type
type Subjects = "Math" | "History";

// Function teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  // Optional fallback (never needed, but for type safety)
  return "";
}

// Example usage
console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History

