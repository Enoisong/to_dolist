/**
 * @jest-environment jsdom
 */
import Todos from '../todos.js';

describe('add and remove', () => {
    window.localStorage = Storage.prototype;
    test('Add task', () => {
        const todoList = new Todos();
        const newTodo = {
            id: 'id123',
            description: 'task1',
            completed: false,
            index: 1,
        };
        const newTodo2 = {
            id: 'id12sdad3',
            description: 'task2',
            completed: false,
            index: 2,
        };
        todoList.addTodo(newTodo);
        expect(todoList.list).toHaveLength(1);
        todoList.addTodo(newTodo2);
        expect(todoList.list).toHaveLength(2);
        expect(todoList.list[1].description).toBe('task2');        

        });

        test('remove task', () => {
            const todoList = new Todos();
            const newTodo = {
                id: 'id4d5sa',
                description: 'task3',
                completed: false,
                index: 3,
            };
            todoList.addTodo(newTodo);
            todoList.removeTodo(newTodo.id);
            expect(todoList.list[1].description).toBe('task2');
            expect(todoList.list).toHaveLength(2);
        });
    });

     
