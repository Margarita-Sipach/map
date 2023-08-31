import { generateButtonWrapper } from "./js/button.js";
import { buttonsData } from "./js/data.js";

const generateAllButtons = () => {
	const app = document.querySelector("#app");
	app.innerHTML = ""
	const generateButton = generateButtonWrapper();
	buttonsData.forEach(button => app.insertAdjacentHTML('beforeend', generateButton(button)))
}

const closeButtons = () => {
	const buttons = document.querySelectorAll(".button");
	buttons.forEach(item => item.classList.remove("active"));
}

const onClick = (e) => {
	const target = e.target;
	const button = target.closest(".button");
	const isActive = button?.classList.contains("active");

	closeButtons();
	isActive !== undefined && (isActive ? button.classList.remove("active") : button.classList.add("active"));
}

generateAllButtons()
window.addEventListener('resize', generateAllButtons);
window.addEventListener('click', onClick);