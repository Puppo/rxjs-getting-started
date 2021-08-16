import { race } from "rxjs";
import { arrayFrom$, arrayOfWithDelay$, iterator$ } from "../sources";

console.log(new Date().toLocaleTimeString(), `[race] start`);

race([iterator$, arrayFrom$, arrayOfWithDelay$]).subscribe({
  next: res => console.log(new Date().toLocaleTimeString(), `[race]`, res),
  complete: () =>
    console.log(new Date().toLocaleTimeString(), `[race] complete`),
});
