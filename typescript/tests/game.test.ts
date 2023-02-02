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

            expect(game.players.length).to.deep.equal(1);
            expect(game.players).to.deep.equal([firstPlayerName]);

            expect(game.places.length).to.deep.equal(2);
            expect(game.places[1]).to.deep.equal(0);

            expect(game.purses.length).to.deep.equal(2);
            expect(game.purses[1]).to.deep.equal(0);

            expect(game.inPenaltyBox.length).to.deep.equal(2);
            expect(game.inPenaltyBox[1]).to.deep.equal(false);
        });
    });


    it('should pass', () => {
        expect(true).to.be.true;
    });

    it("should access game", function () {
        expect(GameRunner).to.not.be.undefined;
    });

});
