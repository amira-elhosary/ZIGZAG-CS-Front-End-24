// assignments : https://elzero.org/typescript-assignments-lessons-from-12-to-21/

const user: {
     username: string,
    age: number | string,
    website?: string,
    skills: {
      frontEnd: string[],
      backEnd: (string | number)[]
    }
  } = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
      frontEnd: ["HTML", "CSS", "JS"],
      backEnd: ["PHP", "Python"]
    }
  }
  
  // We Need To Remove Error From This Edits
  user.username = "Osama";
  user.age = "40";
  user.skills.backEnd.push(100);