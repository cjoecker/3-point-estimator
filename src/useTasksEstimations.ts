import {useState} from 'react';
import constate from 'constate';

export interface TasksEstimationsState {
	tasks: taskType[];
	addTask: (task: taskType) => void;
	editTask: (task: taskType) => void;
}

function useTasks(): TasksEstimationsState {
	const [tasks, setTasks] = useState<taskType[]>([]);

	const addTask = (task: taskType) => {
		setTasks([...tasks, task]);
	};

	const editTask = (task: taskType) => {
		const taskPos = tasks.findIndex(_task => _task.id === task.id);
		const newTasks = [...tasks];

		if (taskPos != null) {
			newTasks[taskPos] = task;
			setTasks(newTasks);
		}
	};

	return {tasks, addTask, editTask};
}

const result = constate(useTasks);
export const TasksEstimationProvider = result[0];
export const useTaskEstimationContext = result[1] as () => TasksEstimationsState;

export type taskType = {
	id: number;
	text: string | null;
	pessimisticTime: number | null;
	mostLikelyTime: number | null;
	optimisticTime: number | null;
};
