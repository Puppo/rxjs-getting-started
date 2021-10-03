import { TestScheduler } from 'rxjs/testing';

describe.only('Marble Testing', () => {
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
            const expected = '-a-b-c|';
        
            expectObservable(source$).toBe(expected);
        });
    });

});

