export enum Difficulty {
	Easy = 'easy',
	Medium = 'medium',
	Hard = 'hard',
}

export const fetchQuizQuestions = async (
	amount: number,
	difficulty: Difficulty,
) => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}&type=multiple`;

	const data = await (await fetch(endpoint)).json();
	console.log(data);
};
