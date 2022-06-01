const addEventing = function (obj) {
    var events = {};

    obj.on = function(event, callback) {
        if(!events[event]) {
            events[event] = [callback];
        } else {
            events[event].push(callback);
        }
    }

    obj.trigger = function(event) {
        var args = Array.prototype.slice.call(arguments, 1);
        if(events[event]) {
            events[event].forEach(function(cb) {
                cb.apply(null, args);
            });
        }
    }

    return obj;
}

module.exports = addEventing;
