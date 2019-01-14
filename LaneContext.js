class LaneContext {
    constructor (eventQueue) {
        this.awaitingCarEvent = eventQueue;
        this.lamp             = "RED"
    }

    setLamp (lamp) {
        this.lamp = lamp;
        return this;
    }

    getLamp () {
        return this.lamp;
    }

    switch () {
        if (this.lamp === "RED") {
            this.lamp = "GREEN";
            return;
        }
        this.lamp = "RED";
    }

    push (event) {
        this.awaitingCarEvent.push(event);
    }

    proceed () {
        //TODO Business per lane in there
        switch (this.lamp) {
            case "RED" :
                console.log("STOP!!!");
                break;
            case "GREEN":
                let carInLnae = this.awaitingCarEvent.pull();
                //TODO
                break;
        }
    }
}

module.exports = LaneContext;