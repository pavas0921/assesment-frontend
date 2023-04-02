import { useState, useEffect } from "react";

const UseCountdown = () => {
	const [timeLeft, setTimeLeft] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
		isFinished: false,
	});

	useEffect(() => {
		let randomSeconds = Math.floor(Math.random() * (180 - 60) + 60); // número aleatorio entre 60 y 239
		const intervalId = setInterval(() => {
			const hours = Math.floor(randomSeconds / 3600);
			const minutes = Math.floor((randomSeconds % 3600) / 60);
			const seconds = Math.floor(randomSeconds % 60);
			setTimeLeft({ hours, minutes, seconds, isFinished: false });
			randomSeconds--;
			if (randomSeconds < 0) {
				setTimeLeft({ hours: 0, minutes: 0, seconds: 0, isFinished: true });
				clearInterval(intervalId);
			}
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return timeLeft;
};

export default UseCountdown;
