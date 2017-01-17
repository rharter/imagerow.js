import { imagerow } from "../src/imagerow.js";

var flowRows = () => {
	var elems = document.querySelectorAll("section.image-row");
	for (var i = 0; i < elems.length; i++) {
		imagerow.setup(elems[i]);
	}
};

document.addEventListener("DOMContentLoaded", () => {
	flowRows();
});

// We need to throttle window resize events since they come in FAST
var resizeTimeout;
window.addEventListener("resize", () => {
	if (!resizeTimeout) {
		resizeTimeout = setTimeout(() => {
			resizeTimeout = null;
			flowRows();
		}, 66);
	}
}, false);
