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
            const { hot, expectObservable } = helpers;
            const source$ = hot('-a-b-^-c|');
            const expected = '--c|';
            expectObservable(source$).toBe(expected);
        });
    });

});

