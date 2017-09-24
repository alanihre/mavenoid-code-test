import LocalStorageProvider from 'TodoApp/Storage/LocalStorageProvider';

export default class Repository {

    static decodeItems(itemDataString, itemClass) {
        let itemDataList = JSON.parse(itemDataString);

        let items = [];
        for (const itemId of Object.keys(itemDataList)) {
            const itemData = itemDataList[itemId];
            let item = new itemClass();
            item.fromArray(itemData);
            items.push(item);
        }
        return items;
    }

    static encodeItems(items) {
        let itemList = {};
        for (const item of items) {
            itemList[item.id] = item;
        }
        return JSON.stringify(itemList);
    }

    static getItems(key, itemClass) {
        return new Promise(function (fulfill, reject){
            LocalStorageProvider.loadData(key).then(function (itemData) {
                if (!itemData) {
                    fulfill([]);
                    return;
                }

                let items = Repository.decodeItems(itemData, itemClass);
                fulfill(items);
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    static setItems(key, items) {
        let encodedItems = Repository.encodeItems(items);

        return new Promise(function (fulfill, reject){
            LocalStorageProvider.storeData(key, encodedItems).then(function () {
                fulfill();
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    static addItem(key, item) {
        return new Promise(function (fulfill, reject){
            LocalStorageProvider.loadData(key).then(function (itemDataString) {
                let itemDataList;
                if (itemDataString) {
                    itemDataList = JSON.parse(itemDataString);
                } else {
                    itemDataList = {};
                }

                itemDataList[item.id] = item;
                let encodedData = JSON.stringify(itemDataList);
                console.log(encodedData);

                LocalStorageProvider.storeData(key, encodedData).then(function () {
                    fulfill();
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                    reject(error);
                });
        });
    }

    static removeItem(key, item) {
        return new Promise(function (fulfill, reject){
            LocalStorageProvider.loadData(key).then(function (itemDataString) {

                let itemDataList;
                if (itemDataString) {
                    itemDataList = JSON.parse(itemDataString);
                } else {
                    itemDataList = {};
                }

                delete itemDataList[item.id];
                let encodedData = JSON.stringify(itemDataList);

                LocalStorageProvider.storeData(key, encodedData).then(function () {
                    fulfill();
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    }
}
