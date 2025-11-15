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

// Interface describing the function structure
interface printTeacher {
  (firstName: string, lastName: string): string;
}

// Implementation of the function
const printTeacher: printTeacher = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // John Doe
