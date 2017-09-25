import TodoItem from "TodoApp/Models/TodoItem";

let todoItem;

beforeEach(() => {
    todoItem = new TodoItem();
});

it('has a property `title`', () => {
    const expected = "test_title";
    todoItem.title = expected;
    expect(todoItem.title).toBe(expected);
});

it('has a property `done`', () => {
    const expected = true;
    todoItem.done = expected;
    expect(todoItem.done).toBe(expected);
});

it('can import data from a key-value object', () => {
    const expectedTitle = "test_title";
    const expectedDone = false;
    const array = {_title: expectedTitle, _done: expectedDone};
    todoItem.fromArray(array);
    expect(todoItem.title).toBe(expectedTitle);
    expect(todoItem.done).toBe(expectedDone);
});

it('calls super.fromArray() to import data from a key-value object', () => {
    const expected = "test_id";
    const array = {_id: expected};
    todoItem.fromArray(array);
    expect(todoItem.id).toBe(expected);
});
