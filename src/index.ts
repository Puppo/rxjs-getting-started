import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<string> = {
  next: (value: string) => console.log("next", value),
  error: (error: Error) => console.error("error", error),
  complete: () => console.log("complete!"),
};

const observable = new Observable<string>((subscriber: Subscriber<string>) => {
  subscriber.next("Hello");
  subscriber.next("World");

  subscriber.complete();

  // this will never be logged

  subscriber.error(new Error("Something went wrong!"));

  subscriber.next("Hello");
  subscriber.next("World");
});

observable.subscribe(observer);
