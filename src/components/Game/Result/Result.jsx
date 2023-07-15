import React from 'react';
import {data} from "../../../data/data";

function Result({setResult, gameResult}) {
	return (
		<div className='result'>
			<div className="result__block">
				<div className="result__block-item">
					<img src={data[gameResult.you].img} alt="" className="result__block-img"/>
					<h3 className="result__block-text">YOU</h3>
				</div>
				<h2 className="result__title">{gameResult.result}</h2>
				<div className="result__block-item">
					<img src={data[gameResult.AI].img} alt="" className="result__block-img"/>
					<h3 className="result__block-text">AI</h3>
				</div>
			</div>
			<button onClick={() => setResult(false)} className="result__btn">OK</button>
		</div>
	);
}

export default Result;