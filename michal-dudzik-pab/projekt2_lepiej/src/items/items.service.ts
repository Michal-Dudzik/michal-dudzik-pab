/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";
import fs from 'fs';

/**
 * In-Memory Store
 */
 let items: Items = {
    1: {
      id: 1,
      title: "zakupy",
      content: "jajko, pomidor, kurczak",
      createDate: "2022-03-27",
      tags: ["zakupy", "jajko", "pomidor", "kurczak"]
    },
    2: {
      id: 2,
      title: "checklista w góry",
      content: "kurta przeciwdeszczowa, plecak, namiot, kijki",
      createDate: "2022-03-23",
      tags: ["góry, sprzęt, wycieczka"]
    },
    3: {
      id: 3,
      title: "rachunki",
      content: "opłać rachunki za miesiąc",
      createDate: "2022-03-22",
      tags: ["rachunki"]
    }
  };

// // save async notes in file
// export const save = (): void => {
//   const data = JSON.stringify(items);
//   fs.writeFileSync("./data.json", data);
// };


// //load notes from file
// export const load = (): void => {
//     const data = fs.readFileSync("./data.json");
//     items = JSON.parse(data.toString());
// };


/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf();
    const creationDate = new Date().toISOString().slice(0,10);

    items[id] = {
        id,
        ...newItem,
        createDate: creationDate
    };

    return items[id];
};

export const update = async (
    id: number,
    itemUpdate: BaseItem
): Promise<Item | null> => {
    const item = await find(id);

    if (!item) {
        return null;
    }

    items[id] = {id, ...itemUpdate};

    return items[id];
};

export const remove = async (id:number): Promise<null | void> => {
    const item = await find(id);

    if (!item) {
        return null;
    }

    delete items[id];
}