/**
marble defaultIfEmpty
{
    source a:                       +-#
    operator defaultIfEmpty(10):    +-(10)|
}
*/
import { EMPTY, Observer } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";

const observer: Observer<number> = {
    next: x => console.log('value', x),
    error: err => console.error('error', err),
    complete: () => console.log('complete'),
};

EMPTY.pipe(
    defaultIfEmpty(10)
).subscribe(observer);