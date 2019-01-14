class CarEnterEvent {
    constructor (carInfo) {
        this.type = 'CAR_ENTER_EVENT';
        this.car  = carInfo;
    }

    getType () {
        return this.type;
    }

    getDuration () {
        return this.car.duration;
    }

    getCarName () {
        return this.car.name;
    }
}

module.exports = CarEnterEvent;