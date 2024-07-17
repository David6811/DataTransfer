export interface ParseNote {
    _id: string;
    _rperm: string[];
    _wperm: string[];
    deviceId: string;
    title: string;
    source: string;
    noteId: number;
    status: number;
    modified: number;
    parentId: number;
    content: string;
    parentObjectId: string;
    type: number;
    level: number;
    created: number;
    _updated_at: string; // Use Date type if you prefer working with Date objects
    _created_at: string; // Use Date type if you prefer working with Date objects
}
