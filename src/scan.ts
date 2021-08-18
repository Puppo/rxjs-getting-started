import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

const source$ = of(1, 2, 3, 4, 5);

source$.pipe(
    scan((acc, curr) => acc + curr, 0)
)
.subscribe({
    next: value => console.log(`${new Date().toLocaleTimeString()}: scan`, value),
})
