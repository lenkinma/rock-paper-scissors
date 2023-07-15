import React, {useState} from 'react';
import Rules from "../Rules/Rules";

function Footer({gameCounter}) {
	const [openRules, setOpenRules] = useState(false);

	return (
		<div className='footer'>
			<button className="footer__btn footer__btn-game">{'GAME: ' + gameCounter}</button>
			<button onClick={() => setOpenRules(true)} className="footer__btn footer__btn-rules">RULES</button>

			{openRules && <Rules setOpenRules={setOpenRules}/>}
		</div>
	);
}

export default Footer;