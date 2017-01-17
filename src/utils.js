var elemOffset = elem => {
	var rect = elem.getBoundingClientRect();
	var docElem = document.documentElement;
	var win = window;
	return {
		top: rect.top + win.pageYOffset - docElem.clientTop,
		left: rect.left + win.pageXOffset - docElem.clientLeft
	};
};

export { elemOffset };