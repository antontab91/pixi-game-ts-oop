import { Hero, Platform } from 'Entities';

import PixiGame from './PixiGame';

export class Game {
    constructor(private pixiApp: PixiGame) {}

    init() {
        const hero = new Hero();
        hero.x = 200;
        hero.y = 200;
        this.pixiApp.addToStage(hero);

        const platform = new Platform();
        platform.x = 100;
        platform.y = 300;
        this.pixiApp.addToStage(platform);
    }
}
