/**
marble merge
{
  source iterator:            +----(Hello)-(from)(iterator)---|
  source arrayFrom$:          +-(Hello)(from)(array)-----|
  source arrayOfWithDelay$:   +----(10)-(9)-(8)-(7)-(6)-(5)-(4)-(3)-(2)-(1)-|
  operator merge:             +-(Hello)(from)(array)(Hello)(10)(from)(9)(iterator)(8)(7)-(6)-(5)-(4)-(3)-(2)-(1)--|
}
*/
import { merge } from "rxjs";
import { arrayFrom$, arrayOfWithDelay$, iterator$ } from "../sources";

console.log(new Date().toLocaleTimeString(), `[merge] start`);

merge(iterator$, arrayFrom$, arrayOfWithDelay$).subscribe({
  next: res => console.log(new Date().toLocaleTimeString(), `[merge]`, res),
  complete: () =>
    console.log(new Date().toLocaleTimeString(), `[merge] complete`),
});
