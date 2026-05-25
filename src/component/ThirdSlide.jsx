import PropTypes from "prop-types";

import "../scss/slides.scss";

ThirdSlide.propTypes = {
	slide: PropTypes.shape({
		current: PropTypes.instanceOf(Element),
	}),
	event: PropTypes.func, // Updated to reflect that `event` is a function
};

export default function ThirdSlide({ slide, event }) {
	return (
		<div ref={slide} className="container">
			<div className="wrapper">
				<h1 className="definition-you">
					You're my best friend who is hilarious, weird
					<br />and funny for sure, I hope we can stay friends forever ˚ʚ♡ɞ˚
				</h1>
				<img
					className="hanako-img"
					src="https://i.ibb.co.com/wpRFNRc/smile.gif"
					alt="you-look-gorgeus"
				/>
			</div>
			<div className="downarrow-icon" onClick={event}>
				<ion-icon name="chevron-down-circle"></ion-icon>
			</div>
		</div>
	);
}
