import getTimeEstimation from './getTimeEstimation';

it('get time estimations', () => {
	const tasks = [
		{
			id: 0,
			text: 'task 1',
			optimisticTime: 6,
			mostLikelyTime: 7,
			pessimisticTime: 8,
		},
		{
			id: 1,
			text: 'task 2',
			optimisticTime: 0,
			mostLikelyTime: 1,
			pessimisticTime: 8,
		},
		{
			id: 2,
			text: 'task 3',
			optimisticTime: 0.2,
			mostLikelyTime: 1.9,
			pessimisticTime: 3,
		},
	];

	expect(getTimeEstimation(tasks, 1)).toEqual(12.25);
	expect(getTimeEstimation(tasks, 2)).toEqual(13.7);
	expect(getTimeEstimation(tasks, 3)).toEqual(15.15);
});
