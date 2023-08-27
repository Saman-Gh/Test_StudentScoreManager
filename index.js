let studentDetails = [
  {
    id: 1000,
    firstName: "Rick",
    lastName: "Novak",
    age: 31,
    mathScore: 15,
    geometryScore: 18,
    physicScore: 16
  },
  {
    id: 1001,
    firstName: "Susan",
    lastName: "Connor",
    age: 36,
    mathScore: 16,
    geometryScore: 20,
    physicScore: 19
  },
  {
    id: 1002,
    firstName: "Ronald",
    lastName: "Barr",
    age: 25,
    mathScore: 18,
    geometryScore: 14,
    physicScore: 15
  },
  {
    id: 1003,
    firstName: "Jeff",
    lastName: "Johnson",
    age: 32,
    mathScore: 18,
    geometryScore: 17,
    physicScore: 19
  }
];

//Calculates and returns the average score of a student by their ID.
function singleAverageFinderById(id) {
  let studentIndex = -1;
  if (id) {
    for (let i = 0; i < studentDetails.length; i++) {
      if (studentDetails[i].id === id) {
        studentIndex = i;
      }
    }
  }
  else {
    return "the id is Null or empty"
  }
  if (studentIndex >= 0) {
    let sum = studentDetails[studentIndex].mathScore + studentDetails[studentIndex].geometryScore + studentDetails[studentIndex].physicScore
    let average = Number((sum / 3).toFixed(2))
    return average
  }
  else {
    return "There is no such a Id."
  }
}

// Calculate and add average scores for all students
function allAverageFinder() {
  for (let i = 0; i < studentDetails.length; i++) {
    let sum = studentDetails[i].mathScore + studentDetails[i].geometryScore + studentDetails[i].physicScore;
    let average = Number((sum / 3).toFixed(2));
    studentDetails[i].average = average
  }
  return studentDetails
}
allAverageFinder()

// Sort students by average scores
function averageSorter() {
  studentDetails.sort((a, b) => b.average - a.average);
}
averageSorter()

// Get the names of the top three students
let topThreeStudentNames = studentDetails.slice(0, 3).map(student => student.firstName + " " + student.lastName);
console.log(topThreeStudentNames)