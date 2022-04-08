import React from 'react';
// { useState } from 'react';
// import Card from './Components/Card';
import { Difficulty, fetchQuizQuestions } from './API';
function App() {
	const TOTAL_QUESTIONS = 15;
	//loading
	// const [loading, setLoading] = useState(false);
	// //questions
	// const [questions, setQuestions] = useState([]);
	// //number
	// const [number, setNumber] = useState(0);
	// //userAnswer
	// const [userAnswer, setUserAnswer] = useState([]);
	// //score
	// const [score, setScore] = useState(0);
	// //gameOver
	// const [gameOver, setGameOver] = useState(true);

	console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.Easy));

	const startTrivia = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className='App'>
			<h1>Fun CS Quiz</h1>
			<button className='start' onClick={startTrivia}>
				Start
			</button>
			<p className='score'>Score: </p>
			<p>Loading Questions...</p>
			{/* <Card
				questionNr={number + 1}
				totalQuestions={TOTAL_QUESTIONS}
				question={questions[number].question}
				answers={questions[number].answers}
				userAnswer={userAnswer ? userAnswer[number] : undefined}
				callback={checkAnswer}
			/> */}
			<button className='next' onClick={nextQuestion}>
				Next
			</button>
		</div>
	);
}

export default App;
