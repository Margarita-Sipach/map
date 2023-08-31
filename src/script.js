import { generateButtonWrapper } from "./js/button.js";
import { buttonsData } from "./js/data.js";

const generateAllButtons = () => {
	const app = document.querySelector("#app");
	app.innerHTML = ""
	const generateButton = generateButtonWrapper();
	buttonsData.forEach(button => app.insertAdjacentHTML('beforeend', generateButton(button)))
}

generateAllButtons()
window.addEventListener('resize', generateAllButtons);

