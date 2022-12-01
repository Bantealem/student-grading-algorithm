function gradingStudents(grades) {
    // Write your code here
    let finalGrades = grades.map((grade) => {
        return grade >= 38 && grade % 5 >= 3 ? grade  + 5 - ( grade % 5)  : grade;  
    });
    return finalGrades;
}

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.
