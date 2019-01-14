const EventQueue    = require('./EventQueue');
const CrossRoad     = require('./CrossRoad');
const Lanes         = require('./LaneContext');
const CarEnterEvent = require('./CarEnterEvent');
const LampEvent     = require('./LampEvent');
let eventQueue      = new EventQueue();

let crossRoad = new CrossRoad(eventQueue);

crossRoad.setLanes({
    west: (new Lanes(new EventQueue())).setLamp("GREEN")
});
const lanes = ['west', 'east', 'north', 'south'];
setInterval(() => {
    crossRoad.proceed();
    console.log("Tick-------------------");
    // console.log(crossRoad);
    console.log(eventQueue);
    console.log(eventQueue.events.length);
}, 1000);

setInterval(() => eventQueue.push(new LampEvent()),
    3000);
setInterval(() => eventQueue.push(new CarEnterEvent({
    //TODO car information
    lane: lanes[Math.floor(Math.random() * lanes.length)],
    car : `car ${Date.now()}`,
    duration: 
})), 2000);