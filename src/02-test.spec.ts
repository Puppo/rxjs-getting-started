import { TestScheduler } from 'rxjs/testing';

describe('Marble Testing', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('test with values', () => {
        testScheduler.run((helpers) => {
            const { cold, expectObservable } = helpers;
            const source$ = cold('-a-b-c|', { a: 1, b: 2, c: 3 });
            const expected = '-a-b-c|';
        
            expectObservable(source$).toBe(expected, { a: 1, b: 2, c: 3 });
        });
    });
});

