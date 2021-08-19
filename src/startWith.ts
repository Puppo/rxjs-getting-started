import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

const source1$ = of(1, 2, 3).pipe(
    startWith(1000)
)

source1$.subscribe({
    next: val => console.log(`${new Date().toLocaleTimeString()}: startWith`, val)
});
