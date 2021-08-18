import { interval } from 'rxjs';
import { mapTo, take, tap } from 'rxjs/operators';

const source1$ = interval(1000, ).pipe(
    take(5),
    tap(val => {
        console.log(`${new Date().toLocaleTimeString()}: Source1 Generated`, val);
    }),
)

console.log(`${new Date().toLocaleTimeString()}: mapTo: start`)
source1$.pipe(
    mapTo(1000)
)
.subscribe({
    next: value => console.log(`${new Date().toLocaleTimeString()}: mapTo`, value),
    complete: () => console.log(`${new Date().toLocaleTimeString()}: mapTo: complete`),
})
