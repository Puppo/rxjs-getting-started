import { of } from 'rxjs'
import { timestamp } from 'rxjs/operators'

of('a', 'b', 'c')
  .pipe(
      timestamp()
  )
  .subscribe(console.log)