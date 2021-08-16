/**
marble concat
{
  source iterator:            +----(Hello)-(from)(iterator)-|
  source arrayFrom$:          .........+-(Hello)(from)(array)-|
  source arrayOfWithDelay$:   ..............+----(10)-(9)-(8)-(7)-(6)-(5)-(4)-(3)-(2)-(1)-|
  operator concat:            +----(Hello)-(from)(iterator)--(Hello)(from)(array)-----(10)-(9)-(8)-(7)-(6)-(5)-(4)-(3)-(2)-(1)--|
}
*/
import { concat } from "rxjs";
import { arrayFrom$, arrayOfWithDelay$, iterator$ } from "../sources";

console.log(new Date().toLocaleTimeString(), `[concat] start`);

concat(iterator$, arrayFrom$, arrayOfWithDelay$).subscribe({
  next: res => console.log(new Date().toLocaleTimeString(), `[concat]`, res),
  complete: () =>
    console.log(new Date().toLocaleTimeString(), `[concat] complete`),
});
