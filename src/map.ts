import { interval } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

const source$ = interval(1000, ).pipe(
    take(5),
    tap(val => {
        console.log(`${new Date().toLocaleTimeString()}: Generated`, val);
    }),
)

source$.pipe(
    map(value => Math.pow(value, 2))
)
.subscribe({
    next: value => console.log(`${new Date().toLocaleTimeString()}: map`, value),
    complete: () => console.log(`${new Date().toLocaleTimeString()}: map: complete`),
})
