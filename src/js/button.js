import {BUTTON_HEIGHT, IMAGE_CENTER} from "./constant.js";

const getScreenSize = (size = "Width") => Math.max(
	document.body[`scroll${size}`], document.documentElement[`scroll${size}`],
	document.body[`offset${size}`], document.documentElement[`offset${size}`],
	document.body[`client${size}`], document.documentElement[`client${size}`]
);

const generateButtonHelpers = () => {

	const screenSize = {
		x: getScreenSize(),
		y: getScreenSize("Height")
	}

	const getScreenCoordinate = (coordinate, axis = "x") => {
		const imageCoordinate = IMAGE_CENTER[axis] - coordinate;
		const screenCenter = screenSize[axis] / 2;
		return screenCenter - imageCoordinate;
	}

	return {
		getScreenX: (x) => getScreenCoordinate(x),
		getScreenY: (y) => getScreenCoordinate(y, "y")
	}
}

export const generateButtonWrapper = () => {

	const {getScreenX, getScreenY} = generateButtonHelpers();

	return ({text, imageX, imageY, color = 'blue'}) => (
		`<button class="button button_${color}" style="left: ${getScreenX(imageX)}px; top: ${getScreenY(imageY)}px">
			<span class="button__sign"></span>
			<span class="button__text">${text}</span>
		</button>`
	)
}
