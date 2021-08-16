/**
marble forkJoin
{
  source iterator:            +----(Hello)-(from)(iterator)---|
  source arrayFrom$:          +-(Hello)(from)(array)-----|
  source arrayOfWithDelay$:   +----(10)-(9)-(8)-(7)-(6)-(5)-(4)-(3)-(2)-(1)-|
  operator forkJoin:          +----------------------{iterator,array,1}-|
}
*/
import { forkJoin } from "rxjs";
import { arrayFrom$, arrayOfWithDelay$, iterator$ } from "../sources";

console.log(new Date().toLocaleTimeString(), `[forkJoin] start`);

forkJoin([iterator$, arrayFrom$, arrayOfWithDelay$]).subscribe({
  next: res => console.log(new Date().toLocaleTimeString(), `[forkJoin]`, res),
  complete: () =>
    console.log(new Date().toLocaleTimeString(), `[forkJoin] complete`),
});
