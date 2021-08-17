/**
marble last
{
  source a:         +--(1)-(2)-(3)-(4)-(5)-(6)-(7)-(8)-(9)-(10)-|
  operator last:    +--------------------                  (10)-|
}
*/
import { Observable } from "rxjs";
import { last } from "rxjs/operators";

const input$ = new Observable<number>(subscriber => {
  let count = 0;
  const id = setInterval(() => {
    if (count < 10) {
      subscriber.next(++count);
    } else {
      clearInterval(id);
      subscriber.complete();
    }
  }, 1000);
});

console.log(`${new Date().toLocaleTimeString()} - [last] start`)
input$.pipe(last()).subscribe({
  next: x => console.log(`${new Date().toLocaleTimeString()} - [last]: ${x}`),
  complete: () => console.log(`${new Date().toLocaleTimeString()} - [last] complete`),
});
