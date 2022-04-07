/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item, BaseTag, Tag } from "./item.interface";

/**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {
	try {
		const items: Item[] = await ItemService.findAllItems();

		res.status(200).send(items);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

// GET tags
itemsRouter.get("/tags", async (req: Request, res: Response) => {
	try {
		const tags: Tag[] = await ItemService.findAllTags();

		res.status(200).send(tags);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id, 10);

	try {
		const item: Item = await ItemService.findItem(id);

		if (item) {
			return res.status(200).send(item);
		}

		res.status(404).send("item not found");
	} catch (e) {
		res.status(500).send(e.message);
	}
});

// GET tags/:id
itemsRouter.get("/tags/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id, 10);

	try {
		const tag: Tag = await ItemService.findTag(id);

		if (tag) {
			return res.status(200).send(tag);
		}

		res.status(404).send("tag not found");
	} catch (e) {
		res.status(500).send(e.message);
	}
});

// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
	try {
		const item: BaseItem = req.body;

		const newItem = await ItemService.createItem(item);

		res.status(201).json(newItem);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

// POST tags
itemsRouter.post("/tags", async (req: Request, res: Response) => {
	try {
		const tag: BaseTag = req.body;

		const newTag = await ItemService.createTag(tag);

		res.status(201).json(newTag);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

// PUT items/:id

itemsRouter.put("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id, 10);

	try {
		const itemUpdate: Item = req.body;

		const existingItem: Item = await ItemService.findItem(id);

		if (existingItem) {
			const updatedItem = await ItemService.updateItem(id, itemUpdate);
			return res.status(200).json(updatedItem);
		}

		const newItem = await ItemService.createItem(itemUpdate);

		res.status(201).json(newItem);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

//put tags/:id
itemsRouter.put("/tags/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id, 10);

	try {
		const tagUpdate: Tag = req.body;

		const existingTag: Tag = await ItemService.findTag(id);

		if (existingTag) {
			const updatedTag = await ItemService.updateTag(id, tagUpdate);
			return res.status(200).json(updatedTag);
		}

		const newTag = await ItemService.createTag(tagUpdate);

		res.status(201).json(newTag);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
	try {
		const id: number = parseInt(req.params.id, 10);
		await ItemService.removeItem(id);

		res.sendStatus(204);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

// delete tags/:id
itemsRouter.delete("/tags/:id", async (req: Request, res: Response) => {
	try {
		const id: number = parseInt(req.params.id, 10);
		await ItemService.removeTag(id);

		res.sendStatus(204);
	} catch (e) {
		res.status(500).send(e.message);
	}
});
