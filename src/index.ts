import * as events from "events";
import { fromEvent, of, from, timer, interval } from "rxjs";

/**
 * fromEvent
 */
const em = new events.EventEmitter();
fromEvent(em, "custom-event").subscribe(res => console.log("[fromEvent]", res));
em.emit("custom-event", "Hello from event emitter");

/**
 * of
 */
of([1, 2, 3], 4, 5, 6).subscribe(res => console.log("[of]", res));

/**
 * from
 */
from([1, 2, 3]).subscribe(res => console.log("[from]", res));

from(
  new Promise(res => setTimeout(() => res("Hello from promise"), 3000))
).subscribe(res => console.log("[from]", res));

async function* hello() {
  const wait = async (time: number) => {
    return new Promise(res => setTimeout(res, time));
  };
  yield "Hello";
  await wait(1000);
  yield "from";
  await wait(1000);
  yield "iterator";
}
const iterator = hello();
from(iterator).subscribe(res => console.log("[from]", res));

/**
 * timer and interval
 */
timer(1000).subscribe(res => console.log("[timer]", res));
interval(1000).subscribe(res => console.log("[interval]", res));
