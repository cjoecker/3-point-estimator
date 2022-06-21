import {useEffect, useState} from 'react';
import constate from 'constate';

export interface TasksEstimationsState {
	tasks: taskType[];
	addTask: (task: taskType) => void;
	editTask: (task: taskType) => void;
	deleteTask: (task: taskType) => void;
}

export type taskType = {
	id: number;
	text: string | undefined;
	optimisticTime: number | undefined;
	mostLikelyTime: number | undefined;
	pessimisticTime: number | undefined;
};

const LOCAL_STORAGE_KEY = 'tasks';

function useTasks(): TasksEstimationsState {
	const [tasks, setTasks] = useState<taskType[]>([]);

	useEffect(() => {
		const savedTasks = window.localStorage.getItem(LOCAL_STORAGE_KEY);
		if (savedTasks) setTasks(JSON.parse(savedTasks));
	}, []);
	useEffect(() => {
		window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
	}, [tasks]);

	const addTask = (task: taskType) => {
		setTasks([...tasks, task]);
	};

	const editTask = (task: taskType) => {
		const taskPos = tasks.findIndex(_task => _task.id === task.id);

		const newTasks = [...tasks];

		if (taskPos != null) {
			newTasks[taskPos] = getNegativeNumsToZero(task);
			setTasks(newTasks);
		}
	};

	const deleteTask = (task: taskType) => {
		setTasks([...tasks.filter(newTask => newTask.id !== task.id)]);
	};

	return {tasks, addTask, editTask, deleteTask};
}

function getNegativeNumsToZero(task: taskType) {
	const newTask = task;

	newTask.optimisticTime = newTask.optimisticTime ? Math.max(0, newTask.optimisticTime) : undefined;
	newTask.mostLikelyTime = newTask.mostLikelyTime ? Math.max(0, newTask.mostLikelyTime) : undefined;
	newTask.pessimisticTime = newTask.pessimisticTime ? Math.max(0, newTask.pessimisticTime) : undefined;

	return newTask;
}

const result = constate(useTasks);
export const TasksEstimationProvider = result[0];
export const useTaskEstimationContext = result[1] as () => TasksEstimationsState;
