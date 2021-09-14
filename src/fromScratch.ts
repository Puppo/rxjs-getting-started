import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

function delay<T>(delayInMs: number) {
  return (observable: Observable<T>) =>
    new Observable<T>((subscriber) => {
      const allTimerIDs = new Set<NodeJS.Timeout>();
      let hasCompleted = false;
      const subscription = observable.subscribe({
        next(value) {
          const timerID = setTimeout(() => {
            subscriber.next(value);
            allTimerIDs.delete(timerID);
            if (hasCompleted && allTimerIDs.size === 0) {
              subscriber.complete();
            }
          }, delayInMs);

          allTimerIDs.add(timerID);
        },
        error: subscriber.error,
        complete() {
          hasCompleted = true;
          if (allTimerIDs.size === 0) {
            subscriber.complete();
          }
        },
      });

      return () => {
        subscription.unsubscribe();
        allTimerIDs.forEach((timerID) => clearTimeout(timerID));
      };
    });
}

of(1, 2, 3).pipe(
    tap((value) => console.log(new Date().toLocaleTimeString(), "before", value)),
    delay(3000)
).subscribe({
    next: (value) => console.log(new Date().toLocaleTimeString(), "after", value),
});