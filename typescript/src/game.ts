export class Game {

    //TODO : Put it private
    public players: Array<string> = [];
    public places: Array<number> = [];
    public purses: Array<number> = [];
    public inPenaltyBox: Array<boolean> = [];

    private currentPlayer: number = 0;
    private isGettingOutOfPenaltyBox: boolean = false;

    private popQuestions: Array<string> = [];
    private scienceQuestions: Array<string> = [];
    private sportsQuestions: Array<string> = [];
    private rockQuestions: Array<string> = [];

    constructor() {
        for (let i = 0; i < 50; i++) {
            this.popQuestions.push("Pop Question " + i);
            this.scienceQuestions.push("Science Question " + i);
            this.sportsQuestions.push("Sports Question " + i);
            this.rockQuestions.push(this.createRockQuestion(i));
          }
    }

    public add(name: string) {
        this.players.push(name);
        this.places[this.numberOfPlayers()] = 0;
        this.purses[this.numberOfPlayers()] = 0;
        this.inPenaltyBox[this.numberOfPlayers()] = false;

        console.log(name + " was added");
        console.log("They are player number " + this.numberOfPlayers());
    }

    public wrongAnswer(): boolean {
        console.log('Question was incorrectly answered');
        console.log(this.players[this.currentPlayer] + " was sent to the penalty box");
        this.inPenaltyBox[this.currentPlayer] = true;

        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length)
            this.currentPlayer = 0;
        return true;
    }

    public wasCorrectlyAnswered(): boolean {
        if (this.inPenaltyBox[this.currentPlayer]) {
            if (this.isGettingOutOfPenaltyBox) {
                console.log('Answer was correct!!!!');
                this.purses[this.currentPlayer] += 1;
                console.log(this.players[this.currentPlayer] + " now has " +
                    this.purses[this.currentPlayer] + " Gold Coins.");

                var winner = this.didPlayerWin();
                this.currentPlayer += 1;
                if (this.currentPlayer == this.players.length)
                    this.currentPlayer = 0;

                return winner;
            } else {
                this.currentPlayer += 1;
                if (this.currentPlayer == this.players.length)
                    this.currentPlayer = 0;
                return true;
            }


        } else {

            console.log("Answer was corrent!!!!");

            this.purses[this.currentPlayer] += 1;
            console.log(this.players[this.currentPlayer] + " now has " +
                this.purses[this.currentPlayer] + " Gold Coins.");

            var winner = this.didPlayerWin();

            this.currentPlayer += 1;
            if (this.currentPlayer == this.players.length)
                this.currentPlayer = 0;

            return winner;
        }
    }

    public roll(roll: number) {
        console.log(this.players[this.currentPlayer] + " is the current player");
        console.log("They have rolled a " + roll);

        if (this.inPenaltyBox[this.currentPlayer]) {
            this.isGettingOutOfPenaltyBox = (roll % 2 !== 0);
        }

        if (! this.isGettingOutOfPenaltyBox) {
            console.log(this.players[this.currentPlayer] + " is not getting out of the penalty box");
            return;
        }

        this.movePlayer(this.currentPlayer, roll);

        console.log(this.players[this.currentPlayer] + "'s new location is " + this.places[this.currentPlayer]);
        console.log("The category is " + this.currentCategory());
        this.askQuestion();

    }

    private movePlayer(playerIndex: number, roll: number) {
        this.places[playerIndex] += (roll % 11);
        console.log(this.players[this.currentPlayer] + "'s new location is " + this.places[this.currentPlayer]);
    }

    private createRockQuestion(index: number): string {
        return "Rock Question " + index;
    }

    private numberOfPlayers(): number {
        return this.players.length;
    }

    private askQuestion(): void {
        if (this.currentCategory() == 'Pop')
            console.log(this.popQuestions.shift());
        if (this.currentCategory() == 'Science')
            console.log(this.scienceQuestions.shift());
        if (this.currentCategory() == 'Sports')
            console.log(this.sportsQuestions.shift());
        if (this.currentCategory() == 'Rock')
            console.log(this.rockQuestions.shift());
    }

    private currentCategory(): string {
        if (this.places[this.currentPlayer] in [0, 4, 8] )
            return 'Pop';

        if (this.places[this.currentPlayer] in [1, 5, 9] )
            return 'Science';

        if (this.places[this.currentPlayer] in [2, 6, 10] )
            return 'Sports';

        return 'Rock';
    }

    private didPlayerWin(): boolean {
        return !(this.purses[this.currentPlayer] == 6)
    }
}
