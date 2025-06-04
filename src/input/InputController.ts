import { Hero } from 'components';

export default class InputController {
    constructor(private hero: Hero) {
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    private handleKeyDown(event: KeyboardEvent): void {
        switch (event.code) {
            case 'ArrowLeft':
                this.hero.startLeftMove();
                break;

            case 'ArrowRight':
                this.hero.startRightMove();
                break;
        }
    }

    private handleKeyUp(event: KeyboardEvent): void {
        switch (event.code) {
            case 'ArrowLeft':
                this.hero.stopLeftMove();
                break;

            case 'ArrowRight':
                this.hero.stopRightMove();
                break;
        }
    }
}
