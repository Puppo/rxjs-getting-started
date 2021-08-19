import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
 
of('a', 'b', 'c', 'd', 1, 3).pipe(
    map((n: any) => n.toUpperCase()),
    catchError(err => {
        console.error(err.message);
        return of('A', 'B', 'C', 'D')
    }),
  )
  .subscribe(x => console.log(x));