export interface BaseItem{
    id: number;
    title: string;
    content: string;
    createDate?: string;
    tags?: string[];
}

export interface Item extends BaseItem{
    id:number;
}

// tags interface
export interface Tag {
    id: number;
    name: string;
}

