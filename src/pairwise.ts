import { of } from 'rxjs';
import { pairwise } from 'rxjs/operators';

const source$ = of(1, 2, 3, 4, 5);

source$.pipe(
    pairwise()
)
.subscribe({
    next: value => console.log(`${new Date().toLocaleTimeString()}: pairwise`, value),
})
