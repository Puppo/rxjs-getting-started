/**
marble distinctUntilKeyChanged
{
  source a:                         +--(id1)-(id1)-(id1)-(id2)-(id2)-(id2)-(id3)-(id3)-(id3)-(id4)-(id4)-(id4)--|
  operator distinctUntilKeyChanged: +--(id1)-----        (id2)-----        (id3)-----        (id4)------|
}
*/
import { Observable } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

type State = { id: number; value: string };

const createValue = (id: number): State => ({ id, value: String(id) });
const array = [
  createValue(1),
  createValue(1),
  createValue(1),
  createValue(2),
  createValue(2),
  createValue(2),
  createValue(3),
  createValue(3),
  createValue(3),
  createValue(4),
  createValue(4),
  createValue(4),
];

const input$ = new Observable<State>(subscriber => {
  let count = 0;
  const id = setInterval(() => {
    if (count < array.length) {
      subscriber.next(array[count++]);
    } else {
      clearInterval(id);
      subscriber.complete();
    }
  }, 1000);
});

input$.pipe(distinctUntilKeyChanged("id")).subscribe({
  next: x =>
    console.log(
      `${new Date().toLocaleTimeString()} - [distinctUntilKeyChanged]`,
      x
    ),
});
