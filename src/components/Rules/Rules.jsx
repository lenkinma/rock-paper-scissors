import React from 'react';

function Rules({setOpenRules}) {
	return (
		<div onClick={(e) => {if (e.target.classList.contains('rules__bg')) setOpenRules(false)}} className='rules__bg'>
			<div className="rules__wrapper">
				<a onClick={() => setOpenRules(false)} className="rules__back" href="#">&times;</a>
				<h2>The winner is determined by the following rules:</h2>
				<ul>
					<li>Paper defeats stone ("paper wraps stone").</li>
					<li>Stone defeats scissors ("stone blunts or breaks scissors").</li>
					<li>Scissors beat paper ("scissors cut paper").</li>
				</ul>
				<p>If the players showed the same sign, then a draw is counted and the game is replayed.</p>
				<p>To reset, click on the score.</p>
			</div>
		</div>
	);
}

export default Rules;