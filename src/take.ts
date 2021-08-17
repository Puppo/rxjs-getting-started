/**
marble take
{
  source a:                 +--(0)-(1)-(2)-(3)-(4)-|
  operator take(2):         +--(0)-(1)-|
}
*/
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

const input$ = new Observable<number>(subscriber => {
  let count = 0;
  const id = setInterval(() => {
    subscriber.next(count++);
  }, 1000);
  return () => {
    clearInterval(id);
    subscriber.complete();
  };
});

input$.pipe(take(2)).subscribe({
  next: x => console.log(`${new Date().toLocaleTimeString()} - [take]: ${x}`),
  complete: () =>
    console.log(`${new Date().toLocaleTimeString()} - [take]: complete`),
});
