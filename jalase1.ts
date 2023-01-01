class stopWatch{
private swStart:number   =0;
private swStop :number   =0;
private total:number     =0;
private startTime:number =0;
private stopTime:number  =0;
    public start(){
        if(this.swStart!=0){console.log("its alredy start")}
        else{ this.swStart=1;this.startTime=Date.now();}
   }
       
   
   public  stop(){
   if(this.swStart==0){console.log("its didnt start")} 
   else {this.total=this.startTime-this.stopTime;console.log(this.total)}
   }
   reset(){
    this.total=0;
   this.startTime=0;
    this.stopTime =0;
   }
}