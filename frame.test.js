const Frame = require('./frame')

describe('FrameRoll verifies roll', () => {
    it('returns true', () =>{
        const frame = new Frame(2, 3);
        expect(frame.FrameRoll()).toEqual(5)
    });

    it('returns false', () =>{
        const frame = new Frame(9, 5);
        expect(frame.FrameRoll()).toEqual("Frame is not Valid")
    });

    it('framerollFinalAllows3 less than 30', () =>{
        const frame = new Frame(10, 10, 10);
        expect(frame.FrameRollFinal()).toEqual(30)
    });

    it('framerollFinalAllows3 less than 30', () =>{
        const frame = new Frame(10, 12, 10);
        expect(frame.FrameRollFinal()).toEqual("Frame is not Valid")
    });

    it('Frame is Strike returns true if there is a strike', () =>{
        const frame = new Frame(10, 9);
        expect(frame.FrameRoll()).toEqual(10)
    });

    it('Frame is Spare', () =>{
        const frame = new Frame(5, 5);
        expect(frame.FrameIsSpare()).toEqual(true)
    });




});