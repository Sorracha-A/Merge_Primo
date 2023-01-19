const { merge } = require('../dist/merge');

describe('merge function', () => {
    it('should merge two sorted arrays into one sorted array', () => {
        const collection1 = [1, 3, 5, 7, 9];
        const collection2 = [2, 4, 6, 8, 10];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(merge(collection1, collection2)).toEqual(expected);
    });
    it('should return an empty array if both collections are empty', () => {
        const collection1 = [];
        const collection2 = [];
        const expected = [];
        expect(merge(collection1, collection2)).toEqual(expected);
    });
    it('should return the non-empty collection if one collection is empty', () => {
        const collection1= [1, 3, 5];
        const collection2 = [];
        const expected = [1, 3, 5];
        expect(merge(collection1, collection2)).toEqual(expected);
    });
    it('should merge two collections with duplicate elements', () => {
        const collection1 = [1, 3, 3, 5];
        const collection2 = [2, 2, 4, 4];
        const expected = [1, 2, 2, 3, 3, 4, 4, 5];
        expect(merge(collection1, collection2)).toEqual(expected);
    });
    it('should merge two collections with large numbers', () => {
        const collection1 = [100000000, 300000000, 500000000];
        const collection2 = [200000000, 400000000, 600000000];
        const expected = [100000000, 200000000, 300000000, 400000000, 500000000, 600000000];
        expect(merge(collection1, collection2)).toEqual(expected);
    });
    it('should return correct result even if input arrays contain negative numbers', () => {
        const collection1 = [-5, -3, -1];
        const collection2 = [-6, -4, -2];
        const expected = [-6, -5, -4, -3, -2, -1];
        expect(merge(collection1, collection2)).toEqual(expected);
    });


});
