import { interval, Observable, of } from 'rxjs';
import { concatMap, delay, take, tap } from 'rxjs/operators';

const powWithDelay$ = (value: number): Observable<number> => of(Math.pow(value, 2)).pipe(delay(2000))

const source$ = interval(1000).pipe(
    take(5),
    tap(val => {
        console.log(`${new Date().toLocaleTimeString()}: Generated`, val);
    }),
)

source$.pipe(
    concatMap(value => powWithDelay$(value))
)
.subscribe({
    next: value => console.log(`${new Date().toLocaleTimeString()}: concatMap`, value),
    complete: () => console.log(`${new Date().toLocaleTimeString()}: concatMap: complete`),
})
