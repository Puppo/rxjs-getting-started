/**
marble max
{
    source a:         +-a-b-e-d-c-#
    operator max():   +---------e-|
}
*/
import { Observer, of } from "rxjs";
import { max } from "rxjs/operators";

const observer: Observer<string> = {
    next: x => console.log('value', x),
    error: err => console.error('error', err),
    complete: () => console.log('complete'),
};

of("a", "b", "e", "d", "c").pipe(
    max()
).subscribe(observer);