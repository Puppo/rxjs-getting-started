import {
  CompletionObserver, ErrorObserver, NextObserver, Observable,
  Observer, Subscriber,
  Subscription
} from "rxjs";

const observer: Observer<string> = {
  next: (value: string) =>
    console.log(`${new Date().toISOString()} - [observer] next`, value),
  error: (error: Error) =>
    console.error(`${new Date().toISOString()} - [observer] error`, error),
  complete: () =>
    console.log(`${new Date().toISOString()} - [observer] complete!`),
};

/**
 * Partial Observer
 * only a next method is implemented
 */
const nextObserver: NextObserver<string> = {
  next: (value: string) =>
    console.log(`${new Date().toISOString()} - [nextObserver] next`, value),
};

/**
 * Partial Observer
 * only an error method is implemented
 */
const errorObserver: ErrorObserver<string> = {
  error: (error: Error) =>
    console.error(`${new Date().toISOString()} - [errorObserver] error`, error),
};

/**
 * Partial Observer
 * only a complete method is implemented
 */
const completeObserver: CompletionObserver<string> = {
  complete: () =>
    console.log(`${new Date().toISOString()} - [completeObserver] complete!`),
};

/**
 * Default Observer
 * only a next method is implemented
 */
const defaultNextObserver: (value: string) => void = (value: string) =>
    console.log(`${new Date().toISOString()} - [defaultNextObserver] next`, value)

const observable = new Observable<string>((subscriber: Subscriber<string>) => {
  setTimeout(() => {
    subscriber.next("Hello");
  }, 1000);

  setTimeout(() => {
    subscriber.next("World");
  }, 1500);

  setTimeout(() => {
    subscriber.complete();
  }, 2000);
});

observable.subscribe(observer);
observable.subscribe(nextObserver);
observable.subscribe(errorObserver);
observable.subscribe(completeObserver);
observable.subscribe(defaultNextObserver);
/**
 * Subscription with next handle inline
 */
observable.subscribe((value: string) =>
  console.log(`${new Date().toISOString()} - [subscribe method] next`, value)
);

/**
 * Subscription with unsubscribe
 * this subscription log only the first value
 */
const subscription: Subscription = observable.subscribe((value: string) =>
  console.log(
    `${new Date().toISOString()} - [unsubscribe 1 method] next`,
    value
  )
);
subscription.add(
  observable.subscribe((value: string) =>
    console.log(
      `${new Date().toISOString()} - [unsubscribe 2 method] next`,
      value
    )
  )
);
setTimeout(() => {
  subscription.unsubscribe();
}, 1300);

const observableWithCallback = new Observable<string>(
  (subscriber: Subscriber<string>) => {
    let count = 0;
    const id = setInterval(() => {
      subscriber.next(`Count: ${++count}`);
    }, 300);

    return () => {
      console.log("On UnSubscription");
      clearInterval(id);
    };
  }
);

const subscriptionObservableWithCallback: Subscription =
  observableWithCallback.subscribe({
    next: (value: string) =>
      console.log(`[observableWithCallback] Next: ${value}`),
  });
setTimeout(() => {
  subscriptionObservableWithCallback.unsubscribe();
}, 3000);
