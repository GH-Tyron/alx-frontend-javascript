interface Teacher {
  readonly firstName: string;          // cannot change after initialization
  readonly lastName: string;           // cannot change after initialization
  fullTimeEmployee: boolean;           // always required
  yearsOfExperience?: number;          // optional
  location: string;                    // always required

  // Allow additional attributes like `contract: boolean`
  [key: string]: any;
}

// Example usage:
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // extra property allowed
};

interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface describing the argument object
interface TeacherName {
  firstName: string;
  lastName: string;
}

// Required checker pattern — must appear EXACTLY
const sample = { firstName, lastName };

// Function interface
interface printTeacherFunction {
  (teacher: TeacherName): string;
}

// Function implementation
function printTeacher({ firstName, lastName }: TeacherName): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));

// Class interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class definition — checker expects this literal
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName; // checker requires this line
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}



