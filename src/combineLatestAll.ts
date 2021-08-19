/**
marble combineLatestAll
{
    source a:       +-0-1-2-|
    operator map:   +-----{sA,sB,sC}|
    source sA:      ......+-(AA)-(AB)-(AC)|
    source sB:      ......+---(BA)---(BB)---(BC)|
    source sC:      ......+-----(CA)-----(CB)-----(CC)|
    operator combineLatestAll: ......+-----{AB,BA,CA}{AC,BA,CA}{AC,BB,CA}---{AC,BB,CB}{AC,BC,CB}----{AC,BC,CC}|
}
*/

import { interval, timer } from 'rxjs';
import { combineLatestAll, map, take } from 'rxjs/operators';

const A_CHAR_CODE = 65
const createSource = (index: number) =>
    interval((index + 1) * 1000).pipe(
        take(3),
        map(value => `${String.fromCharCode(A_CHAR_CODE + index)}${String.fromCharCode(A_CHAR_CODE + value)}`)
    )

console.log(`${new Date().toLocaleTimeString()}: combineLatestAll start`)
const source$ = timer(0, 1000).pipe(
    take(3)
);
source$.pipe(
    map(createSource),
    combineLatestAll()
).subscribe({
    next: val => console.log(`${new Date().toLocaleTimeString()}: combineLatestAll`, val)
});
