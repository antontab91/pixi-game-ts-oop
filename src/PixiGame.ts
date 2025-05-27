import * as PIXI from 'pixi.js';

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

    // или хотите перезапускать сцену — обязательно вызывайте destroy() перед пересозданием
    public destroy() {
        this.app.destroy(true, { children: true });
    }
}
