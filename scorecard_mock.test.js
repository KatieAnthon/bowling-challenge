const ScoreCard = require('./scorecard');
const Frame = require('./frame');
jest.mock('./frame');

describe('returns total score from game', () => {
    beforeEach(() => {
        Frame.mockClear();
    });

    it('returns total score from frame =[]', () =>{
        const scorecard = new ScoreCard()
        expect(scorecard.TotalGameScore()).toEqual(0)

    });

    it('returns total score from frame', () =>{
        const mockFrame = new Frame()
        mockFrame.FrameRoll.mockReturnValue(7);

        const scorecard = new ScoreCard()
        scorecard.addScore(mockFrame)
        expect(scorecard.TotalGameScore()).toEqual(7)

    });

    it('it adds the final value from round 10', () =>{

        const mockFrame1 = new Frame()
        const mockFrame2 = new Frame()
        const mockFrame3 = new Frame()
        const mockFrame4 = new Frame()
        const mockFrame5 = new Frame()
        const mockFrame6 = new Frame()
        const mockFrame7= new Frame()
        const mockFrame8 = new Frame()
        const mockFrame9 = new Frame()
        const mockFrame10 = new Frame()

        mockFrame1.FrameRoll.mockReturnValue(7);
        mockFrame2.FrameRoll.mockReturnValue(7);
        mockFrame3.FrameRoll.mockReturnValue(7);
        mockFrame4.FrameRoll.mockReturnValue(7);
        mockFrame5.FrameRoll.mockReturnValue(7);
        mockFrame6.FrameRoll.mockReturnValue(7);
        mockFrame7.FrameRoll.mockReturnValue(7);
        mockFrame8.FrameRoll.mockReturnValue(7);
        mockFrame9.FrameRoll.mockReturnValue(7);
        mockFrame10.FrameRollFinal.mockReturnValue(30);

        const scorecard = new ScoreCard()

        scorecard.addScore(mockFrame1);
        scorecard.addScore(mockFrame2);
        scorecard.addScore(mockFrame3);
        scorecard.addScore(mockFrame4);
        scorecard.addScore(mockFrame5);
        scorecard.addScore(mockFrame6);
        scorecard.addScore(mockFrame7);
        scorecard.addScore(mockFrame8);
        scorecard.addScore(mockFrame9);
        scorecard.addScore(mockFrame10);
        expect(scorecard.TotalGameScore()).toEqual(113)

    });

    it('it tells player to reset', () => {
        const mockFrame1 = new Frame()
        const mockFrame2 = new Frame()
        const mockFrame3 = new Frame()
        const mockFrame4 = new Frame()
        const mockFrame5 = new Frame()
        const mockFrame6 = new Frame()
        const mockFrame7= new Frame()
        const mockFrame8 = new Frame()
        const mockFrame9 = new Frame()
        const mockFrame10 = new Frame()
        const mockFrame11 = new Frame()

        mockFrame1.FrameRoll.mockReturnValue(7);
        mockFrame2.FrameRoll.mockReturnValue(7);
        mockFrame3.FrameRoll.mockReturnValue(7);
        mockFrame4.FrameRoll.mockReturnValue(7);
        mockFrame5.FrameRoll.mockReturnValue(7);
        mockFrame6.FrameRoll.mockReturnValue(7);
        mockFrame7.FrameRoll.mockReturnValue(7);
        mockFrame8.FrameRoll.mockReturnValue(7);
        mockFrame9.FrameRoll.mockReturnValue(7);
        mockFrame10.FrameRollFinal.mockReturnValue(30);
        mockFrame11.FrameRoll.mockReturnValue(7);

        const scorecard = new ScoreCard()
        scorecard.addScore(mockFrame1)
        scorecard.addScore(mockFrame2)
        scorecard.addScore(mockFrame3)
        scorecard.addScore(mockFrame4)
        scorecard.addScore(mockFrame5)
        scorecard.addScore(mockFrame6)
        scorecard.addScore(mockFrame7)
        scorecard.addScore(mockFrame8)
        scorecard.addScore(mockFrame9)
        scorecard.addScore(mockFrame10)
        scorecard.addScore(mockFrame11)


        expect(scorecard.addScore()).toEqual("Reset the game to play again!")
    });

    

    
    it('it adds the bonus points to the game', () =>{
        const mockFrame1 = new Frame()
        const mockFrame2 = new Frame()
        const mockFrame3 = new Frame()

        mockFrame1.FrameRoll.mockReturnValue(10);
        mockFrame1.FrameIsStrike.mockReturnValue(true);

        mockFrame2.FrameRoll.mockReturnValue(7);
        mockFrame2.FrameIsStrike.mockReturnValue(false);

        mockFrame3.FrameRoll.mockReturnValue(7);
        mockFrame3.FrameIsStrike.mockReturnValue(false);

        const scorecard = new ScoreCard()
        scorecard.addScore(mockFrame1)
        scorecard.addScore(mockFrame2)
        scorecard.addScore(mockFrame3)
        
        expect(scorecard.TotalGameScore()).toEqual(31)
    });

    it('Perfect Game works', () => {

        const mockFrame1 = new Frame()
        mockFrame1.FrameIsStrike.mockReturnValue(true);
        mockFrame1.FrameRoll.mockReturnValue(10);
        
        const mockFrame2 = new Frame()
        mockFrame2.FrameIsStrike.mockReturnValue(true);
        mockFrame2.FrameRoll.mockReturnValue(10);
        
        const mockFrame3 = new Frame()
        mockFrame3.FrameIsStrike.mockReturnValue(true);
        mockFrame3.FrameRoll.mockReturnValue(10);
        
        const mockFrame4 = new Frame()
        mockFrame4.FrameIsStrike.mockReturnValue(true);
        mockFrame4.FrameRoll.mockReturnValue(10);
        
        const mockFrame5 = new Frame()
        mockFrame5.FrameIsStrike.mockReturnValue(true);
        mockFrame5.FrameRoll.mockReturnValue(10);
        
        const mockFrame6 = new Frame()
        mockFrame6.FrameIsStrike.mockReturnValue(true);
        mockFrame6.FrameRoll.mockReturnValue(10);
        
        const mockFrame7= new Frame()
        mockFrame7.FrameIsStrike.mockReturnValue(true);
        mockFrame7.FrameRoll.mockReturnValue(10);
        
        const mockFrame8 = new Frame()
        mockFrame8.FrameIsStrike.mockReturnValue(true);
        mockFrame8.FrameRoll.mockReturnValue(10);
        
        const mockFrame9 = new Frame()
        mockFrame9.FrameIsStrike.mockReturnValue(true);
        mockFrame9.FrameRoll.mockReturnValue(10);
        
        const mockFrame10 = new Frame()
        mockFrame10.FrameIsStrike.mockReturnValue(true);
        mockFrame10.FrameRollFinal.mockReturnValue(30);
        

        const scorecard = new ScoreCard()
        scorecard.addScore(mockFrame1)
        scorecard.addScore(mockFrame2)
        scorecard.addScore(mockFrame3)
        scorecard.addScore(mockFrame4)
        scorecard.addScore(mockFrame5)
        scorecard.addScore(mockFrame6)
        scorecard.addScore(mockFrame7)
        scorecard.addScore(mockFrame8)
        scorecard.addScore(mockFrame9)
        scorecard.addScore(mockFrame10)


        expect(scorecard.TotalGameScore()).toEqual("Wow a score of 300! Perfect Game!")
    });


});

