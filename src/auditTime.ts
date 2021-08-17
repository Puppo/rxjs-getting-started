import { Observable } from "rxjs";
/**
marble auditTime
{
  source a:                  +--(1)-(2)-(3)-(4)-(5)-(6)-(7)-(8)-(9)-(10)-|
  operator auditTime(2000):  +----(2)---(4)---(6)---(8)---(10)--|
}
*/
import { auditTime } from "rxjs/operators";

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

const result = input$.pipe(auditTime(2000));

result.subscribe({
  next: x =>
    console.log(
      `${new Date().toLocaleTimeString()} - [auditTime result]: ${x}`
    ),
});
