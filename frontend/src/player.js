

function Player(x,y, dimension, resolution, sketch){

  // actual pixel position
  this.sketch = sketch;
  this.pos_x = x;
  this.pos_y = y;
  this.o_pos_x = x;
  this.o_pos_y = y;
  this.o_pos_xx = x;
  this.o_pos_yy = y;
  this.center = false;
  this.dimension = dimension;
  this.resolution = resolution;
  //movement
  this.vel = 0;
  this.orientation = 4;
  // triangle positions default
  this.small = this.resolution / 4 / 1.5;
  this.big = this.resolution / 3 / 1.5;
  this.x1 = this.pos_x-this.small;
  this.y1 = this.pos_y+this.big;
  this.x2 = this.pos_x;
  this.y2 = this.pos_y-this.big;
  this.x3 = this.pos_x+this.small;
  this.y3 = this.pos_y+this.big;

  this.pos_xx = 0;
  this.pos_yy = 0;

  // coin balance
  this.balance = 0;

  // pickaxe count
  this.pickaxes = 0;
  
  // update movement
  this.update_movement = function(type){
      this.set_oriention(type);
      this._move(type);
  }

  // check_orientation before movement
  this.set_oriention = function(type){
    if(type==null){
        this.orientation = 1;
    }else {
      this.orientation = type;
    }
  }

  this.toggleCenter = function(resolution) {
    if(this.center) {
      this.pos_xx = this.o_pos_xx;
      this.pos_yy = this.o_pos_yy;
      this.pos_x = this.o_pos_x;
      this.pos_y = this.o_pos_y;
    }
    else {
      this.o_pos_xx = this.pos_xx;
      this.o_pos_yy = this.pos_yy;
      this.pos_x = this.pos_xx * resolution + resolution / 2;
      this.pos_y = this.pos_yy * resolution + resolution / 2;
      this.pos_xx = (dimension - 1) / 2;
      this.pos_yy = (dimension - 1) / 2;

    }
    this.small = resolution / 4 / 1.5;
    this.big = resolution / 2 / 1.5;
    this.center = !this.center;
  }

  // draw player
  this.draw_player = function(){
    switch(this.orientation){
      case 1: // facing up
        this.x1 = this.pos_x-this.small;
        this.y1 = this.pos_y+this.big;
        this.x2 = this.pos_x;
        this.y2 = this.pos_y-this.big;
        this.x3 = this.pos_x+this.small;
        this.y3 = this.pos_y+this.big;
        break;
      case 2: // facing down
        this.x1 = this.pos_x-this.small;
        this.y1 = this.pos_y-this.big;
        this.x2 = this.pos_x;
        this.y2 = this.pos_y+this.big;
        this.x3 = this.pos_x+this.small;
        this.y3 = this.pos_y-this.big;
        break;
      case 3: // facing right
        this.x1 = this.pos_x-this.big;
        this.y1 = this.pos_y+this.small;
        this.x2 = this.pos_x-this.big;
        this.y2 = this.pos_y-this.small;
        this.x3 = this.pos_x+this.big;
        this.y3 = this.pos_y;
        break;
      case 4: // facing left
        this.x1 = this.pos_x-this.big;
        this.y1 = this.pos_y;
        this.x2 = this.pos_x+this.big;
        this.y2 = this.pos_y-this.small;
        this.x3 = this.pos_x+this.big;
        this.y3 = this.pos_y+this.small;
        break;
      default: // facing up
      this.x1 = this.pos_x-this.small;
      this.y1 = this.pos_y+this.big;
      this.x2 = this.pos_x;
      this.y2 = this.pos_y-this.big;
      this.x3 = this.pos_x+this.small;
      this.y3 = this.pos_y+this.big;
      break;
    }
    this.sketch.fill(255,50,50,150);
    this.sketch.triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
    this.sketch.fill(0,0,0);
  }

  // displaying the player
  this.show = function(){
    this.draw_player();
  };

}
