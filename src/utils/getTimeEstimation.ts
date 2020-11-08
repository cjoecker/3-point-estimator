import {taskType} from '../hooks/useTasksEstimations';

export default function getTimeEstimation(tasks: taskType[], deviation: number): number {
	let totalMean = 0;
	let totalVarians = 0;

	tasks.forEach(task => {
		const optimisticTime = getSafeNumber(task.optimisticTime);
		const mostLikelyTime = getSafeNumber(task.mostLikelyTime);
		const pessimisticTime = getSafeNumber(task.pessimisticTime);

		totalMean += (optimisticTime + mostLikelyTime * 4 + pessimisticTime) / 6;
		totalVarians += (pessimisticTime - optimisticTime) ** 2 / 36;
	});

	const totalEstimatedTime = totalMean + Math.sqrt(totalVarians) * deviation;

	return Math.round((totalEstimatedTime + Number.EPSILON) * 100) / 100;
}

function getSafeNumber(num: number | undefined) {
	return num && !Number.isNaN(num) ? num : 0;
}
