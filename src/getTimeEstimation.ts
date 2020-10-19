import {taskType} from './useTasksEstimations';

export default function getTimeEstimation(tasks: taskType[], deviation: number): number {
	let totalMean = 0;
	let totalVarians = 0;

	tasks.forEach(task => {
		const optimisticTime = task.optimisticTime ?? 0;
		const mostLikelyTime = task.mostLikelyTime ?? 0;
		const pessimisticTime = task.pessimisticTime ?? 0;

		totalMean += (optimisticTime + mostLikelyTime * 4 + pessimisticTime) / 6;
		totalVarians += (pessimisticTime - optimisticTime) ** 2 / 36;
	});

	const totalEstimatedTime = totalMean + Math.sqrt(totalVarians) * deviation;

	return Math.round((totalEstimatedTime + Number.EPSILON) * 1000) / 1000;
}
