function gradingStudents(grades) {
    // Write your code here
    let finalGrades = grades.map((grade) => {
        return grade >= 38 && grade % 5 >= 3 ? grade  + 5 - ( grade % 5)  : grade;  
    });
    return finalGrades;
}
