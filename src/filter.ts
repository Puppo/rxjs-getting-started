/**
marble filter
{
  source a:         +--(1)-(2)-(3)-(4)-(5)-(6)-(7)-(8)-(9)-(10)-|
  operator filter:  +--  --(2)  ---(4)  ---(6)  ---(8)  ---(10)--|
}
*/
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

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

input$.pipe(filter(x => x % 2 === 0)).subscribe({
  next: x => console.log(`${new Date().toLocaleTimeString()} - [filter]: ${x}`),
});
