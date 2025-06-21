import { Hero, Platform } from 'components';
import PixiGame from 'core/PixiGame';
import { InputController } from 'input';
import { AABBCheckInput } from 'types/game';

export class Game {
    private hero!: Hero;
    private inputController!: InputController;
    private platforms: Platform[] = [];

    constructor(private pixiApp: PixiGame) {}

    init() {
        this.hero = new Hero();
        this.inputController = new InputController(this.hero);
        // унаследываны от класса контейнер из Пикси
        this.hero.x = 100;
        this.hero.y = 100;
        this.pixiApp.addToStage(this.hero);
        this.createPlatforms();
    }

    private createPlatforms() {
        const positions = [
            { x: 50, y: 400 },
            { x: 200, y: 450 },
            { x: 400, y: 400 },
        ];
        for (const position of positions) {
            const platform = new Platform();
            platform.x = position.x;
            platform.y = position.y;
            this.pixiApp.addToStage(platform);
            this.platforms.push(platform);
        }
    }

    update() {
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

    isCheckAABB({ entity, area }: AABBCheckInput): boolean {
        return (
            entity.x < area.x + area.width &&
            entity.x + entity.width > area.x &&
            entity.y < area.y + area.height &&
            entity.y + entity.height > area.y
        );
    }
}
