import { interval } from 'rxjs';
import { concatMapTo, skip, take, tap } from 'rxjs/operators';

const source1$ = interval(1000, ).pipe(
    skip(2),
    take(2),
    tap(val => {
        console.log(`${new Date().toLocaleTimeString()}: Source1 Generated`, val);
    }),
)

const source2$ = interval(2000, ).pipe(
    take(2),
    tap(val => {
        console.log(`${new Date().toLocaleTimeString()}: Source2 Generated`, val);
    }),
)

console.log(`${new Date().toLocaleTimeString()}: concatMapTo: start`)
source1$.pipe(
    concatMapTo(source2$)
)
.subscribe({
    next: value => console.log(`${new Date().toLocaleTimeString()}: concatMapTo`, value),
    complete: () => console.log(`${new Date().toLocaleTimeString()}: concatMapTo: complete`),
})
