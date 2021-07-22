import { Observable, of, timer } from "rxjs";
import { map, take, tap } from "rxjs/operators";

/**
 * Creation Operations
 */
of(1, 2, 3, 4).subscribe(x => console.log("[of] result", x));

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
  .subscribe();

/**
 * Creation Operations + Pipeable Operators
 */
timer(0, 1000)
  .pipe(take(10))
  .subscribe(x => console.log("[timer] result", x));
