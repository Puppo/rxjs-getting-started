/**
marble count
{
    source a:           +-a-b-c-d-e-#
    operator count():   +---------5-|
}
*/
import { Observer, of } from "rxjs";
import { count } from "rxjs/operators";

const observer: Observer<number | undefined> = {
    next: x => console.log('value', x),
    error: err => console.error('error', err),
    complete: () => console.log('complete'),
};

of("a", "b", "c", "d", "e").pipe(
    count()
).subscribe(observer);