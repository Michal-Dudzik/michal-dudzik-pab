//Data Model Interfaces
 
import { BaseItem, BaseTag, Item, Tag } from "./item.interface";
import { Items, Tags } from "./items.interface";
import fs from 'fs';

// In-Memory Store
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

  let tags: Tags = {
    1: {
      id: 1,
      name: "zakupy"
    },

    2: {
      id: 2,
      name: "góry"
    },

    3: {
      id: 3,
      name: "rachunki"
    }
  };

//TODO - save to file - nie działa
export const save = (): void => {
  const data = JSON.stringify(items);
  fs.writeFileSync("./data.json", data);
};


//TODO - load to file - nie działa
export const load = (): void => {
    const data = fs.readFileSync("./data.json");
    items = JSON.parse(data.toString());
};


//Service Methods

export const findAllItems = async (): Promise<Item[]> => Object.values(items);

export const findItem = async (id: number): Promise<Item> => items[id];

export const findAllTags = async (): Promise<Item[]> => Object.values(tags);

export const findTag = async (id: number): Promise<Item> => tags[id];

export const createItem = async (item: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();
  const createDate = new Date().toISOString().slice(0,10);
    const newItem: Item = {
        id,
        ...item,
        createDate
    };
    items[id] = newItem;
    return newItem;
};

export const updateItem = async (
    id: number,
    itemUpdate: BaseItem
): Promise<Item | null> => {
    const item = await findItem(id);

    if (!item) {
        return null;
    }

    items[id] = {id, ...itemUpdate};

    return items[id];
};

export const removeItem = async (id:number): Promise<null | void> => {
    const item = await findItem(id);

    if (!item) {
        return null;
    }

    delete items[id];
}

export const createTag = async (tag: BaseTag): Promise<Tag> => {
    const id = new Date().valueOf();
    const newTag: Tag = {
        id,
        ...tag
    };
    tags[id] = newTag;
    return newTag;
};

export const updateTag = async (
    id: number,
    tagUpdate: BaseTag
): Promise<Tag | null> => {
    const tag = await findTag(id);

    if (!tag) {
        return null;
    }

    tags[id] = {id, ...tagUpdate};

    return tags[id];
};

export const removeTag = async (id:number): Promise<null | void> => {
    const tag = await findTag(id);

    if (!tag) {
        return null;
    }

    delete tags[id];
};