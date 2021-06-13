function THashStorage() {
    var self = this;

    self.storage = {};

    self.addValue = function (key, value) {
        self.storage[key] = value;
    };

    self.getValue = function (key) {
        if (key in self.storage) {
            return self.storage[key];
        } else {
            return undefined;
        }
    };

    self.deleteValue = function (key) {
        if (key in self.storage) {
            delete self.storage[key];
            return true;
        } else {
            return false;
        }
    };

    self.getKeys = function () {
        var keys = [];
        for (var key in self.storage) {
            keys.push(key);
        }
        return keys;
    };
}
