import { AsyncStorage } from 'react-native';

export default class LocalStorageProvider {

    static storeData(key, data) {
        return AsyncStorage.setItem(key, data);
    }

    static loadData(key) {
        return AsyncStorage.getItem(key);
    }

    static removeData(key) {
        return AsyncStorage.removeItem(key);
    }

    static clear() {
        return AsyncStorage.clear();
    }
}