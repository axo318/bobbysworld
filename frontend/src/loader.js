

function Loader(level,dimX,dimY,sketch) {
	this.dimX = dimX;
	this.dimY = dimY;
	this.sketch = sketch
	for(i=0;i<5;i++){
		this.sketch.rect(i*dimX,dimY/4,dimY/2,dimY/2);
	}

	this.display_loader = function(level){
		for(i=0;i<5;i++){
			if(level-1>i){
				this.sketch.fill(100,255,150,150);
			} else if (level-1==i){
				this.sketch.fill(150,150,255,150);
			} else {
				this.sketch.fill(255,100,150,150);
			}
			
			this.sketch.rect(i*dimX/5+15,dimY/4,dimY/2,dimY/2);
			this.sketch.fill(0,0,0);
			this.sketch.textSize(20);
			this.sketch.text("L"+(i+1),i*dimX/5+24,dimY/2+5);
		}		
	}

}