/**
marble concatAll
{
    source a:       +-0-1-2-|
    operator map:
    {
        ..+-(1-1)-(1-2)-(1-3)|
        ........+---(2-1)---(2-2)---(2-3)|
        ....................+-----(3-1)-----(3-2)-----(3-3)|
    }
    operator concatAll: +---(1-1)-(1-2)-(1-3)---(2-1)---(2-2)---(2-3)-----(3-1)-----(3-2)-----(3-3)|
}
*/

import { interval, timer } from 'rxjs';
import { concatAll, map, take } from 'rxjs/operators';

const createSource = (index: number) => interval(index * 1000).pipe(
        take(3),
        map(value => `${index}-${value + 1}`)
    )

console.log(`${new Date().toLocaleTimeString()}: concatAll start`)
const source$ = timer(0, 1000).pipe(
    take(3)
);
source$.pipe(
    map(v => createSource(v + 1)),
    concatAll()
).subscribe({
    next: val => console.log(`${new Date().toLocaleTimeString()}: concatAll`, val)
});