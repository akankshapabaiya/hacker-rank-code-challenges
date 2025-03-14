/* Problem
*Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
*The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
*The task is to calculate their comparison points by comparing each category:
*
*If a[i] > b[i], then Alice is awarded 1 point.
*If a[i] < b[i], then Bob is awarded 1 point.
*If a[i] = b[i], then neither person receives a point.
*Example
*a = [1, 2, 3]
*b = [3, 2, 1]

*For elements *0*, Bob is awarded a point because a[0] < b[0].
*For the equal elements a[1] and b[1], no points are earned.
*Finally, for elements 2, a[2] > b[2] so Alice receives a point.
*The return array is [1, 1] with Alice's score first and Bob's second.
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
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    if (a.length <=0 || b.length <=0) return 0;

    let alice=[0,0]; 

    for(let i = 0; i<a.length; i++){
        if(a[i] > b[i]) {
            alice[0]++;
        } else if(b[i]>a[i]){
            alice[1]++;
        }
    }
    return alice;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
