/**
marble skip
{
  source a:                 +--(0)-(1)-(2)-(3)-(4)-|
  operator skip(2):         +------    (2)-(3)-(4)-|
}
*/
import { Observable } from "rxjs";
import { skip } from "rxjs/operators";

const input$ = new Observable<number>(subscriber => {
  let count = 0;
  const id = setInterval(() => {
    if(count < 5) subscriber.next(count++);
    else {
      clearInterval(id);
      subscriber.complete();
    } 
  }, 1000);
  return () => {
    clearInterval(id);
    subscriber.complete();
  };
});

input$.pipe(skip(2)).subscribe({
  next: x => console.log(`${new Date().toLocaleTimeString()} - [skip]: ${x}`),
  complete: () =>
    console.log(`${new Date().toLocaleTimeString()} - [skip]: complete`),
});
