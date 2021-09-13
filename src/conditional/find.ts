/**
marble find
{
    source a:           +-1-2-3-4-5-6-7-8-9--#
    operator find():    +---------5-|
}
*/
import { Observer, of } from "rxjs";
import { find } from "rxjs/operators";

const observer: Observer<number | undefined> = {
    next: x => console.log('value', x),
    error: err => console.error('error', err),
    complete: () => console.log('complete'),
};

of(1,2,3,4,5,6,7,8,9).pipe(
    find(val => val === 5)
).subscribe(observer);