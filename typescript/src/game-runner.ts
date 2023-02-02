import {Game} from './game';

export class GameRunner {
    public static main(): void {
        const game = new Game();
        this.testAdd(game);
        game.add("Chet");
        game.add("Pat");
        game.add("Sue");

        let notAWinner;
        do {
            game.roll(Math.floor(Math.random() * 6) + 1);

            if (Math.floor(Math.random() * 10) == 7) {
                notAWinner = game.wrongAnswer();
            } else {
                notAWinner = game.wasCorrectlyAnswered();
            }

        } while (notAWinner);
    }

    public static testAdd(game: Game): void {
        if (game.players.length != 0) {
            throw Error("Bad value players");
        }
        if (game.places.length != 0) {
            throw Error("Bad value players");
        }
        if (game.purses.length != 0) {
            throw Error("Bad value players");
        }

        game.add("rodrigolo");

        if (game.players.length != 1) {
            throw Error("Bad value players");
        }
        if (game.places.length != 1) {
            throw Error("Bad value players");
        }
        if (game.purses.length != 1) {
            throw Error("Bad value players");
        }
    }
}

GameRunner.main();
