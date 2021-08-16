/**
marble merge
{
  source iterator:            +----(Hello)-(from)(iterator)---|
  source arrayFrom$:          +-(Hello)(from)(array)-----|
  source arrayOfWithDelay$:   +----(10)-(9)-(8)-(7)-(6)-(5)-(4)-(3)-(2)-(1)-|
}
 */
import { from, Observable } from "rxjs";

async function* hello() {
  const wait = async (time: number) =>
    new Promise(res => setTimeout(res, time));
  yield "Hello";
  await wait(1000);
  yield "from";
  await wait(500);
  yield "iterator";
}

export const iterator$ = from(hello());
export const arrayFrom$ = from(["Hello", "from", "array"]);
export const arrayOfWithDelay$ = new Observable<number>(subscriber => {
  let counter = 10;
  const id = setInterval(() => {
    if (counter > 0) {
      subscriber.next(counter--);
    } else {
      clearInterval(id);
      subscriber.complete();
    }
  }, 500);
});
