/**
marble share
{
    source a:           +--0-1-2-3-4-#
    operator share:     {
        +--0-1-2-3-4-#
        ......+2-3-4-#
    }
    source a:           ............+--0-1-2-3-4-#
    operator share:     {
        ............+--0-1-2-3-4-#
    }
}
*/
import { interval } from 'rxjs';
import { share, take, tap } from 'rxjs/operators';
 
const source1 = interval(1000)
.pipe(
    take(5),
    tap((x: number) => console.log('Processing: ', x)),
    share()
);

source1.subscribe({
    next: x => console.log('subscription 1: ', x),
    complete: () => console.log('subscription 1 complete'),
});

setTimeout(() => {
    source1.subscribe({
        next: x => console.log('subscription 2: ', x),
        complete: () => console.log('subscription 2 complete'),
    });
}, 3000);


setTimeout(() => {
    source1.subscribe({
        next: x => console.log('subscription 3: ', x),
        complete: () => console.log('subscription 3 complete'),
    });
}, 7000);
    