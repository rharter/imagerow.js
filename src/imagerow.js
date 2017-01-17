import { Row } from "./row.js";

var setup = (elem) => {
	var row = new Row(elem);
	row.flow();
}

var imagerow = Object.create(null);
imagerow.setup = setup;

export { imagerow };