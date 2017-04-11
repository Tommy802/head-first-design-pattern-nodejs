var ArrayList = require('./ArrayList');

class iSubject{
    constructor() {
        this.observers = new ArrayList();
    }

    registerObserver(observers) {
        this.observers.add(observers);
    }

    removeObserver(observer) {
        this.observers.remove(this.observers.indexOf(observer, 0));
    };

    notify(context) {
        var observerCount = this.observers.size();
        for (var i = 0; i < observerCount; i++) {
            this.observers.get(i)
                .update(context);
        }
    };

}

module.exports = iSubject;