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

// add tag interface    
export interface BaseTag{
    id: number;
    name?: string;
}

export interface Tag extends BaseTag{
    id:number;
}
