import PixiGame from 'core/PixiGame';
import { Game } from 'scene/Game';

const container = document.body;

const pixiApp = new PixiGame(container);
const game = new Game(pixiApp);
game.init();
game.update();

pixiApp.startTicker(game.update.bind(game));
