/**
marble takeUntil
{
  source a:                 +--(0)-(1)-(2)-(3)-(4)-|
  source b:                 +-----(0)--|
  operator takeUntil:       +--(0)-(1)-|
}
*/
import { Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";

const input$ = new Observable<number>(subscriber => {
  let count = 0;
  const id = setInterval(() => {
    if (count < 5) subscriber.next(++count);
    else {
      clearInterval(id);
      subscriber.complete();
    }
  }, 1000);
});

const untilInput$ = new Observable<void>(subscriber => {
  setTimeout(() => {
    console.log(
      `${new Date().toLocaleTimeString()} - untilInput$ emit`
    );
    subscriber.next();
    subscriber.complete();
  }, 2500);
});

input$.pipe(takeUntil(untilInput$)).subscribe({
  next: x =>
    console.log(`${new Date().toLocaleTimeString()} - [takeUntil]: ${x}`),
  complete: () =>
    console.log(`${new Date().toLocaleTimeString()} - [takeUntil]: complete`),
});
