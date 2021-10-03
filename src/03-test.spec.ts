import { concatMap, delay, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

describe('Marble Testing', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });
    
    it('test', () => {
        testScheduler.run((helpers) => {
            const { cold, expectObservable } = helpers;
            const source$ = cold('-a-b-c|');
            const final$ = source$.pipe(concatMap(val => of(val).pipe(delay(100))));
            const expected = '- 100ms a 99ms b 99ms (c|)';
            expectObservable(final$).toBe(expected);
        });
    });

});

