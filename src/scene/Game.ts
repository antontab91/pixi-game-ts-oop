import PixiGame from 'core/PixiGame';
import { Hero, Platform } from 'entities';
import { AABBCheckInput } from 'types/game';

export class Game {
    private hero!: Hero;
    private platform!: Platform;
    constructor(private pixiApp: PixiGame) {}

    public init() {
        this.hero = new Hero();
        this.hero.x = 200;
        this.hero.y = 200;
        this.pixiApp.addToStage(this.hero);

        this.platform = new Platform();
        this.platform.x = 100;
        this.platform.y = 500;
        this.pixiApp.addToStage(this.platform);
    }

    public update() {
        const prevPoint = {
            x: this.hero.x,
            y: this.hero.y,
        };

        this.hero.update();
        if (this.isCheckAABB({ entity: this.hero, area: this.platform })) {
            this.hero.y = prevPoint.y;
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
