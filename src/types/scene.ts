export interface SceneController {
    update: (delta: number) => void;
}

export type TickerProps = {
    listener: (delta: number) => void;
    context?: SceneController;
};
