import Model from "TodoApp/Models/Model";

let model;

beforeEach(() => {
    model = new Model();
});

it('has a property `id`', () => {
    const expected = "test_id";
    model.id = expected;
    expect(model.id).toBe(expected);
});

it('has a property `key` that is the value of `id`', () => {
    const expected = "test_id";
    model.id = expected;
    expect(model.key).toBe(expected);
});

it('can import data from a key-value object', () => {
    const expected = "test_id";
    const array = {_id: expected};
    model.fromArray(array);
    expect(model.id).toBe(expected);
});
