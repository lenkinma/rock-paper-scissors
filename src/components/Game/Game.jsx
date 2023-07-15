import React, {useState} from 'react';
import Choice from "./Choice/Choice";
import Result from "./Result/Result";

function Game({score, setScore, gameCounter, setGameCounter}) {
	const [result, setResult] = useState(false);
	const [gameResult, setGameResult] = useState({'you': null, 'AI': null, 'result': null});

	const gameHandler = (you_id_item) => {
		const AI_id_item = Math.floor(Math.random() * 3) + 1;
		if ((you_id_item === 1 && AI_id_item === 2) || (you_id_item === 2 && AI_id_item === 3) || (you_id_item === 3 && AI_id_item === 1)) {
			setGameResult({'you': you_id_item, 'AI': AI_id_item, 'result': 'WIN'})
			setScore(score + 1);
		}
		if ((you_id_item === 2 && AI_id_item === 1) || (you_id_item === 3 && AI_id_item === 2) || (you_id_item === 1 && AI_id_item === 3)) {
			setGameResult({'you': you_id_item, 'AI': AI_id_item, 'result': 'LOSE'})
			setScore(score - 1);
		}
		if ((you_id_item === 1 && AI_id_item === 1) || (you_id_item === 2 && AI_id_item === 2) || (you_id_item === 3 && AI_id_item === 3)) {
			setGameResult({'you': you_id_item, 'AI': AI_id_item, 'result': 'DRAW'})
		}
		setGameCounter(gameCounter += 1);
		setResult(true);
	}

	return (
		<div className='game'>
			{!result && <Choice gameHandler={gameHandler}/>}

			{result && <Result setResult={setResult} gameResult={gameResult} />}
		</div>
	);
}

export default Game;
