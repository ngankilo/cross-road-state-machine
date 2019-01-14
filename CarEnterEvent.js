class CarEnterEvent {
    constructor (payload) {
        this.props = {
            payload,
            type: "CAR_ENTER_EVENT"
        };
    }

    get payload () {
        return this.props.payload
    }

    set payload (payload) {
        this.props.payload = payload
    }

    get type () {
        return this.props.type;
    }

    set type (type) {
        this.props.type = type;
    }
}

module.exports = CarEnterEvent;
