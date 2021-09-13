/**
marble reduce
{
    source a:             +-1-2-3-4-5-6-7-8-9--#
    operator reduce():    +-----------------(45)--|
}
*/
import { Observer, of } from "rxjs";
import { reduce } from "rxjs/operators";

const observer: Observer<number> = {
    next: x => console.log('value', x),
    error: err => console.error('error', err),
    complete: () => console.log('complete'),
};

of(1,2,3,4,5,6,7,8,9).pipe(
    reduce((acc, curr) => acc + curr, 0)
).subscribe(observer);