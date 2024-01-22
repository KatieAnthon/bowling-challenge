class ScoreCard {
    constructor() {
        this.scores = [];
        this.counter = 1;
        this.bonus = 0;
        this.spare_bonus = 0;
    }

    addScore(round) {
        if (this.counter < 10) {
            const frameroll = round.FrameRoll()

            this.scores.push(frameroll);
            

            if (this.bonus > 0) {
                this.scores.push(frameroll);
                this.bonus--;
            }

            if (round.FrameIsStrike()) {
                this.bonus++;
            }

            if (this.spare_bonus > 0) {
                this.scores.push(round.a);
                this.spare_bonus--;
            }

            if (round.FrameIsSpare()) {
                this.spare_bonus++
            }

            console.log(`bonus count: ${this.bonus}`)

            this.counter++;
        } else if (this.counter === 10) {
            this.scores.push(round.FrameRollFinal())
            this.counter++
            if (round.FrameRollFinal() === 30){
                this.scores.push(20)
            }
        } else {
            return "Reset the game to play again!";
        }
   
    }

    TotalGameScore() {
        if (this.scores.length > 0) {
            const total_score = this.scores.reduce((total, currentValue) => total + currentValue, 0);
            if (total_score === 300) {
                return `Wow a score of ${total_score}! Perfect Game!`
            } else if (total_score === 0) {
                return "Looks like a Gutter Game!!"
            } else {
                return total_score;
            }
        } else {
            return 0;
        }
    }
}

module.exports = ScoreCard;