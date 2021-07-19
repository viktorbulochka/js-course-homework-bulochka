'use strict'

function TAjaxStorage() {
    var self = this;
    self.webHash = {};

    function update() {
        $.ajax({
            url: "http://fe.it-academy.by/AjaxStringStorage2.php",
            type: 'POST',
            datatype: 'json',
            data: {
                f: 'READ',
                n: 'Bulochka'},
            cache: false,
            success: successHandler,
            error: errorHandler
        })
    }
    update();

    function successHandler(data) {
        if (data) {
            self.webHash = JSON.parse(data.result);
            console.log(data.result);
        } else {
            modifyStorage();
        }
    }

    function errorHandler( StatusStr, ErrorStr) {
        alert(StatusStr + ErrorStr);
    }

    function modifyStorage() {
        $.ajax({
            url: "http://fe.it-academy.by/AjaxStringStorage2.php",
            type: 'POST',
            datatype: 'json',
            data: {
                f: 'INSERT',
                n: 'Bulochka',
                v: JSON.stringify(self.webHash)},
            cache: false,
            success: changeNotifier,
            error: errorHandler
        })
    }

    var password  = Math.random();

    function setInfo() {
        $.ajax({
            url: "http://fe.it-academy.by/AjaxStringStorage2.php",
            type: 'POST',
            datatype: 'json',
            data: {
                f: 'LOCKGET',
                n: 'Bulochka',
                p: password },
            cache: false,
            success: saveStorage,
            error: errorHandler
        })
    }

    function saveStorage() {
        $.ajax({
            url: "http://fe.it-academy.by/AjaxStringStorage2.php",
            type: 'POST',
            datatype: 'json',
            data: {
                f: 'UPDATE',
                n: 'Bulochka',
                p: password ,
                v: JSON.stringify(self.webHash)},
            cache: false,
            success: changeNotifier,
            error: errorHandler
        })
    }

    function changeNotifier() {
        alert("Отправлено");
    }

    self.addValue = function(key, value) {
        self.webHash[key] = value;
        setInfo();
    };

    self.deleteValue = function(key) {
        delete self.webHash[key];
        setInfo();
    };

    self.getValue = function(key) {
        return self.webHash[key];
    };

    self.getKeys = function() {
        return Object.keys(self.webHash);
    };
}