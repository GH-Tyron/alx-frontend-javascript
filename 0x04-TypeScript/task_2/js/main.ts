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
  let numericSalary: number;

  if (typeof salary === "string") {
    // Remove $ if present and convert to number
    numericSalary = Number(salary.replace(/\$/g, ""));
  } else {
    numericSalary = salary;
  }

  if (numericSalary < 500) {
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
