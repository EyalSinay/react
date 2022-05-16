// Instructions
// Learn first online on how to use string interpolation in React. Then answer
// the questions below.
// Create some JSX with the following variables:
// 1. const data = ["hello", "world"];
// the output should be: “Hello World”
// notice the spacing!
// 2. const number1 = 5;
//    const number2 =6;
// the output should be: 5 + 6 = 11
// 3. const string = “I love React!”
// the output should be : The string’s length is <display the length of the string>

const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const string = "I love React!";

export default function BasicsOfJsx() {
    return (
        <div>
            <p>{`${data[0]} ${data[1]}`}</p>
            <p>{`${number1} + ${number2} = ${number1 + number2}`}</p>
            <p>{`The sting's length is ${string.length}`}</p>
        </div>
    );
}