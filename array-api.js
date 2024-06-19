// Q1. make a string out of an array
// 주어진 배열을 스트링으로 변환
{
const fruits = ['apple','banana','orange'];
const result = fruits.join('|');
console.log(result);
}

// Q2. make an array out of a string
// 주어진 스트링을 배열로 변환
{
const fruits = '🍓,🍑,🍋,🍏';
const result = fruits.split(',');
console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// 주어진 배열을 거꾸로 만듬
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
    // 배열 자체에도 순서가 거꾸로 변환
}

// Q4. make new array without the first two elements.
// 배열의 특정 부분만 출력
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array); 
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const Students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// score >= 90 이상만 출력
{
    const result = Students.find((Student) => Student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled studunts
// enrolled = true 만 출력
{
    const result = Students.filter((Student) => Student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [40, 80, 90, 66, 88]
{
    const result = Students.map((Student) => Student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
     const result = Students.some((Student) => Student.score < 50);
     console.log(result);
}

{
    const result = Students.some((Student) => Student.score > 99);
    console.log(result);
}
// Q9. compute  students' average score
{
    const result = Students.reduce((prev,curr) => {
    console.log('------');
    console.log(prev);
    console.log(curr);
    return prev+curr.score;
    }, 0);
    console.log(result);
}

{
    const result2 = Students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result2 / Students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = Students.map((Student) => Student.score).join();
    console.log(result);
}

{
    const result = Students
    .map((Student) => Student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = Students
    .map((Student) => Student.score)
    .sort((a,b) => a - b) // 내림차순 b - a
    .join();
    console.log(result);
}