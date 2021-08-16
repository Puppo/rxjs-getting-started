import { timer } from "rxjs";

console.log(new Date().toLocaleTimeString(), "[timer] start");
timer(1000).subscribe({
  next: res => console.log(new Date().toLocaleTimeString(), "[timer]", res),
  complete: () =>
    console.log(new Date().toLocaleTimeString(), "[timer] complete"),
});

timer(4000, 1000).subscribe({
  next: res =>
    console.log(new Date().toLocaleTimeString(), "[timer as interval]", res),
  complete: () =>
    console.log(
      new Date().toLocaleTimeString(),
      "[timer as interval] complete"
    ),
});
