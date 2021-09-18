/**
marble behaviorSubject
{
    source a:       +01---2----|
    source subs: {
                    +01---2----|
                    ....+12----|
    }
}
*/
import { BehaviorSubject } from 'rxjs';
 
const subject = new BehaviorSubject<number>(0);
 
subject.subscribe({
  next: (v) => console.log(new Date().toLocaleTimeString(), `observerA: ${v}`),
  complete: () => console.log(new Date().toLocaleTimeString(), 'observerA: complete')
});
 
subject.next(1);

setTimeout(() => {
    subject.subscribe({
        next: (v) => console.log(new Date().toLocaleTimeString(), `observerB: ${v}`),
        complete: () => console.log(new Date().toLocaleTimeString(), 'observerB: complete')
    });
}, 1000);

setTimeout(() => {
  subject.next(2);
}, 3000);

setTimeout(() => {
  subject.complete();
}, 4000);
