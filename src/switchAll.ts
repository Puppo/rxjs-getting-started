/**
marble switchAll
{
    source a:       +-0-1-2-|
    operator map:
    {
        ..+-(1-1)-(1-2)-(1-3)|
        ....+---(2-1)---(2-2)---(2-3)|
        ......+-----(3-1)-----(3-2)-----(3-3)|
    }
    operator switchAll: +---(1-1)-------(3-1)-----(3-2)-----(3-3)|
}
*/

import { interval, timer } from 'rxjs';
import { map, switchAll, take } from 'rxjs/operators';

const createSource = (index: number) => interval(index * 1000).pipe(
        take(3),
        map(value => `${index}-${value + 1}`)
    )

console.log(`${new Date().toLocaleTimeString()}: switchAll start`)
const source$ = timer(0, 1000).pipe(
    take(3)
);
source$.pipe(
    map(v => createSource(v + 1)),
    switchAll()
).subscribe({
    next: val => console.log(`${new Date().toLocaleTimeString()}: switchAll`, val)
});