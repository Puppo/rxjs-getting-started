/**
marble debounceTime
{
  source a:                     +--(1)(0.5)-----(3)--(1.5)-----(3)-(1)-|
  operator debounceTime(2000):  +-------(0.5)--------(1.5)-------(1)--|
}
*/
import { Observable } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";

const timesInSecond = [1, 0.5, 3, 1.5, 3, 1];

const input$ = new Observable<number>(subscriber => {
  let count = 0;
  (function next() {
    const seconds = timesInSecond[count++];
    setTimeout(() => {
      subscriber.next(seconds);

      if (count > 5) {
        subscriber.complete();
        return;
      }

      next();
    }, seconds * 1000);
  })();
});

const result = input$.pipe(
  tap(x =>
    console.log(
      `${new Date().toLocaleTimeString()} - [before debounceTime]: ${x}`
    )
  ),
  debounceTime(2000)
);
result.subscribe({
  next: x =>
    console.log(
      `${new Date().toLocaleTimeString()} - [debounceTime result]: ${x}`
    ),
});
