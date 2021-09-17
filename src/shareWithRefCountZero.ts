/**
marble shareWithResetOnRefCountZero
{
    source a:           +--0-1-2--0-1-2--#
    operator shareWithResetOnRefCountZero:     {
        +--0-#
        ....+1-2--#
        .......+--0-1-2-#
    }
}
*/
import { interval, timer } from 'rxjs';
import { share, take } from 'rxjs/operators';
 
const source = interval(1000).pipe(take(3), share({ resetOnRefCountZero: () => timer(1000) }));
 
const subscriptionOne = source.subscribe(x => console.log('subscription 1: ', x));
setTimeout(() => subscriptionOne.unsubscribe(), 1300);

setTimeout(() => source.subscribe(x => console.log('subscription 2: ', x)), 1700);

setTimeout(() => source.subscribe(x => console.log('subscription 3: ', x)), 5000);
