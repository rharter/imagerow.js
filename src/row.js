// import { elemOffset } from "./utils.js";

export class Row {
	constructor(row) {
		this.row = row;
		this.images = row.getElementsByTagName('img');
	}

	flow() {
		// calculate the row aspect ratio
		var aspect = 0;
		var images = [];
		var horizontalPadding = 0;
		for (var image of this.images) {
			var style = window.getComputedStyle(image);
			horizontalPadding = horizontalPadding + parseInt(style['padding-left']);
			horizontalPadding = horizontalPadding + parseInt(style['padding-right']);

			var imageWidth = image.naturalWidth;
			var imageHeight = image.naturalHeight;
			var imageAspect = imageWidth / imageHeight;

			aspect = aspect + imageAspect;
			images.push({image: image, aspect: imageAspect});
		}

		// set the row height
		var rowHeight = (this.row.offsetWidth - horizontalPadding) / aspect;
		this.row.style.height = rowHeight + 'px';

		for (var image of images) {
			image.image.style.height = rowHeight + 'px';
			image.image.style.width = (rowHeight * image.aspect) + 'px';
		}
	}
}