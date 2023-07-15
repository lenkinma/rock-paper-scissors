import React from 'react';
import {data} from "../../../data/data";

function Choice({gameHandler}) {

	const btn_handler = (you_id_item) => {
		gameHandler(you_id_item)
	}

	return (
		<div className='choice'>
			<button title={data['1'].name} className='choice__btn' onClick={() => btn_handler(1)}>
				<img className='choice__btn-img' src={data["1"].img} alt=""/>
			</button>
			<button title={data['3'].name} className='choice__btn' onClick={() => btn_handler(2)}>
				<img className='choice__btn-img' src={data["3"].img} alt=""/>
			</button>
			<button title={data['2'].name} className='choice__btn' onClick={() => btn_handler(3)}>
				<img className='choice__btn-img' src={data["2"].img} alt=""/>
			</button>
		</div>
	);
}

export default Choice;