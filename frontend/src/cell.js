function Coin(x, y, resolution, sketch) {
  this.x = x;
  this.y = y;
  this.radius = resolution / 2;
  this.display = function() {
    sketch.fill(255, 255, 0);
    sketch.circle(x, y, this.radius);
    sketch.fill(0, 0, 0);
  }
}

function Shop(x, y, res, sketch) {
  this.x = x;
  this.y = y;
  this.resolution = res;
  this.display = function() {
    sketch.fill(0, 100, 0);
    sketch.rect(this.x, this.y, this.resolution, this.resolution);
    sketch.fill(0, 0, 0);
  }
}

function End(x, y, res, sketch) {
  this.x = x;
  this.y = y;
  this.resolution = res;
  this.display = function() {
    sketch.fill(139, 0, 139);
    sketch.rect(this.x, this.y, this.resolution, this.resolution);
    sketch.fill(0, 0, 0);
  }
}

function Enemy(x, y, res, sketch) {
  this.x = x;
  this.y = y;
  this.resolution = res;
  this.display = function() {
    sketch.fill(255, 0, 0);
    sketch.circle(this.x + resolution / 2, this.y + resolution / 2, this.resolution / 5 * 4);
    sketch.fill(0, 0, 0);
  }
}

function Road(x, y, res, sketch, type) {
  this.x = x;
  this.y = y;
  this.resolution = res;
  this.display = function() {
    sketch.fill(170, 170, 170);
    sketch.rect(this.x, this.y, this.resolution, this.resolution);
    sketch.fill(255, 255, 255);
    switch (type) {
      case 1:
        var width = this.resolution * 0.3;
        var height = this.resolution * 0.15;
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.1, height, width);
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.9 - width, height, width);
        break;
      case 2:
        var width = this.resolution * 0.3;
        var height = this.resolution * 0.15;
        sketch.rect(this.x + this.resolution * 0.1, this.y + (this.resolution - height) / 2, width, height);
        sketch.rect(this.x + this.resolution * 0.9 - width, this.y + (this.resolution - height) / 2, width, height);
        break;
      case 3:
        var width = this.resolution * 0.45;
        var height = this.resolution * 0.15;
        sketch.rect(this.x + this.resolution * 0.9 - width, this.y + (this.resolution - height) / 2, width, height);
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.9 - width, height, width);
        break;
      case 4:
        var width = this.resolution * 0.45;
        var height = this.resolution * 0.15;
        sketch.rect(this.x + this.resolution * 0.1, this.y + (this.resolution - height) / 2, width, height);
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.9 - width, height, width);
        break;
      case 5:
        var width = this.resolution * 0.45;
        var height = this.resolution * 0.15;
        sketch.rect(this.x + this.resolution * 0.1, this.y + (this.resolution - height) / 2, width, height);
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.1, height, width);
        break;
      case 6:
        var width = this.resolution * 0.45;
        var height = this.resolution * 0.15;
        sketch.rect(this.x + this.resolution * 0.9 - width, this.y + (this.resolution - height) / 2, width, height);
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.1, height, width);
        break;
      case 7:
        var width = this.resolution * 0.45;
        var height = this.resolution * 0.15;
        sketch.rect(this.x + this.resolution * 0.1, this.y + (this.resolution - height) / 2, width, height);
        sketch.rect(this.x + this.resolution * 0.9 - width, this.y + (this.resolution - height) / 2, width, height);
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.9 - width, height, width);
        break;
      case 8:
        var width = this.resolution * 0.45;
        var height = this.resolution * 0.15;
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.1, height, width);
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.9 - width, height, width);
        sketch.rect(this.x + this.resolution * 0.1, this.y + (this.resolution - height) / 2, width, height);
        break;
      case 9:
        var width = this.resolution * 0.45;
        var height = this.resolution * 0.15;
        sketch.rect(this.x + this.resolution * 0.1, this.y + (this.resolution - height) / 2, width, height);
        sketch.rect(this.x + this.resolution * 0.9 - width, this.y + (this.resolution - height) / 2, width, height);
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.1, height, width);
        break;
      case 10:
        var width = this.resolution * 0.45;
        var height = this.resolution * 0.15;
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.1, height, width);
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.9 - width, height, width);
        sketch.rect(this.x + this.resolution * 0.9 - width, this.y + (this.resolution - height) / 2, width, height);
        break;
      case 11:
        var width = this.resolution * 0.45;
        var height = this.resolution * 0.15;
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.1, height, width);
        sketch.rect(this.x + (this.resolution - height) / 2, this.y + this.resolution * 0.9 - width, height, width);
        sketch.rect(this.x + this.resolution * 0.1, this.y + (this.resolution - height) / 2, width, height);
        sketch.rect(this.x + this.resolution * 0.9 - width, this.y + (this.resolution - height) / 2, width, height);
        break;
      case 12:
        // nothing
        break;

    }
    sketch.fill(0, 0, 0);
  }
}

function Cell(x,y,res,is_obstacle, has_coin, has_shop, is_end, is_start, is_visible, sketch, type, is_enemy){
  // initioalize variables
  this.resolution = res;
  this.pos_x = x*this.resolution;
  this.pos_y = y*this.resolution;
  this.is_obstacle = is_obstacle; // True or False
  this.has_coin = has_coin;
  this.has_shop = has_shop;
  this.is_end = is_end;
  this.is_start = is_start;
  this.sketch = sketch;
  this.is_visible = is_visible;
  this.is_enemy = is_enemy;

  // console.log(this.pos_x, this.pos_y, this.resolution,this.resolution)
  // make the square
  this.sketch.noStroke();
  if (this.is_visible == 0) {
    this.sketch.fill(0, 0, 0);
    this.sketch.rect(this.pos_x,this.pos_y,this.pos_x + this.resolution,this.pos_y + this.resolution);
  } else if (this.is_visible == 2) {
    this.sketch.fill(119,136,153);
    this.sketch.rect(this.pos_x,this.pos_y,this.pos_x + this.resolution,this.pos_y + this.resolution);
  } else {
    if (this.is_obstacle) { // obstacle color
      this.sketch.fill(100, 100, 100);
    } else {
      road = new Road(this.pos_x, this.pos_y, this.resolution, sketch, type);
      road.display();
    }

    if (this.has_coin) {
      coin = new Coin(this.pos_x + this.resolution / 2, this.pos_y + this.resolution / 2, resolution, sketch);
      coin.display();
    } else if (this.is_end) {
      end = new End(this.pos_x, this.pos_y, this.resolution, sketch);
      end.display();
    } else if (this.has_shop) {
      shop = new Shop(this.pos_x, this.pos_y, this.resolution, sketch);
      shop.display();
    } else if (this.is_enemy) {
      enemy = new Enemy(this.pos_x, this.pos_y, this.resolution, sketch);
      enemy.display();
    }
  }
  this.sketch.stroke(0, 0, 0);
  this.sketch.noFill();
}