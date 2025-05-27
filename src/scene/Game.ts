import { Hero, Platform } from 'components';
import PixiGame from 'core/PixiGame';
import { AABBCheckInput } from 'types/game';

export class Game {
    private hero!: Hero;
    private platforms: Platform[] = [];

    constructor(private pixiApp: PixiGame) {}

    public init() {
        this.hero = new Hero();
        this.hero.x = 100;
        this.hero.y = 100;
        this.pixiApp.addToStage(this.hero);

        const platform1 = new Platform();
        platform1.x = 50;
        platform1.y = 400;
        this.pixiApp.addToStage(platform1);
        this.platforms.push(platform1);

        const platform2 = new Platform();
        platform2.x = 200;
        platform2.y = 450;
        this.pixiApp.addToStage(platform2);
        this.platforms.push(platform2);

        const platform3 = new Platform();
        platform3.x = 400;
        platform3.y = 400;
        this.pixiApp.addToStage(platform3);
        this.platforms.push(platform3);
    }
    public update() {
        const { x: prevX, y: prevY } = this.hero;
        this.hero.update();
        for (const platform of this.platforms) {
            if (!this.isCheckAABB({ entity: this.hero, area: platform })) {
                continue;
            }
            // Есть столкновение по Y
            const currY = this.hero.y;
            this.hero.y = prevY;

            if (!this.isCheckAABB({ entity: this.hero, area: platform })) {
                this.hero.stay();
                continue;
            }

            // Есть столкновение по X
            this.hero.y = currY;
            this.hero.x = prevX;
        }
    }

    public isCheckAABB({ entity, area }: AABBCheckInput): boolean {
        return (
            entity.x < area.x + area.width &&
            entity.x + entity.width > area.x &&
            entity.y < area.y + area.height &&
            entity.y + entity.height > area.y
        );
    }
}
