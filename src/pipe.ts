import { delay, interval, Observable, pipe, take, tap, UnaryFunction } from 'rxjs';

function takeLogAndDelay<T>(takeNumber: number, message: string, time: number): UnaryFunction<Observable<T>, Observable<T>> {
  return pipe(
    tap(x => console.log(message, x)),
    take(takeNumber),
    delay(time),
  );
}

interval(1000).pipe(
    takeLogAndDelay(10, 'Source', 2000)
).subscribe();


