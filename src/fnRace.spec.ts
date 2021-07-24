import {fnRace} from "./fnRace";

type Item = {
    id: number;
    key: string
}

const arrHelper = {
    push: <T>(item: T) => (items: T[]): T[] => items.concat([item]),
    removeAt: <T>(index: number) => (items: T[]): T[] => {
        const newItems = [...items];
        const deleted = newItems.splice(index, 1);
        return deleted.length === 0 ? items : newItems;
    },
    insertAt: <T>(index: number, item: T) => (items: T[]): T[] => {
        const newItems = [...items];
        newItems.splice(index, 0, item);
        return newItems;
    },
}

describe('fnRun object test', () => {
    it('should add and remove', () => {
        const arr: Item[] = [{id: 1, key: '1'}, {id: 2, key: '2'}]

        const result = fnRace(
            arrHelper.push({id: 3, key: '3'}),
            arrHelper.removeAt(2),
            arrHelper.insertAt(0, {id: 3, key: '3'})
        )(arr)

        expect(result).toEqual([{id: 3, key: '3'}, {id: 1, key: '1'}, {id: 2, key: '2'}])
    });
});
