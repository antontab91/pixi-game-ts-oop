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

    private directionContext = {
        left: 0,
        right: 0,
    };

    constructor() {
        super();

        const view = new Graphics();
        view.lineStyle(1, 0xff0000);
        view.drawRect(0, 0, 20, 60);
        this.addChild(view);
    }

    update(): void {
        this.velocityX = this.movement.x * this.SPEED;
        this.x += this.velocityX;

        this.velocityY += this.GRAVITY_FORCE;
        this.y += this.velocityY;
    }

    stay(): void {
        this.velocityY = 0;
    }

    startLeftMove(): void {
        this.directionContext.left = -1;

        if (this.directionContext.right > 0) {
            this.movement.x = 0;
            return;
        }

        this.movement.x = -1;
    }

    startRightMove(): void {
        this.directionContext.right = 1;

        if (this.directionContext.left < 0) {
            this.movement.x = 0;
            return;
        }
        this.movement.x = 1;
    }

    stop(): void {
        this.movement.x = 0;
    }

    stopLeftMove(): void {
        this.directionContext.left = 0;
        this.movement.x = this.directionContext.right;
    }
    stopRightMove(): void {
        this.directionContext.right = 0;
        this.movement.x = this.directionContext.left;
    }
}
