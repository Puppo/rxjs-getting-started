/**
marble zip
{
  source iterator:            +----(Hello)-(from)(iterator)---|
  source arrayFrom$:          +-(Hello)(from)(array)-----|
  source arrayOfWithDelay$:   +----(10)-(9)-(8)-(7)-(6)-(5)-(4)-(3)-(2)-(1)-|
  operator zip:               +----{Hello,Hello,10}-{from,from,9}-{iterator,array,8}-|
}
*/
import { zip } from "rxjs";
import { arrayFrom$, arrayOfWithDelay$, iterator$ } from "../sources";

console.log(new Date().toLocaleTimeString(), `[zip] start`);

zip([iterator$, arrayFrom$, arrayOfWithDelay$]).subscribe({
  next: res => console.log(new Date().toLocaleTimeString(), `[zip]`, res),
  complete: () =>
    console.log(new Date().toLocaleTimeString(), `[zip] complete`),
});
