import { 
	btn, 
	containerNotification, 
	showNotification, 
	closeNotification, 
	startInputRadioChecked,
	radiosElement,
	selectInputRadio
} from './controller/index.js';

startInputRadioChecked();

btn.addEventListener('click', showNotification);
containerNotification.addEventListener('click', closeNotification);
radiosElement.forEach(radio => radio.addEventListener('change', selectInputRadio));

