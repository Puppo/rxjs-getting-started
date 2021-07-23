import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";

const source$ = new Observable<number>(observer => {
  let count = 0;
  const id = setInterval(() => {
    if (count++ < 3) {
      observer.next(count);
    } else {
      clearInterval(id);
      observer.complete();
    }
  }, 1000);
});

source$
  .pipe(
    map(value => value * 2),
    delay(1500)
  )
  .subscribe({
    next: console.log,
  });
