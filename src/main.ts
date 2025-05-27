import { Game } from './Game';
import PixiGame from './PixiGame';

const container = document.body;

const engine = new PixiGame(container);
const game = new Game(engine);
game.init();
