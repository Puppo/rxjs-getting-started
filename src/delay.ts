/**
marble delay
{
    source a:               +--abc-#
    operator delay(1000):   +----abc-|
}
*/
import { of } from 'rxjs'
import { delay, tap } from 'rxjs/operators'


of('a', 'b', 'c')
  .pipe(
      tap(x => console.log(`${new Date().toLocaleTimeString()} tap before delay: ${x}`)),
      delay(1000),
      tap(x => console.log(`${new Date().toLocaleTimeString()} tap after delay: ${x}`)),
  )
  .subscribe()