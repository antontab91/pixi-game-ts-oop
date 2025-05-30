import { Container, Graphics } from 'pixi.js';

export default class Hero extends Container {
    private readonly GRAVITY_FORCE = 0.1;
    private readonly SPEED = 2;
    private velocityX = 0;
    private velocityY = 0;

    private movement = {
        x: 0,
        y: 0,
    };

    constructor() {
        super();

        const view = new Graphics();
        view.lineStyle(1, 0xff0000);
        view.drawRect(0, 0, 20, 60);
        this.addChild(view);
    }

    public update(): void {
        this.velocityX = this.movement.x * this.SPEED;
        this.x += this.velocityX;

        this.velocityY += this.GRAVITY_FORCE;
        this.y += this.velocityY;
    }

    public stay(): void {
        this.velocityY = 0;
    }

    public startLeftMove() {
        this.movement.x = -1;
    }

    public startRightMove() {
        this.movement.x = 1;
    }

    public stop() {
        this.movement.x = 0;
    }
}
