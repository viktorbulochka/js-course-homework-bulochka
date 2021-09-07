
function TLocalStorage(storage) {
    var self = this,
        pHash = {};
    var localData = localStorage.getItem(storage);

    self.reset = function () {
        if (localData) {
            pHash = JSON.parse(localData)
        }
        return pHash
    }

    self.addValue = function (key, value) {
        pHash[key] = value;
        localStorage.setItem(storage, JSON.stringify(pHash));
    };

    self.getValue = function (key) {
        return pHash[key];
    };

    self.deleteValue = function (key) {
        delete pHash[key];
        localStorage.removeItem(storage);
    };

    self.getKeys = function () {
        return (Object.keys(pHash));
    };
}