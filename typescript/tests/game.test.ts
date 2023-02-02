import {expect} from 'chai';
import {describe, it} from 'mocha';
import {GameRunner} from '../src/game-runner';
import {Game} from "../src/game";

describe('The test environment', () => {
    describe('Add', () => {
        it("add a player", () => {
            const game = new Game();

            expect(game.players.length).to.equal(0);
            expect(game.places.length).to.equal(0);
            expect(game.purses.length).to.equal(0);

            const firstPlayerName ="rodrigolo";
            game.add(firstPlayerName);

            expect(game.players.length).to.equal(1);
            expect(game.players).to.deep.equal([firstPlayerName]);

            expect(game.places.length).to.equal(2);
            expect(game.places[1]).to.deep.equal(0);

            expect(game.purses.length).to.equal(2);
            expect(game.purses[1]).to.deep.equal(0);

            expect(game.inPenaltyBox.length).to.equal(2);
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
