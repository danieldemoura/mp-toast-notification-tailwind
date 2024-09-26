import { containerNotification, closeNotificationAutomatically, fadeRightAnimation } from '../controller/index.js';

export function renderNotification() {
	const animation = fadeRightAnimation ? 'animate-fadeInRight' : 'animate-fadeInLeft';

	const elementNotification = document.createElement('div');
	elementNotification.setAttribute('data-toast', 'new');
	elementNotification.classList.add(
		'bg-gray-900', 
		'rounded-3xl', 
		'flex', 
		'items-center', 
		'py-[18px]', 
		'pl-[23px]', 
		'pr-[25px]', 
		'relative', 
		'shadow-lg', 
		'shadow-[#00000025]', 
		animation, 
		'transition-all', 
		'border-box'
	);

	const notification = `
		<img class="bg-gray-800 rounded-full mr-4 w-[56px] h-[56px]" src="https://i.pravatar.cc/56" alt="" />
		<div>
			<strong class="text-gray-200 text-xl font-semibold leading-none">Novo usuário</strong>
			<p class="w-[189px] text-gray-200 overflow-hidden text-nowrap text-ellipsis">
				Vamos conversar no Discord?
			</p>
		</div>
		<button class="text-green-300 hover:text-green-600 text-xl font-semibold border-l ml-[4px] border-gray-700 pl-[26px] self-stretch">Close</button>
	`

	elementNotification.innerHTML = notification;
	containerNotification.appendChild(elementNotification);

	closeNotificationAutomatically(elementNotification);
}