/**
marble takeWhile
{
  source a:                 +--(0)-(1)-(2)-(3)-(4)-|
  operator takeWhile:       +--(0)-(1)-(2)-|
}
*/
import { Observable } from "rxjs";
import { takeWhile } from "rxjs/operators";

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

input$.pipe(takeWhile(val => val < 3)).subscribe({
  next: x =>
    console.log(`${new Date().toLocaleTimeString()} - [takeWhile]: ${x}`),
  complete: () =>
    console.log(`${new Date().toLocaleTimeString()} - [takeWhile]: complete`),
});
