/**
marble subject
{
    source a:       +1----2----|
    source subs: {
                    +1----2----|
                    ....+-2----|
    }
}
*/
import { Subject } from 'rxjs';
 
const subject = new Subject<number>();
 
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