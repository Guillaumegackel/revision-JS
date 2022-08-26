const daysT = document.getElementById('days')
const hoursT = document.getElementById('hours')
const minutesT = document.getElementById('minutes')
const secondsT = document.getElementById('seconds')


const newYears = '13 sept 2022';

function countdown(){
	const newYearsDate=new Date(newYears);
	const currentDate = new Date();

	const diff=(newYearsDate-currentDate) / 1000;

	;
	const seconds = Math.floor(diff)%60;
	const minutes = Math.floor(diff/60)%60;
	const hours = Math.floor(diff/3600)%24;
	const days = Math.floor(diff/3600/24);

	console.log(days, hours, minutes, seconds);

	daysT.innerHTML=days;
	hoursT.innerHTML=hours;
	minutesT.innerHTML=minutes;
	secondsT.innerHTML=seconds;
}

function formatTime(){
	return time < 10 ? `0${time}`:time;
}

countdown();

setInterval(countdown, 1000)