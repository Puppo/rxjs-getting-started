/**
marble skipWhile
{
  source a:                 +--(0)-(1)-(2)-(3)-(4)-|
  operator skipWhile:       +--------      (3)-(4)-|
}
*/
import { Observable } from "rxjs";
import { skipWhile } from "rxjs/operators";

const input$ = new Observable<number>(subscriber => {
  let count = 0;
  const id = setInterval(() => {
    if (count < 5) subscriber.next(count++);
    else {
      subscriber.next(count++);
      subscriber.complete();
    }
  }, 1000);
  return () => {
    clearInterval(id);
  };
});

input$.pipe(skipWhile(val => val < 3)).subscribe({
  next: x =>
    console.log(`${new Date().toLocaleTimeString()} - [skipWhile]: ${x}`),
  complete: () =>
    console.log(`${new Date().toLocaleTimeString()} - [skipWhile]: complete`),
});
