class stopWatch{
    private swStart:number   =0;
    private swStop :number   =0;
    private total:number     =0;
    private startTime:number =0;
    private stopTime:number  =0;

    public getTotal(){
        return this.total;
    }
        public start(){
            if(this.swStart!=0){new console.error("its already started");
            }
            else{ this.swStart=1;this.startTime=Date.now();}
       }
       public  stop(){
       if(this.swStart==0){new console.error("its didnt started")} 
       else {this.total=Date.now() -this.startTime; return this.getTotal()}
       }
     public reset(){
        this.total=0;
       this.startTime=0;
        this.stopTime =0;
       }
       public render(){
           var min = document.getElementById( 'minutes' );
           var sec = document.getElementById( 'seconds' );
        var minutes = 0;
		var seconds = 0;
		var Interval;
        function start() {
			clearInterval( Interval );
			Interval = setInterval( startTimer, 999 );
		}
        function stop() {
			clearInterval( Interval );
		}
        function reset() {
			clearInterval( Interval );
			sec.innerHTML = '00';
			min.innerHTML = '00';
			minutes = 0;
			seconds = 0;
		}
        function startTimer() {
			seconds++;

			if( seconds < 9 ) {
				sec.innerHTML = "0" + seconds;
			}

			if( seconds > 9 ) {
				sec.innerHTML = toString()+seconds;
			}

			if ( seconds > 59 ) {
				minutes++;
				min.innerHTML = "0" + minutes;
				seconds = 0;
			}

			if ( minutes > 9 ) {
				min.innerHTML =toString()+minutes;
			}

		}

       }
    }