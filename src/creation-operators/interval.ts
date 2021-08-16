import { interval } from "rxjs";

console.log(new Date().toLocaleTimeString(), "[interval] start");
interval(1000).subscribe({
  next: res => console.log(new Date().toLocaleTimeString(), "[interval]", res),
  complete: () =>
    console.log(new Date().toLocaleTimeString(), "[interval] complete"),
});
