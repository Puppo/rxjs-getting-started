import { concat } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

describe('Marble Testing', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });
    
    it('test subscriptions', () => {
        testScheduler.run((helpers) => {
            const { cold, expectObservable, expectSubscriptions } = helpers;
            const source1$ = cold('-a-b-c|');
            const source2$ = cold('-d-e-f|');
            const final$ = concat(source1$, source2$);

            const expected = '-a-b-c-d-e-f|';
            const expectedSubscriptionsSource1 = '^-----!';
            const expectedSubscriptionsSource2 = '------^-----!';

            expectObservable(final$).toBe(expected);
            expectSubscriptions(source1$.subscriptions).toBe(expectedSubscriptionsSource1);
            expectSubscriptions(source2$.subscriptions).toBe(expectedSubscriptionsSource2);
        });
    });

});

