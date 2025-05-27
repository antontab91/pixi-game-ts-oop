interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface AABBCheckInput {
    entity: Rect;
    area: Rect;
}
