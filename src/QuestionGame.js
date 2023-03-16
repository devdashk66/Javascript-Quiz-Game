import React, { useState, useEffect } from "react";
import "./QuestionGame.css";
import { TbCircleLetterA } from "react-icons/tb";
import { TbCircleLetterB } from "react-icons/tb";

function QuestionGame() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [highlight, setHighlight] = useState(false);
  const [option1, setOption1] = useState(null);
  const [option2, setOption2] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [highScore, setHighScore] = useState(
    localStorage.getItem("highScore") || 0
  );

  useEffect(() => {
    generateQuestion();
  }, []);

  function generateQuestion() {
    // Define your questions and answers here
    const questions = [
      {
        question: "What is the result of [] + []?",
        option1: "'' (empty string)",
        option2: "0",
        answer: "'' (empty string)",
      },
      {
        question: "What is the result of typeof null?",
        option1: "'object'",
        option2: "'null'",
        answer: "'object'",
      },
      {
        question: "What is the result of 1 + '1'?",
        option1: "'11'",
        option2: "2",
        answer: "'11'",
      },
      {
        question: "What is the result of 'hello' - 1?",
        option1: "NaN",
        option2: "4",
        answer: "NaN",
      },
      {
        question: "What is the result of [] == []?",
        option1: "false",
        option2: "true",
        answer: "false",
      },
      {
        question: "What is the result of {} + []?",
        option1: "'[object Object]'",
        option2: "0",
        answer: "'[object Object]'",
      },
      {
        question: "What is the result of !!null?",
        option1: "false",
        option2: "true",
        answer: "false",
      },
      {
        question: "What is the result of 2 in [2, 3, 4]?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of '2' in [2, 3, 4]?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of [2] == [2]?",
        option1: "false",
        option2: "true",
        answer: "false",
      },
      {
        question: "What is the result of [2] == '2'?",
        option1: "false",
        option2: "true",
        answer: "true",
      },
      {
        question: "What is the result of {} + {}?",
        option1: "NaN",
        option2: "[object Object][object Object]",
        answer: "NaN",
      },
      {
        question: "What is the result of typeof NaN?",
        option1: "'number'",
        option2: "'NaN'",
        answer: "'number'",
      },
      {
        question: "What is the result of NaN === NaN?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of Infinity + Infinity?",
        option1: "Infinity",
        option2: "NaN",
        answer: "Infinity",
      },
      {
        question: "What is the result of typeof 1/0?",
        option1: "'number'",
        option2: "'Infinity'",
        answer: "'number'",
      },
      {
        question: "What is the result of typeof NaN === typeof NaN?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of typeof undefined == typeof NULL?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of [] instanceof Object?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of null == undefined?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of '5' + + '5'?",
        option1: "'55'",
        option2: "'10'",
        answer: "'55'",
      },
      {
        question: "What is the result of 'five'.length?",
        option1: "5",
        option2: "4",
        answer: "4",
      },
      {
        question: "What is the result of 'hello'.slice(-1)?",
        option1: "'o'",
        option2: "'l'",
        answer: "'o'",
      },
      {
        question: "What is the result of 'hello'.indexOf('o')?",
        option1: "3",
        option2: "4",
        answer: "4",
      },
      {
        question: "What is the result of 'hello'.replace('l', 'L')?",
        option1: "'heLLo'",
        option2: "'heLo'",
        answer: "'heLlo'",
      },
      {
        question: "What is the result of [1, 2, 3].map(x => x * 2)?",
        option1: "[2, 4, 6]",
        option2: "[1, 4, 9]",
        answer: "[2, 4, 6]",
      },
      {
        question: "What is the result of [1, 2, 3].filter(x => x % 2 === 0)?",
        option1: "[1, 3]",
        option2: "[2]",
        answer: "[2]",
      },
      {
        question:
          "What is the result of [1, 2, 3].reduce((acc, x) => acc + x, 0)?",
        option1: "6",
        option2: "0",
        answer: "6",
      },
      {
        question: "What is the result of ['a', 'b', 'c'].join()?",
        option1: "'a,b,c'",
        option2: "'abc'",
        answer: "'a,b,c'",
      },
      {
        question: "What is the result of ['a', 'b', 'c'].reverse()?",
        option1: "['a', 'b', 'c']",
        option2: "['c', 'b', 'a']",
        answer: "['c', 'b', 'a']",
      },
      {
        question: "What is the result of ['a', 'b', 'c'].slice(0, 2)?",
        option1: "['a', 'b']",
        option2: "['a', 'c']",
        answer: "['a', 'b']",
      },
      {
        question: "What is the result of ['a', 'b', 'c'].splice(1, 1)?",
        option1: "['a', 'b', 'c']",
        option2: "['a', 'c']",
        answer: "['b']",
      },
      {
        question: "What is the result of new Date().getFullYear()?",
        option1: "2021",
        option2: "the current year",
        answer: "the current year",
      },
      {
        question: "What is the result of typeof Math.PI?",
        option1: "'number'",
        option2: "'undefined'",
        answer: "'number'",
      },
      {
        question: "What is the result of typeof null?",
        option1: "'null'",
        option2: "'object'",
        answer: "'object'",
      },
      {
        question: "What is the result of typeof undefined?",
        option1: "'undefined'",
        option2: "'null'",
        answer: "'undefined'",
      },
      {
        question: "What is the result of typeof NaN?",
        option1: "'number'",
        option2: "'NaN'",
        answer: "'number'",
      },
      {
        question: "What is the result of typeof []?",
        option1: "'array'",
        option2: "'object'",
        answer: "'object'",
      },
      {
        question: "What is the result of typeof {}?",
        option1: "'object'",
        option2: "'array'",
        answer: "'object'",
      },
      {
        question: "What is the result of typeof (() => {})?",
        option1: "'function'",
        option2: "'object'",
        answer: "'function'",
      },
      {
        question: "What is the result of typeof function() {}?",
        option1: "'function'",
        option2: "'object'",
        answer: "'function'",
      },
      {
        question: "What is the result of ({}).toString()?",
        option1: "'[object Object]'",
        option2: "'{}'",
        answer: "'[object Object]'",
      },
      {
        question: "What is the result of typeof new Map()?",
        option1: "'map'",
        option2: "'object'",
        answer: "'object'",
      },
      {
        question: "What is the result of typeof new Set()?",
        option1: "'set'",
        option2: "'object'",
        answer: "'object'",
      },
      {
        question: "What is the result of 'hello'.charAt(0)?",
        option1: "'h'",
        option2: "'e'",
        answer: "'h'",
      },
      {
        question: "What is the result of 'hello'.charCodeAt(0)?",
        option1: "104",
        option2: "101",
        answer: "104",
      },
      {
        question: "What is the result of 'hello'.toUpperCase()?",
        option1: "'HELLO'",
        option2: "'hello'",
        answer: "'HELLO'",
      },
      {
        question: "What is the result of 'hello'.toLowerCase()?",
        option1: "'hello'",
        option2: "'HELLO'",
        answer: "'hello'",
      },
      {
        question: "What is the result of 'hello world'.split(' ')?",
        option1: "['hello world']",
        option2: "['hello', 'world']",
        answer: "['hello', 'world']",
      },
      {
        question: "What is the result of 'hello'.repeat(2)?",
        option1: "'hellohello'",
        option2: "'hello'",
        answer: "'hellohello'",
      },
      {
        question: "What is the result of [1, 2, 3].includes(2)?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of [1, 2, 3].includes(4)?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of Number('5')?",
        option1: "5",
        option2: "'5'",
        answer: "5",
      },
      {
        question: "What is the result of parseInt('5px')?",
        option1: "5",
        option2: "'5px'",
        answer: "5",
      },
      {
        question: "What is the result of parseFloat('3.14')?",
        option1: "3.14",
        option2: "'3.14'",
        answer: "3.14",
      },
      {
        question: "What is the result of Math.floor(2.7)?",
        option1: "3",
        option2: "2",
        answer: "2",
      },
      {
        question: "What is the result of Math.ceil(2.1)?",
        option1: "3",
        option2: "2",
        answer: "3",
      },
      {
        question: "What is the result of Math.round(2.5)?",
        option1: "2",
        option2: "3",
        answer: "3",
      },
      {
        question: "What is the result of Math.max(1, 2, 3)?",
        option1: "1",
        option2: "3",
        answer: "3",
      },
      {
        question: "What is the result of Math.min(1, 2, 3)?",
        option1: "1",
        option2: "3",
        answer: "1",
      },
      {
        question: "What is the result of Math.random()?",
        option1: "A random number between 0 and 1",
        option2: "undefined",
        answer: "A random number between 0 and 1",
      },
      {
        question: "What is the result of typeof console.log?",
        option1: "'function'",
        option2: "'object'",
        answer: "'function'",
      },
      {
        question: "What is the result of typeof Date()?",
        option1: "'date'",
        option2: "'string'",
        answer: "'string'",
      },
      {
        question: "What is the result of new Date().getFullYear()?",
        option1: "The current year",
        option2: "The current date",
        answer: "The current year",
      },
      {
        question: "What is the result of new Date().getMonth()?",
        option1: "The current month",
        option2: "The current date",
        answer: "The current month",
      },
      {
        question: "What is the result of new Date().getDate()?",
        option1: "The current date",
        option2: "The current day",
        answer: "The current date",
      },
      {
        question: "What is the result of new Date().getDay()?",
        option1: "The current day",
        option2: "The current date",
        answer: "The current day",
      },
      {
        question: "What is the result of new Date().getHours()?",
        option1: "The current hour",
        option2: "The current minute",
        answer: "The current hour",
      },
      {
        question: "What is the result of new Date().getMinutes()?",
        option1: "The current minute",
        option2: "The current hour",
        answer: "The current minute",
      },
      {
        question: "What is the result of new Date().getSeconds()?",
        option1: "The current second",
        option2: "The current minute",
        answer: "The current second",
      },
      {
        question: "What is the result of new Date().getTime()?",
        option1: "The current timestamp",
        option2: "The current date",
        answer: "The current timestamp",
      },
      {
        question: "What is the result of Math.pow(2, 3)?",
        option1: "8",
        option2: "6",
        answer: "8",
      },
      {
        question: "What is the result of 10 + '10'?",
        option1: "'20'",
        option2: "'1010'",
        answer: "'1010'",
      },
      {
        question: "What is the result of '10' - 5?",
        option1: "5",
        option2: "'5'",
        answer: "5",
      },
      {
        question: "What is the result of '10' + 5?",
        option1: "'105'",
        option2: "'15'",
        answer: "'105'",
      },
      {
        question: "What is the result of '10' / 2?",
        option1: "5",
        option2: "'5'",
        answer: "5",
      },
      {
        question: "What is the result of '10' * 2?",
        option1: "20",
        option2: "'20'",
        answer: "20",
      },
      {
        question: "What is the result of '10' == 10?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of '10' === 10?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of 10 > 9?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of 10 < 9?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of 10 >= 10?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of 10 <= 9?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of '10' > 9?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of 'a' > 'b'?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of true && false?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of true || false?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of !true?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of !!true?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of typeof NaN?",
        option1: "'number'",
        option2: "'NaN'",
        answer: "'number'",
      },
      {
        question: "What is the result of NaN === NaN?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of isNaN(NaN)?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of isNaN('hello')?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of 0.1 + 0.2?",
        option1: "0.3",
        option2: "0.30000000000000004",
        answer: "0.30000000000000004",
      },
      {
        question: "What is the result of [] == false?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of [] === false?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of [1] == [1]?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of [1] === [1]?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of {} === {}?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
      {
        question: "What is the result of 'abc'.length?",
        option1: "2",
        option2: "3",
        answer: "3",
      },
      {
        question: "What is the result of 'abc'.indexOf('b')?",
        option1: "0",
        option2: "1",
        answer: "1",
      },
      {
        question: "What is the result of 'abc'.indexOf('d')?",
        option1: "-1",
        option2: "undefined",
        answer: "-1",
      },
      {
        question: "What is the result of 'abc'.slice(1, 2)?",
        option1: "'a'",
        option2: "'b'",
        answer: "'b'",
      },
      {
        question: "What is the result of 'abc'.slice(1)?",
        option1: "'a'",
        option2: "'bc'",
        answer: "'bc'",
      },
      {
        question: "What is the result of ' abc '.trim()?",
        option1: "'abc'",
        option2: "' abc '",
        answer: "'abc'",
      },
      {
        question: "What is the result of 'abc'.toUpperCase()?",
        option1: "'abc'",
        option2: "'ABC'",
        answer: "'ABC'",
      },
      {
        question: "What is the result of 'ABC'.toLowerCase()?",
        option1: "'abc'",
        option2: "'ABC'",
        answer: "'abc'",
      },
      {
        question: "What is the result of 'abc'.replace('b', 'd')?",
        option1: "'adc'",
        option2: "'abc'",
        answer: "'adc'",
      },
      {
        question: "What is the result of 'abc'.replace(/b/g, 'd')?",
        option1: "'adc'",
        option2: "'abc'",
        answer: "'adc'",
      },
      {
        question: "What is the result of 'a,b,c'.split(',')?",
        option1: "['a','b','c']",
        option2: "['abc']",
        answer: "['a','b','c']",
      },
      {
        question: "What is the result of [1,2,3].join()?",
        option1: "'123'",
        option2: "'1,2,3'",
        answer: "'1,2,3'",
      },
      {
        question: "What is the result of [1,2,3].toString()?",
        option1: "'123'",
        option2: "'1,2,3'",
        answer: "'1,2,3'",
      },
      {
        question: "What is the result of [1,2,3].reverse()?",
        option1: "[1,2,3]",
        option2: "[3,2,1]",
        answer: "[3,2,1]",
      },
      {
        question: "What is the result of [1,2,3].concat([4,5])?",
        option1: "[1,2,3,4,5]",
        option2: "[[1,2,3],[4,5]]",
        answer: "[1,2,3,4,5]",
      },
      {
        question: "What is the result of [1,2,3].slice(1, 2)?",
        option1: "[1]",
        option2: "[2]",
        answer: "[2]",
      },
      {
        question: "What is the result of [1,2,3].splice(1, 1, 4)?",
        option1: "[2]",
        option2: "[1,4,3]",
        answer: "[2]",
      },
      {
        question: "What is the result of [1,2,3].indexOf(2)?",
        option1: "1",
        option2: "2",
        answer: "1",
      },
      {
        question: "What is the result of [1,2,3].indexOf(4)?",
        option1: "-1",
        option2: "undefined",
        answer: "-1",
      },
      {
        question: "What is the result of [1,2,3].filter(num => num > 1)?",
        option1: "[1]",
        option2: "[2,3]",
        answer: "[2,3]",
      },
      {
        question: "What is the result of [1,2,3].map(num => num * 2)?",
        option1: "[1,2,3]",
        option2: "[2,4,6]",
        answer: "[2,4,6]",
      },
      {
        question:
          "What is the result of [1,2,3].reduce((acc, num) => acc + num, 0)?",
        option1: "6",
        option2: "3",
        answer: "6",
      },
      {
        question:
          "What is the result of [1,2,3].forEach(num => console.log(num))? (in console)",
        option1: "1\n2\n3",
        option2: "undefined",
        answer: "1\n2\n3",
      },
      {
        question: "What is the result of Array.from('abc')?",
        option1: "['a','b','c']",
        option2: "[1,2,3]",
        answer: "['a','b','c']",
      },
      {
        question: "What is the result of new Array(3)?",
        option1: "[undefined,undefined,undefined]",
        option2: "[]",
        answer: "[undefined,undefined,undefined]",
      },
      {
        question: "What is the result of Array(3).fill('a')?",
        option1: "['a','a','a']",
        option2: "[undefined,undefined,undefined]",
        answer: "['a','a','a']",
      },
      {
        question: "What is the result of ['a','b','c'].includes('b')?",
        option1: "true",
        option2: "false",
        answer: "true",
      },
      {
        question: "What is the result of ['a','b','c'].includes('d')?",
        option1: "true",
        option2: "false",
        answer: "false",
      },
    ];

    // Choose a random question from the list
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];

    // Update the state with the new question and answer options
    setCurrentQuestion(randomQuestion.question);
    setOption1(randomQuestion.option1);
    setOption2(randomQuestion.option2);
    setCorrectAnswer(randomQuestion.answer);
  }

  function handleAnswer(answer) {
    if (answer === correctAnswer) {
      // If the answer is correct, update the score
      setScore(score + 1);
      setHighlight(true);

      // Check if the current score is higher than the previous high score
      if (score + 1 > highScore) {
        setHighScore(score + 1);

        // Save the new high score to local storage
        localStorage.setItem("highScore", score + 1);
      }
    } else {
      // If the answer is incorrect, reset the score and total questions
      setScore(0);
      setHighlight(true);
    }
    // Update the total questions and generate a new question
    setTotalQuestions(totalQuestions + 1);
    setTimeout(() => {
      generateQuestion();
      setHighlight(false);
    }, 2000);
  }

  return (
    <div className="flex text-gray-200 flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-600 rounded-lg shadow-lg p-8 mx-3 relative">
        <div class="top-4 left-4 flex flex-row space-x-2 absolute">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <h1 className="text-3xl font-bold my-8 text-center">
          Pick the correct answers of the following question!!
        </h1>
        <p className="mb-2 text-xl text-teal-500">
          <b className="text-red-500">Question:</b> {currentQuestion}
        </p>
        <div className="flex flex-row my-6 space-x-4">
          <button
            className={`${
              correctAnswer === option1 && highlight && "highlight"
            } w-full flex items-center justify-center h-12 p-4 mb-2 rounded-lg border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 button-red-glow`}
            onClick={() => handleAnswer(option1)}
          >
            {
              <>
                <TbCircleLetterA className="mr-2 text-2xl" /> {option1}
              </>
            }
          </button>
          <button
            className={`${
              correctAnswer === option2 && highlight && "highlight"
            } w-full flex items-center justify-center h-12 p-4 rounded-lg border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 button-red-glow`}
            onClick={() => handleAnswer(option2)}
          >
            {
              <>
                <TbCircleLetterB className="mr-2 text-2xl" /> {option2}
              </>
            }
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold mb-2">
            Score: {score}/{totalQuestions}
          </p>
          <p className="text-lg font-bold mb-2">High Score: {highScore}</p>
        </div>
      </div>
    </div>
  );
}

export default QuestionGame;
