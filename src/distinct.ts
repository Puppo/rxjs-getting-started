/**
marble distinct
{
  source a:             +--(1)-(1)-(2)-(2)-(3)-(3)--|
  operator distinct:    +--(1)---(2)---(3)----|
}
*/
import { Observable } from "rxjs";
import { distinct } from "rxjs/operators";

const input$ = new Observable<number>(subscriber => {
  let count = 0;
  const array = [1, 1, 2, 2, 3, 3];
  const id = setInterval(() => {
    if (count < array.length) {
      subscriber.next(array[count++]);
    } else {
      clearInterval(id);
      subscriber.complete();
    }
  }, 1000);
});

input$.pipe(distinct()).subscribe({
  next: x =>
    console.log(`${new Date().toLocaleTimeString()} - [distinct]: ${x}`),
});
