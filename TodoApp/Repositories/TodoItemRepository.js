import Repository from "./Repository";
import TodoItem from "TodoApp/Models/TodoItem";

export default class TodoItemRepository extends Repository {

    static TODO_ITEMS_KEY = 'todo_items';
    static TODO_ITEMS_DONE_KEY = 'todo_items_done';

    static getTodoItems() {
        return Repository.getItems(TodoItemRepository.TODO_ITEMS_KEY, TodoItem);
    }

    static getDoneTodoItems() {
        return Repository.getItems(TodoItemRepository.TODO_ITEMS_DONE_KEY, TodoItem);
    }

    static setTodoItems(items) {
        return Repository.setItems(TodoItemRepository.TODO_ITEMS_KEY, items);
    }

    static setDoneTodoItems(items) {
        return Repository.setItems(TodoItemRepository.TODO_ITEMS_DONE_KEY, items);
    }

    static addTodoItem(item) {
        Repository.addItem(TodoItemRepository.TODO_ITEMS_KEY, item);
    }

    static addDoneTodoItem(item) {
        Repository.addItem(TodoItemRepository.TODO_ITEMS_DONE_KEY, item);
    }

    static removeTodoItem(item) {
        Repository.removeItem(TodoItemRepository.TODO_ITEMS_KEY, item);
    }

    static removeDoneTodoItem(item) {
        Repository.removeItem(TodoItemRepository.TODO_ITEMS_DONE_KEY, item);
    }
}
