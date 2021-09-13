/**
marble findIndex
{
    source a:               +-1-2-3-4-5-6-7-8-9--#
    operator findIndex():   +---------4-|
}
*/
import { Observer, of } from "rxjs";
import { findIndex } from "rxjs/operators";

const observer: Observer<number> = {
    next: x => console.log('value', x),
    error: err => console.error('error', err),
    complete: () => console.log('complete'),
};

of(1,2,3,4,5,6,7,8,9).pipe(
    findIndex(val => val === 5)
).subscribe(observer);