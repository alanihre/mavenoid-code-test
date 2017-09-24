import uuid from 'uuid';
import TodoItem from "TodoApp/Models/TodoItem";
import TodoItemRepository from "TodoApp/Repositories/TodoItemRepository";

export default class TodoItemService {
    newTodoItem(title) {
        let item = new TodoItem();
        item.id = uuid.v1();
        item.title = title;

        return new Promise(function (fulfill, reject) {
            TodoItemRepository.addTodoItem(item).then(function () {
                fulfill(item);
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    setDone(item) {
        item.done = true;

        return new Promise(function (fulfill, reject) {
            TodoItemRepository.removeTodoItem(item).then(function () {
                TodoItemRepository.addDoneTodoItem(item).then(function () {
                    fulfill(item);
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    setNotDone(item) {
        item.done = false;
        return new Promise(function (fulfill, reject) {
            TodoItemRepository.removeDoneTodoItem(item).then(function () {
                TodoItemRepository.addTodoItem(item).then(function () {
                    fulfill(item);
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    deleteTodoItem(item) {
        return new Promise(function (fulfill, reject) {
            let repositoryPromise;
            if (item.done) {
                repositoryPromise = TodoItemRepository.removeDoneTodoItem(item);
            } else {
                repositoryPromise = TodoItemRepository.removeTodoItem(item);
            }
            repositoryPromise.then(function () {
                fulfill();
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    getAllTodoItems() {
        return TodoItemRepository.getTodoItems();
    }

    getAllDoneTodoItems() {
        return TodoItemRepository.getDoneTodoItems();
    }
}
