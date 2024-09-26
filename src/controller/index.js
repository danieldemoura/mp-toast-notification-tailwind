import { renderNotification } from '../view/index.js';

export const containerNotification = document.querySelector('[data-container]');
export const radiosElement = document.querySelectorAll('[data-position]');
export const btn = document.querySelector("[data-btn='show']");
export let fadeRightAnimation = true;

export function startInputRadioChecked() {
	const positionName = localStorage.getItem('@toast-notification:position') || 'default';

	radiosElement.forEach(inputRadio => {
		if(inputRadio.dataset.position === positionName) {
			inputRadio.checked = true;
		}
	});
}

export function selectInputRadio() {
	const [ optionSelected ] = Array.from(radiosElement).filter(option => option.checked);
	const positionName = optionSelected.dataset.position;

	containerNotification.classList.remove('top-[33px]', 'right-[38px]', 'bottom-[33px]', 'left-[38px]');

	switch(positionName) {
		case 'top':
			localStorage.setItem('@toast-notification:position', 'top');
			containerNotification.classList.add('left-[38px]', 'top-[33px]');
			fadeRightAnimation = false;
			break;
		case 'bottom':
			localStorage.setItem('@toast-notification:position', 'bottom');
			containerNotification.classList.add('right-[38px]', 'bottom-[33px]');
			fadeRightAnimation = true;
			break;
		default:
			localStorage.setItem('@toast-notification:position', 'default');
			containerNotification.classList.add('right-[38px]', 'top-[33px]');
			fadeRightAnimation = true;
	}
}

export function closeNotificationAutomatically(elementNotification) {
	setTimeout(() => {
		closeNotification(elementNotification);
	}, 5000);
}

function addAnimationFadeOut(elementNotification) {
	const fadeOut = elementNotification.classList.contains('animate-fadeInLeft') ? 'animate-fadeOutLeft' : 'animate-fadeOutRight';

	elementNotification.classList.remove('animate-fadeInRight', 'animate-fadeInLeft')
	elementNotification.classList.add(fadeOut);
}

export function closeNotification(element) {

	// Verifica se é um elemento HTML ou se é um objeto de evento
	const elementNotification = element instanceof Event 
		? element.target.parentElement 
		: element;

	if(elementNotification.dataset.toast) {
		addAnimationFadeOut(elementNotification);

		containerNotification.addEventListener('animationend', () => {
			if(containerNotification.contains(elementNotification)) {
				containerNotification.removeChild(elementNotification);
			}
		});
	}
}

export function showNotification() {
	selectInputRadio();
	renderNotification();

	const notificationSound = new Audio('../sound/sound-facebook.mp3');
	notificationSound.play();
}