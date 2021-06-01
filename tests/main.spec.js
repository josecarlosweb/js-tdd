import { expect } from 'chai';

describe('Main', () => {

  let arr;

  beforeEach(() => {
    arr = [1, 2, 3, 4];
  });

  describe('Method a', () => {
    context('Case 1', () => {
      it('should be one', () => {
        arr.pop();
        expect(arr).to.have.length(3);
      });
    });

    context('Case 2', () => {
      it('should be two', () => {
        arr.push(5);
        expect(arr).to.have.length(5);
      });
    });
  });
});
