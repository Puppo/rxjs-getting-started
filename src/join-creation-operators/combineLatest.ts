/**
marble combineLatest
{
  source iterator:            +----(Hello)-(from)(iterator)---|
  source arrayFrom$:          +-(Hello)(from)(array)-----|
  source arrayOfWithDelay$:   +----(10)-(9)-(8)-(7)-(6)-(5)-(4)-(3)-(2)-(1)-|
  operator combineLatest:     +----{Hello,array,10}-{from,array,10}{from,array,9}{iterator,array,9}{iterator,array,8}{iterator,array,7}-{iterator,array,6}-{iterator,array,5}-{iterator,array,4}-{iterator,array,3}-{iterator,array,2}-{iterator,array,1}-|
}
*/
import { combineLatest } from "rxjs";
import { arrayFrom$, arrayOfWithDelay$, iterator$ } from "../sources";

console.log(new Date().toLocaleTimeString(), `[combineLatest] start`);

combineLatest([iterator$, arrayFrom$, arrayOfWithDelay$]).subscribe({
  next: res =>
    console.log(new Date().toLocaleTimeString(), `[combineLatest]`, res),
  complete: () =>
    console.log(new Date().toLocaleTimeString(), `[combineLatest] complete`),
});
