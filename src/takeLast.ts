/**
marble takeLast
{
  source a:                     +--(0)-(1)-(2)-(3)-(4)-|
  operator takeLast(3):         +------    (2)-(3)-(4)--|
}
*/
import { Observable } from "rxjs";
import { takeLast } from "rxjs/operators";

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

console.log(`${new Date().toLocaleTimeString()} - [takeLast]: start`)

input$.pipe(takeLast(3)).subscribe({
  next: x => console.log(`${new Date().toLocaleTimeString()} - [takeLast]: ${x}`),
  complete: () =>
    console.log(`${new Date().toLocaleTimeString()} - [takeLast]: complete`),
});
