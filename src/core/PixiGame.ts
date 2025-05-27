import * as PIXI from 'pixi.js';
import { TickerProps } from 'types/scene';

export default class PixiGame {
    private app: PIXI.Application;

    constructor(container: HTMLElement) {
        this.app = new PIXI.Application({
            width: 1024,
            height: 768,
            backgroundColor: 0x000,
        });

        container.appendChild(this.app.view as HTMLCanvasElement);
    }

    public addToStage(displayObject: PIXI.DisplayObject) {
        this.app.stage.addChild(displayObject);
    }

    public startTicker({ listener, context }: TickerProps) {
        this.app.ticker.add(listener, context);
    }

    public destroy() {
        this.app.destroy(true, { children: true });
    }
}
