import LocalStorageProvider from "TodoApp/Storage/LocalStorageProvider";
import { AsyncStorage } from 'react-native';

it('can store data', () => {
    const expectedData = "test data";
    const key = "test_key";
    LocalStorageProvider.storeData(key, expectedData).then(function () {
        AsyncStorage.getItem(key).then(function (actualData) {
            expect(actualData).toEqual(expectedData);
        });
    });
});

it('can retrieve data', () => {
    const expectedData = "test data";
    const key = "test_key";
    AsyncStorage.setItem(key, expectedData).then(function () {
        LocalStorageProvider.loadData(key).then(function (actualData) {
            expect(actualData).toEqual(expectedData);
        });
    });
});

it('can remove data', () => {
    const data = "test data";
    const key = "test_key";
    AsyncStorage.setItem(key, data).then(function () {
        LocalStorageProvider.removeData(key).then(function () {
            AsyncStorage.getItem(key).then(function (actualData) {
                expect(actualData).toBeNull();
            });
        });
    });
});

it('can clear all data', () => {
    const data = "test data";
    const key = "test_key";
    AsyncStorage.setItem(key, data).then(function () {
        LocalStorageProvider.clear().then(function () {
            AsyncStorage.getAllKeys().then(function (allKeys) {
                expect(allKeys).toEqual([]);
            });
        });
    });
});
