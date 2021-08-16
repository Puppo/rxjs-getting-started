import { of } from "rxjs";

of([1, 2, 3], 4, 5, 6).subscribe({
  next: res => console.log("[of]", res),
  complete: () => console.log("[of] complete"),
});
