import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

/**
 * Creation Operations
 */
of(1, 2, 3, 4).subscribe(x => console.log("[creation] result", x));

/**
 * Pipeable Operators
 */
new Observable<number>(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);

  observer.complete();
})
  .pipe(
    map(val => val * 2),
    tap(res => {
      console.log("[pipeable tap]", res);
    })
  )
  .subscribe(res => {
    console.log("[pipeable] result", res);
  });
