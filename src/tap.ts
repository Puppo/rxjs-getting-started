import { of } from 'rxjs'
import { tap } from 'rxjs/operators'


of('a', 'b', 'c')
  .pipe(
      tap({
          next: x => console.log(`tap: ${x}`),
          complete: () => console.log('tap: complete'),
          error: err => console.log(`tap: error: ${err}`)
      })
  )
  .subscribe()