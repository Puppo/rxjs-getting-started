/**
marble toArray
{
    source a:               +--a-b-c-d-e-f-g-h-#
    operator toArray():     +----------------{a,b,c,d,e,f,g,h}-|
}
*/
import { of } from 'rxjs'
import { toArray } from 'rxjs/operators'


of('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')
  .pipe(
      toArray()
  )
  .subscribe(console.log)