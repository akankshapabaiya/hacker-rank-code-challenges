/* Problem
* HackerLand University has the following grading policy:
* Every student receives a  in the inclusive range from  to .
* Any  less than  is a failing grade.
* Sam is a professor at the university and likes to round each student's  according to these rules:

* If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
* If the value of  is less than , no rounding occurs as the result will still be a failing grade.
*/



'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    return grades.map(grade => {
        if(grade < 38) {return grade}
        else if(round5(grade)- grade < 3){
            return round5(grade);
        } else if(round5(grade)- grade >= 3){
            return grade;
        }
    })
     

}

function round5(x)
{
    return Math.ceil(x / 5) * 5;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
