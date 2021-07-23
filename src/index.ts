import { Observable } from "rxjs";
import { map, delay, tap } from "rxjs/operators";

const input$ = new Observable<number>(subscriber => {
  let count = 0;
  const id = setInterval(() => {
    if (++count <= 3) {
      console.log(`${new Date().toISOString()} - [input]: ${count}`);
      subscriber.next(count);
    } else {
      clearInterval(id);
      subscriber.complete();
    }
  }, 1000);
});

{
  const operator$ = (input: Observable<number>) =>
    input.pipe(map(value => value * 2));
  const output$ = input$.pipe(operator$);

  output$.subscribe(value => {
    console.log(`${new Date().toISOString()} - [output at the end]: ${value}`);
  });
}

{
  const operator$ = (input: Observable<number>) =>
    input.pipe(
      map(value => value * 2),
      tap(value => {
        console.log(
          `${new Date().toISOString()} - [output after map]: ${value}`
        );
      }),
      delay(1500)
    );
  const output$ = input$.pipe(operator$);

  output$.subscribe(value => {
    console.log(`${new Date().toISOString()} - [output at the end]: ${value}`);
  });
}
