import { EMPTY } from "rxjs";

EMPTY.subscribe({
  next: res => console.log("[EMPTY]", res),
  complete: () => console.log("[EMPTY] complete"),
});
