class LampEvent {
    constructor () {
        this.props = {
            type: "LIGHT_SWITCH"
        };
    }

    get type () {
        return this.props.type;
    }
}

module.exports = LampEvent;
