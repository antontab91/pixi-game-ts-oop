import { Container, Graphics } from 'pixi.js';

export default class Hero extends Container {
    private readonly GRAVITY_FORCE = 1;

    constructor() {
        super();

        const view = new Graphics();
        view.lineStyle(1, 0xff0000);
        view.drawRect(0, 0, 20, 60);
        this.addChild(view);
    }

    public update(): void {
        this.y += this.GRAVITY_FORCE;
    }
}
