/**
marble every
{
    source a:           +-1-2-3-4-5-6-7-8-9--#
    operator every():   +-----------------(true)-|
}
*/
import { Observer, of } from "rxjs";
import { every } from "rxjs/operators";

const observer: Observer<boolean> = {
    next: x => console.log('value', x),
    error: err => console.error('error', err),
    complete: () => console.log('complete'),
};

of(1,2,3,4,5,6,7,8,9).pipe(
    every(val => val < 10)
).subscribe(observer);