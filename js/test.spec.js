var expect = chai.expect;

describe('bubbleSort()', function () {

  it('should not accept an empty array', function () {
    var arr = [];
    expect(bubbleSort.bind(arr)).to.throw();
  });

  it('should not accept an array with length 1', function () {
    var arr = [0];
    expect(bubbleSort.bind(arr)).to.throw();
  });

  it('should not accept an array with non-numeric values', function () {
    var arr = [1, 2, '3', 4, 5];
    expect(bubbleSort.bind(arr)).to.throw();
  });

  it('should sort 2 values from lowest to highest', function () {
    var arr = [2, 1];
    bubbleSort(arr);
    expect(arr).to.deep.equal([1, 2]);
  });

  it('should sort 3 values from lowest to highest', function () {
    var arr = [2, 1, 3];
    bubbleSort(arr);
    expect(arr).to.deep.equal([1, 2, 3]);
  });

  it('should sort 9 values from lowest to highest', function() {
    var arr = [6, 7, 1, 9, 5, 2, 3, 8, 4];
    bubbleSort(arr);
    expect(arr).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should sort 9 values with duplicates from lowest to highest', function() {
    var arr = [6, 6, 1, 9, 5, 2, 2, 8, 5];
    bubbleSort(arr);
    expect(arr).to.deep.equal([1, 2, 2, 5, 5, 6, 6, 8, 9]);
  });

  it('should work as a prototype of Array', function() {
    var arr = [6, 7, 1, 9, 5, 2, 3, 8, 4];
    arr.bubbleSort();
    expect(arr).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});