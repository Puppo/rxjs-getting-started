import * as events from "events";
import { fromEvent } from "rxjs";

console.log(new Date().toLocaleTimeString(), "[fromEvent] start");

const em = new events.EventEmitter();
fromEvent(em, "custom-event").subscribe({
  next: res => console.log(new Date().toLocaleTimeString(), "[fromEvent]", res),
  complete: () =>
    console.log(new Date().toLocaleTimeString(), "[fromEvent] complete"),
});

setTimeout(() => {
  em.emit("custom-event", "Hello from event emitter");
}, 3000);
