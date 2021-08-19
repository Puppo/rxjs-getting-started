
import { interval } from 'rxjs';
import { take, withLatestFrom } from 'rxjs/operators';

const source1$ = interval(1000).pipe(
    take(5)
)
const source2$ = interval(2500).pipe(
    take(5)
)

console.log(`${new Date().toLocaleTimeString()}: withLatestFrom start`)
source1$.pipe(
    withLatestFrom(source2$)
).subscribe({
    next: val => console.log(`${new Date().toLocaleTimeString()}: withLatestFrom`, val)
});
