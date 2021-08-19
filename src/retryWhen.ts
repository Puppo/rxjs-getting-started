import { interval, timer } from 'rxjs';
import { delayWhen, filter, map, retryWhen, tap } from 'rxjs/operators';
 
interval(1000).pipe(
  map(val => {
    if (val > 5) {
      throw val;
    }
    return val;
  }),
  retryWhen(errors =>
    errors.pipe(
      tap(val => console.log(`Value ${val} was too high!`)),
      filter((_, index) => index < 3),
      delayWhen(val => timer(val * 1000))
    )
  )
).subscribe({
    next: x => console.log(x),
    error: error => console.error(error.message),
});