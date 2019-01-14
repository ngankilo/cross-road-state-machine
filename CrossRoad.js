const lodash = require('lodash');

class CrossRoad {

    constructor (eventQueue) {
        this.eventQueue = eventQueue;
        this.lanes      = {
            north: null,
            south: null,
            west : null,
            east : null
        };
    }

    setLanes (lanes = {}) {
        this.lanes = lanes;
    }

    proceed () {
        let event = this.eventQueue.pull();
        if (!event) {
            return console.log("nothing happen");
        }
        lodash.forEach(this.lanes, lane => {
            switch (event.type) {
                case "LIGHT_SWITCH" :
                    lane.switch();
                    break;
                case "CAR_ENTER":
                    lane.push(event);
                    break;
            }
            lane.proceed();
        })
    }
}

module.exports = CrossRoad;
