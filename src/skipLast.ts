/**
marble skipLast
{
  source a:                     +--(0)-(1)-(2)-(3)-(4)-|
  operator skipLast(3):         +--(0)-(1)-----|
}
*/
import { Observable } from "rxjs";
import { skipLast } from "rxjs/operators";

const input$ = new Observable<number>(subscriber => {
  let count = 0;
  const id = setInterval(() => {
    if (count < 5) subscriber.next(count++);
    else {
      clearInterval(id);
      subscriber.complete();
    }
  }, 1000);
});

console.log(`${new Date().toLocaleTimeString()} - [skipLast]: start`)

input$.pipe(skipLast(3)).subscribe({
  next: x => console.log(`${new Date().toLocaleTimeString()} - [skipLast]: ${x}`),
  complete: () =>
    console.log(`${new Date().toLocaleTimeString()} - [skipLast]: complete`),
});
