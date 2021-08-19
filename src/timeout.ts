import { Observable, throwError } from 'rxjs';
import { timeout } from 'rxjs/operators';

const source$ = new Observable<number>(subscriber => {
    let id: NodeJS.Timeout | undefined
    (function next(count = 0) {
        if (count > 10) {
            subscriber.complete();
            return;
        }
        id = setTimeout(() => {
            subscriber.next(count)
            next(count + 1)
        }, Math.random() > 0.9 ? 2000 : 1000);
    })()

    return () => {
        if (id) {
            clearTimeout(id);
        }
    }

})

source$
  .pipe(
      timeout({ each: 1500, with: info => throwError(() => new Error(`Timeout ${1500}ms: info: ${JSON.stringify(info)}`)) }),
  )
  .subscribe({
      next: console.log,
      error: error => {
          console.error(`Something Wrong!`)
          console.error(error.message)
      }
  })