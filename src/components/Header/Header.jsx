import React from 'react';

function Header({score, setScore, setGameCounter}) {
	return (
		<div className='header'>
			<div className="header__logo">
				<h1>ROCK</h1>
				<h1>PAPER</h1>
				<h1>SCISSORS</h1>
			</div>
			<div title='reset score' onClick={() => {setScore(0); setGameCounter(0);}} className="header__score-wrapper">
				<h1 className="header__score-h1">SCORE</h1>
				<h1 className="header__score">{score}</h1>
			</div>
		</div>
	);
}

export default Header;
