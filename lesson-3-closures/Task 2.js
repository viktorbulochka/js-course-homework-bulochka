var obj = {
    className: 'open menu'
};

function removeCls(obj, cls) {
    var deletedCls = obj.className.split(' ');

    Array.prototype.remove = function (value) {
        var i = this.indexOf(value);
        if (i != -1) {
            return this.splice(i, 1);
        }
        return false;
    }

    {
        deletedCls.remove(cls);
        obj.className = deletedCls.join(' ');

        console.log(obj)
    }
}

removeCls(obj, 'open');


var secondObj = {
    className: 'my menu menu'
}

function removeDublicatedCLS(obj, cls) {
    var deletedCls = obj.className.split(' ');

    Array.prototype.remove = function (value) {
        var i = this.indexOf(value);
        if (i != -1) {
            return this.splice(i, 1);
        }
        return false;
    }

    {
        while (deletedCls.indexOf(cls) !== -1)
        deletedCls.remove(cls);
        obj.className = deletedCls.join(' ');

        console.log(obj)
    }
}

removeDublicatedCLS(secondObj,"menu")



