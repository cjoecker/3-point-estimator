import {useState} from 'react';
import constate from 'constate';

export interface TasksEstimationsState {
	tasks: taskType[];
	addTask: (task: taskType) => void;
	editTask: (task: taskType) => void;
	deleteTask: (task: taskType) => void;
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

	const deleteTask = (task: taskType) => {
		setTasks([...tasks.filter(newTask => newTask.id !== task.id)]);
	};

	return {tasks, addTask, editTask, deleteTask};
}

const result = constate(useTasks);
export const TasksEstimationProvider = result[0];
export const useTaskEstimationContext = result[1] as () => TasksEstimationsState;

export type taskType = {
	id: number;
	text: string | undefined;
	optimisticTime: number | undefined;
	mostLikelyTime: number | undefined;
	pessimisticTime: number | undefined;
};
