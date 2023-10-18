const students = [
  {
    name: "Sophia",
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90]
  },
  {
    name: "Mason",
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62]
  },
  {
    name: "Isabella",
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78]
  },
  {
    name: "Liam",
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95]
  },
  {
    name: "Olivia",
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62]
  }
]

function getAttendanceRate(student) {
  let count = 0
  for (let i = 0; i < student.attendance.length; i++) {
    if (student.attendance[i]) count++
  }
  return (count / student.attendance.length) * 100
}

console.log(
  getAttendanceRate({
    name: "Olivia",
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62]
  })
) //80

function getAvgScore(student) {
  return student.testScores.reduce((sum, current) => sum + current, 0) / 5
}

console.log(
  getAvgScore({
    name: "Olivia",
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62]
  })
) //73.4

function underPerformStudents(students) {
  let arr = []
  for (let p = 0; p < students.length; p++) {
    if (getAttendanceRate(students[p]) < 80 && getAvgScore(students[p]) < 70) {
      arr.push({
        name: students[p].name,
        attendanceRate: getAttendanceRate(students[p]),
        avgScore: getAvgScore(students[p])
      })
    }
  }
  return arr //[ { name: 'Isabella', attendanceRate: 60, avgScore: 69.6 } ]
}
console.log(underPerformStudents(students))
