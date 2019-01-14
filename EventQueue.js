class EventQueue {

    constructor() {
        this.events = [];
    }

    push(event) {
        this.events.push(event);
    }

    pull() {
        return this.events.shift();
    }
}

module.exports = EventQueue;
