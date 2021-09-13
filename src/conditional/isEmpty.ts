/**
marble isEmpty
{
    source a:               +-#
    operator isEmpty():     +-(true)|
}
*/
import { EMPTY, Observer } from "rxjs";
import { isEmpty } from "rxjs/operators";

const observer: Observer<boolean> = {
    next: x => console.log('value', x),
    error: err => console.error('error', err),
    complete: () => console.log('complete'),
};

EMPTY.pipe(
    isEmpty()
).subscribe(observer);