/**
marble skipUntil
{
  source a:                 +--(0)-(1)-(2)-(3)-(4)-|
  source b:                 +----------        (0)-|
  operator skipUntil:       +----------        (4)-|
}
*/
import { Observable } from "rxjs";
import { skipUntil } from "rxjs/operators";

const input$ = new Observable<number>(subscriber => {
  let count = 0;
  const id = setInterval(() => {
    if (count < 5) subscriber.next(count++)
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
  }, 5000);
});

input$.pipe(skipUntil(untilInput$)).subscribe({
  next: x =>
    console.log(`${new Date().toLocaleTimeString()} - [skipUntil]: ${x}`),
  complete: () =>
    console.log(`${new Date().toLocaleTimeString()} - [skipUntil]: complete`),
});
