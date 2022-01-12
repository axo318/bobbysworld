function Informer(dimX,dimY,sketch){

	this.sketch = sketch;
	this.t = []
	this.s = []
	this.t[0] = "Rules:"
	this.s[0] = "   - Up arrow - move up;             Down arrow - move down;"
	this.s[1] = "   - Right arrow - move right;       Left arrow - move left;"
	//this.s[2] = "   - "
	//this.s[3] = "   - "
	this.s[2] = "   - Spacebar - use one pickaxe;"
	this.s[3] = "   - Go in direction of a shop - Buy a pickaxe for 5 coins;"
	this.s[4] = "   - Shift key - show the whole map of visited nodes;"
	this.s[5] = "   - Press M to mute"
	this.s[6] = "   - Press P to pause"

	this.t[1] = "Important Notes:"
	this.s[7] = "   - Pickaxe - can be used to break walls in front of you;"
	this.s[8] = "   - You die when an enemy comes closest to you;"
	this.s[9] = "   - You cannot kill enemies;"

	this.t[2]  = "Graphics:"
	this.s[10]  = "   - Your character is represented by the blue arrow;"
	this.s[11] = "   - Your enemies are represented by red circles;"
	this.s[12] = "   - Walls are coloured in grey;"
	this.s[13] = "   - Coins are yellow circles on the road;"
	this.s[14] = "   - Shops are coloured in green;"
	this.s[15] = "   - The end point is coloured in purple;"
	this.s[16] = "   - Above the maze, you have a loading bar:\n     * showing how many levels you have completed (in green),\n     * how many levels you still have to complete (in pink),\n     * the current level you are on (in blue);"
	this.s[17] = "   - In the top right corner, it shows the number of coins collected,\n the elapsed time and the number of owned pickaxes."
	this.s[18] = "   - You are ranked based on time;"



	this.display = function(){
		var x = 0;
		var y = 10;
		this.sketch.fill(255);
		this.sketch.text(this.s[18], x, y, x+this.dimX-20, y+20);
		y+=20;
		this.sketch.noFill();
		for(i=0;i<3;i++){
			var stj, endj;
			if(i==0) {stj=0; endj=7;}
			else if(i==1) {stj=7; endj=10;}
			else {stj=10; endj = 18;}
			this.sketch.fill(255);
			for(j=stj;j<endj;j++)
			{
				if(j==0){
					this.sketch.text(this.s[j],x,y,x+this.dimX-20, y+17);
					y+=17;
				} else
				if(j<16){
					this.sketch.text(this.s[j],x,y,x+this.dimX-20, y+17);
					y+=17;
				} else 
				if(j==17){
					this.sketch.text(this.s[j],x,y,x+this.dimX-20, y+40);
					y+=40;
				} else{
					this.sketch.text(this.s[j],x,y,x+this.dimX-20, y+63);
					y+=60;
				}
			}
			this.sketch.noFill();
		}
	}
}