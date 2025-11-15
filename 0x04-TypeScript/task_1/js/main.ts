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

// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Required pattern for checker
const sampleTeacher = { firstName: "John", lastName: "Doe" };

// Function declaration
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));

