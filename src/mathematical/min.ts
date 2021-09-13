/**
marble min
{
    source a:         +-a-b-e-d-c-#
    operator min():   +---------a-|
}
*/
import { Observer, of } from "rxjs";
import { min } from "rxjs/operators";

const observer: Observer<string> = {
    next: x => console.log('value', x),
    error: err => console.error('error', err),
    complete: () => console.log('complete'),
};

of("a", "b", "e", "d", "c").pipe(
    min()
).subscribe(observer);