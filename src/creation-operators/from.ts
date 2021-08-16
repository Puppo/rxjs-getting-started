import { from } from "rxjs";

from([1, 2, 3]).subscribe(res => console.log("[from]", res));
from(
  new Promise(res => setTimeout(() => res("Hello from promise"), 3000))
).subscribe(res => console.log(new Date().toLocaleTimeString(), `[from]`, res));

const wait = async (time: number) => new Promise(res => setTimeout(res, time));
async function* hello() {
  yield "Hello";
  await wait(1000);
  yield "from";
  await wait(1000);
  yield "iterator";
}
from(hello()).subscribe({
  next: res => console.log(new Date().toLocaleTimeString(), `[from]`, res),
  complete: () =>
    console.log(new Date().toLocaleTimeString(), `[from] complete`),
});
