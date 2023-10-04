const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 }
  ]
  const getPassingNames = (students) => {
    const studentPass = []
    student.array.forEach(students => {
        if(student.score>=70) studentPass(student.name.toUpperCase())
    })
    return ;
  }
  const passingNames = getPassingNames(studentScores)
  console.log(passingNames)