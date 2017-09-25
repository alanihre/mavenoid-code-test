import TodoItem from "TodoApp/Models/TodoItem";
import Repository from "TodoApp/Repositories/Repository";
import LocalStorageProvider from "TodoApp/Storage/LocalStorageProvider";
import { AsyncStorage } from 'react-native';

let items;

const itemKey = "TEST_KEY";
const itemClass = TodoItem;

beforeEach(() => {
    items = [];

    let item1 = new TodoItem();
    item1.id = "1";
    item1.title = "test_title";
    items.push(item1);

    let item2 = new TodoItem();
    item2.id = "2";
    item2.title = "test_title";
    items.push(item2);
});

it('can decode items', () => {
    let itemsToDecode = {};

    for(const item of items) {
        itemsToDecode[item.id] = item;
    }

    let itemDataString = JSON.stringify(itemsToDecode);

    let decodedItems = Repository.decodeItems(itemDataString, itemClass);

    expect(decodedItems).toEqual(items);
});

it('can encode items', () => {
    let expectedItems = {};

    for(const item of items) {
        expectedItems[item.id] = item;
    }

    let expectedDataString = JSON.stringify(expectedItems);

    let dataString = Repository.encodeItems(items);

    expect(dataString).toBe(expectedDataString);
});
