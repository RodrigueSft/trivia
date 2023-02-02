import {expect} from 'chai';
import {describe, it} from 'mocha';
import {GameRunner} from '../src/game-runner';
import {Game} from "../src/game";

describe('The test environment', () => {
    describe('Add', () => {
        it("add a player", () => {
            const game = new Game();

            if (game.players.length !== 0) {
                throw Error("Bad value players");
            }
            if (game.places.length !== 0) {
                throw Error("Bad value players");
            }
            if (game.purses.length !== 0) {
                throw Error("Bad value players");
            }

            const firstPlayerName ="rodrigolo";
            game.add(firstPlayerName);

            // TODO
            if (game.players.length as number !== 1) {
                throw Error("Bad value players");
            }

            expect(game.players).to.deep.equal([firstPlayerName]);

            // TODO
            if (game.places.length as number  !== 2) {
                throw Error("Bad value places");
            }
            if (game.purses.length as number  !== 2) {
                throw Error("Bad value purses");
            }
        });
    });


    it('should pass', () => {
        expect(true).to.be.true;
    });

    it("should access game", function () {
        expect(GameRunner).to.not.be.undefined;
    });

});
