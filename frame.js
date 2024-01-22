class Frame{
    constructor(a,b,c=0){
        this.a = a;
        this.b =b;
        this.c = c;
        
    }
    FrameRoll(){
        if (this.FrameIsStrike()){
            return this.a
        }else if(this.a+this.b <= 10){
            return this.a +this.b
        }else{
            return "Frame is not Valid"
        };
    }

    FrameRollFinal(){
        if(this.a +this.b+this.c <= 30){
            return this.a +this.b+this.c
        }else{
            return "Frame is not Valid"
        };
    }

    FrameIsStrike(){
        return this.a === 10;
    }

    FrameIsSpare(){
        return this.a + this.b === 10;
    }


}

module.exports = Frame;