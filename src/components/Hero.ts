import { Container, Graphics } from 'pixi.js';

export default class Hero extends Container {
    private readonly GRAVITY_FORCE = 0.1;
    private velocityX = 0;
    private velocityY = 0;

    constructor() {
        super();

        const view = new Graphics();
        view.lineStyle(1, 0xff0000);
        view.drawRect(0, 0, 20, 60);
        this.addChild(view);
    }

    public update(): void {
        this.velocityY += this.GRAVITY_FORCE;
        this.y += this.velocityY;
    }

    public stay(): void {
        this.velocityY = 0;
    }
}
