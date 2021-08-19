import { of } from 'rxjs';
import { map, retry } from 'rxjs/operators';

function toString(val: { toString: () => string }): string | never {
    console.log('toString of', val);
    if (Math.random() > 0.6)
        return val.toString()

    console.log('toString of', val, 'failed');
    throw new Error('toString failed')
}
 
of(1, 2, 3, 4, 5, 6, 7, 8, 9, 0).pipe(
    map(toString),
    retry(3)
  )
  .subscribe({
      next: x => console.log(x),
      error: error => console.error(error.message),
  });