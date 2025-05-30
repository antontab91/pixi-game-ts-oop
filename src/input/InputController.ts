import { Hero } from 'components';

enum Direction {
    None,
    Left,
    Right,
}

export default class InputController {
    private direction: Direction = Direction.None;

    constructor(private hero: Hero) {
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    private handleKeyDown(event: KeyboardEvent) {
        switch (event.code) {
            case 'ArrowLeft':
                this.direction = Direction.Left;
                break;

            case 'ArrowRight':
                this.direction = Direction.Right;
                break;

            default:
                this.direction = Direction.None;
                break;
        }

        this.handleUpdateMovement();
    }

    private handleKeyUp(event: KeyboardEvent) {
        const isLeftUp =
            event.code === 'ArrowLeft' && this.direction === Direction.Left;
        const isRightUp =
            event.code === 'ArrowRight' && this.direction === Direction.Right;

        if (isLeftUp || isRightUp) {
            this.direction = Direction.None;
        }

        this.handleUpdateMovement();
    }

    private handleUpdateMovement() {
        switch (this.direction) {
            case Direction.Left:
                this.hero.startLeftMove();

                break;
            case Direction.Right:
                this.hero.startRightMove();

                break;

            case Direction.None:
                this.hero.stop();
                break;

            default:
                break;
        }
    }
}
