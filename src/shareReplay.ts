/**
marble shareReplay
{
    source a:           +--0-1-2-3--#
    operator shareReplay:     {
        ......+{0,1,2}-3--#
        +--0-1-2-3--#
    }
}
*/
import { interval } from 'rxjs';
import { shareReplay, take, tap } from 'rxjs/operators';

const obs$ = interval(1000);
const shared$ = obs$.pipe(
  take(4),
  tap(console.log),
  shareReplay(3)
);
shared$.subscribe(x => console.log('sub A: ', x));

setTimeout(() => {
  shared$.subscribe(y => console.log('sub B: ', y));
}, 3500);