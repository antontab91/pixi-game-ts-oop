import { Container, Graphics } from 'pixi.js';

export default class Hero extends Container {
    constructor() {
        super();

        const view = new Graphics();
        view.lineStyle(1, 0xff0000);
        view.drawRect(0, 0, 20, 60);

        this.addChild(view);
    }
}
