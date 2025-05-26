import * as PIXI from 'pixi.js';

export class PixiGame {
    private app: PIXI.Application;

    constructor(container: HTMLElement) {
        this.app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x1099bb,
        });

        container.appendChild(this.app.view as HTMLCanvasElement);

        const text = new PIXI.Text(
            'Hello Pixi!',
            new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: 36,
                fill: 0xffffff,
            })
        );

        text.x = 100;
        text.y = 100;

        this.app.stage.addChild(text);
    }

    destroy() {
        this.app.destroy(true, { children: true });
    }
}
