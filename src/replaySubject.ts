/**
marble replaySubject
{
    source a:       +1-2---3--|
    source subs: {
                    +1-2---3--|
                    ....+{1,2}-3--|
    }
}
*/
import { ReplaySubject } from 'rxjs';
 
const subject = new ReplaySubject<number>();
 
subject.subscribe({
  next: (v) => console.log(new Date().toLocaleTimeString(), `observerA: ${v}`),
  complete: () => console.log(new Date().toLocaleTimeString(), 'observerA: complete')
});
 
subject.next(1);

setTimeout(() => {
  subject.next(2);
}, 1000);

setTimeout(() => {
    subject.subscribe({
        next: (v) => console.log(new Date().toLocaleTimeString(), `observerB: ${v}`),
        complete: () => console.log(new Date().toLocaleTimeString(), 'observerB: complete')
    });
}, 2000);

setTimeout(() => {
  subject.next(3);
}, 3000);

setTimeout(() => {
  subject.complete();
}, 4000);