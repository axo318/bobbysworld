var level = 1;
var timer = 0;
var isPausedTime = false;
var isLoading = true;
var isReady = true;
var isPaused = true;
var isGameOver = false;
var trig_display_endpoint = 0;
var songPlaying = false;
var mute = false;


function won() {
  fetch('https://bobbysworld.online/submit', {
    method: 'POST',
    body: timer
  }).then(() => {
    window.location.href="https://bobbysworld.online/scoreboard"
  })
}

function wonKonami() {
  window.location.href="https://bobbysworld.online/konami"
}

var s1 = function (sketch) {

  let a = 0;
  visibility = 6;
  offset = 6;
  dimension = 11; // 11
  canvas_size = 400
  resolution = canvas_size / (offset * 2 + 1)
  cell_array = []
  input_array = []
  onMap = false;
  was_visited = [[]]
  cur_balance = 0;
  cur_pickaxes = 0;
  dx = [1, 0, -1, 0];
  dy = [0, 1, 0, -1];
  numEnemies = [0, 0, 1, 2, 3, 4];
  enemyPositions = [[]]
  curIndex = 0;
  haha = 0;
  enemySpeed = 40;

  setup1 = function() {

    haha = 0;
    canvas1 = sketch.createCanvas(canvas_size, canvas_size);
    canvas1.position(0, 125);
    sketch.background(100);
    generator = new Array_Generator();
    generator.generate(dimension, numEnemies[level]);
    input_array = generator.arr;
    player = new Player(canvas_size/2, canvas_size/2, dimension, resolution, sketch);
    player.pos_xx = generator.startX;
    player.pos_yy = generator.startY;
    cur_endX = generator.endX;
    cur_endY = generator.endY;
    player.balance = cur_balance;
    player.pickaxes = cur_pickaxes;
    if (window.location.pathname == "/bonus") {
      dimension = 35;
      input_array = [[]];
      for (var i = 0; i < dimension; i++) {
        input_array[i] = [];
        for (var j = 0; j < dimension; j++) {
          if (i == 0 || j == 0 || i + 1 == dimension || j + 1 == dimension) {
            input_array[i][j] = 0;
          }
          else if (Math.random() < 0.03 && i + j > 6)  {
            input_array[i][j] = 6;
            numEnemies[1]++;
          }
          else {
            input_array[i][j] = 1;
          }
        }
      }
      input_array[(dimension - 1) / 2][(dimension - 1) / 2] = 6;
      input_array[dimension - 2][dimension - 2] = 2;
      player.pos_xx = 1;
      player.pos_yy = 1;
      cur_endX = dimension - 2;
      cur_endY = dimension - 2;
    }
    console.log(input_array);

    cur_index = 0;
    for (i = 0; i < dimension; i++) {
      was_visited[i] = [];
      for (j = 0; j < dimension; j++) {
        was_visited[i][j] = 0;
        if (input_array[i][j] == 6) {
          enemyPositions[cur_index++] = [i, j];
        }
      }
    }
    was_visited[player.pos_xx][player.pos_yy] = 1;
    popup_window = new pop_up_window(canvas_size,canvas_size,sketch);
  }

  sketch.setup = function() {
    KONAMI_CODE = [38, 38, 40, 40, 37, 37, 39, 39, 66, 65];
    KONAMI_CODE_LEVEL = 0;
    song = sketch.loadSound('/bobbys-world/hackTheBurgh/theme.mp3');
    coinSound = sketch.loadSound('/bobbys-world/hackTheBurgh/coin.wav');
    finishSound = sketch.loadSound('/bobbys-world/hackTheBurgh/finish.wav');
    konami = sketch.loadSound('/bobbys-world/hackTheBurgh/konami.mp3');
    setup1();
  }



  sketch.draw = function() {
    if (isGameOver) {
      paused = true;
      sketch.background(100);
      overlay("GAME OVER", 50);
      return;
    }
    if (!isLoading && isReady) {
      sketch.background(100);
      overlay("PRESS ENTER TO START", 30);
      return;
    }
    if (!isLoading && isPaused) {
      sketch.background(100);
      overlay("PAUSED", 60);
      return;
    }
    sketch.background(100);

    x = player.pos_xx - offset;
    y = player.pos_yy - offset;

    for (i = 0; i < numEnemies[level]; i++) {
      if (enemyPositions[i][0] == player.pos_xx && enemyPositions[i][1] == player.pos_yy) {
        isGameOver = true;
        return;
      }
    }
    haha = (haha + 1) % enemySpeed;

    if (haha == 0) {
      for (i = 0; i < numEnemies[level]; i++) {
        ex = enemyPositions[i][0]
        ey = enemyPositions[i][1]

        minimum = 100000;
        ax = -1, ay = -1
        for (dir = 0; dir < 4; dir++) {
          adjX = ex + dx[dir];
          adjY = ey + dy[dir];
          if (input_array[adjX][adjY] == 1 || input_array[adjX][adjY] == 3) {
            if (Math.abs(ex - player.pos_xx) + Math.abs(ey - player.pos_yy) > 10) {
              input_array[ex][ey] = input_array[adjX][adjY];
              input_array[adjX][adjY] = 6;
              enemyPositions[i] = [adjX, adjY]
              break;
            } 
            distance = Math.abs(player.pos_xx - adjX) + Math.abs(player.pos_yy - adjY);
            if (distance < minimum) {
              minimum = distance;
              ax = adjX;
              ay = adjY;
            }
          }
        }
        if (ax != -1) {
          input_array[ex][ey] = input_array[ax][ay];
          input_array[ax][ay] = 6;
          enemyPositions[i] = [ax, ay]
        }

        if (enemyPositions[i][0] == player.pos_xx && enemyPositions[i][1] == player.pos_yy) {
          console.log("ok");
          isGameOver = true;
          return;
        }
      }
    }

    if (!onMap) {
      was_visited[player.pos_xx][player.pos_yy] = 1;
      if (input_array[player.pos_xx][player.pos_yy] == 3) {
        input_array[player.pos_xx][player.pos_yy] = 1;
        if (!mute) {
          coinSound.play();
        }
        player.balance++;
      }
      if (input_array[player.pos_xx][player.pos_yy] == 2) {
        // REACHED ENDPOINT - display image
        if (trig_display_endpoint == 0) {
          if (window.location.pathname == "/bonus") {
            wonKonami();
          }
          if (!mute) {
            finishSound.play();
          }
          trig_display_endpoint = 1;
        }

        if(trig_display_endpoint == 1) {
          isPausedTime = true;
          sketch.background(255,215,0,150);
          popup_window.display_text(level);
          return;
        }

        isPausedTime = false;
        trig_display_endpoint = 0;
        dimension += 4; //change this
        level++;
        if (level == 5) {
          songPlaying = true;
          song.loop();
        }
        if (level < 6) {
          cur_balance = player.balance;
          cur_pickaxes = player.pickaxes;
          setup1();
        } else {
          won();
          throw new Error("Something went badly wrong!");
        }
        return;
      }

      for (dir = 0; dir < 4; dir++) {
        adjX = player.pos_xx + dx[dir];
        adjY = player.pos_yy + dy[dir];
        if (adjX >= 0 && adjX < dimension && adjY >= 0 && adjY < dimension) {
          if (!isObstacle(adjX, adjY) && was_visited[adjX][adjY] == 0) {
            was_visited[adjX][adjY] = 2;
          }
        }
      }
    }

    for (var i = 0; i < offset*2 + 1; i++) {
      for (var j = 0; j < offset*2 + 1; j++) {
        xi = x + i;
        yj = y + j;
        if ((xi < 0) || (xi >= dimension) || (yj < 0) || (yj >= dimension)) {
          cell_new = Cell(i,j,resolution,true, false, false, false, false, !onMap, sketch);
        }
        else {
          var has_shop = (input_array[xi][yj] == 4);
          var has_coin = (input_array[xi][yj] == 3);
          var is_end = (input_array[xi][yj] == 2);
          var is_start = (input_array[xi][yj] == 5);
          var is_visible;
          var is_enemy = (input_array[xi][yj] == 6);
          if (!onMap) {
            is_visible = 1;
          } else {
            is_visible = was_visited[xi][yj];
          }
          cell_new = Cell(i,j,resolution,this.isObstacle(xi, yj), has_coin, has_shop, is_end, is_start, is_visible, sketch, this.determineType(xi, yj), is_enemy);
        }
        cell_array.push(cell_new);
      }
    }
    player.show();
    isLoading = false;
  }

  sketch.keyPressed = function() {
    if (this.sketch.keyCode == KONAMI_CODE[KONAMI_CODE_LEVEL]) {
      KONAMI_CODE_LEVEL++;
    }
    else {
      KONAMI_CODE_LEVEL = 0;
    }
    if (KONAMI_CODE_LEVEL == 10) {
      player.balance = 9999;
      player.pickaxes = 9999;
      enemySpeed = 200;
    }
    switch(this.sketch.keyCode) {
      case this.sketch.UP_ARROW:   //up
        if (this.onMap || isPaused) {
          break;
        }
        this.player.set_oriention(1);
        if (!isObstacle(this.player.pos_xx, this.player.pos_yy - 1)) {
          this.player.pos_yy--;
        } else if (this.player.pos_yy > 0) {
          if (input_array[this.player.pos_xx][this.player.pos_yy - 1] == 4 && player.balance >= 5) {
            player.balance -= 5;
            player.pickaxes++;
            input_array[this.player.pos_xx][this.player.pos_yy - 1] = 0;
          }
        }

        break;//
      case this.sketch.DOWN_ARROW:   // down
        if (this.onMap || isPaused) {
          break;
        }
        this.player.set_oriention(2);
        if (!isObstacle(this.player.pos_xx, this.player.pos_yy + 1)) {
          this.player.pos_yy++;
        } else if (this.player.pos_yy < this.dimension - 1) {
          if (input_array[this.player.pos_xx][this.player.pos_yy + 1] == 4 && player.balance >= 5) {
            player.balance -= 5;
            player.pickaxes++;
            input_array[this.player.pos_xx][this.player.pos_yy + 1] = 0;
          }
        }
        break;
      case this.sketch.RIGHT_ARROW:   // right
        if (this.onMap || isPaused) {
          break;
        }
        this.player.set_oriention(3);
        if (!isObstacle(this.player.pos_xx + 1, this.player.pos_yy)) {
          this.player.pos_xx++;
        } else if (this.player.pos_xx < this.dimension - 1) {
          if (input_array[this.player.pos_xx + 1][this.player.pos_yy] == 4 && player.balance >= 5) {
            player.balance -= 5;
            player.pickaxes++;
            input_array[this.player.pos_xx + 1][this.player.pos_yy] = 0;
          }
        }
        break;
      case this.sketch.LEFT_ARROW:   // left
        if (this.onMap || isPaused) {
          break;
        }
        this.player.set_oriention(4);
        if (!isObstacle(this.player.pos_xx - 1, this.player.pos_yy)) {
          this.player.pos_xx--;
        } else if (this.player.pos_xx > 0) {
          if (input_array[this.player.pos_xx - 1][this.player.pos_yy] == 4 && player.balance >= 5) {
            player.balance -= 5;
            player.pickaxes++;
            input_array[this.player.pos_xx - 1][this.player.pos_yy] = 0;
          }
        }
        break;
      case this.sketch.SHIFT:
        if (onMap) {
          offset = visibility;
        }
        else {
          offset = (dimension-1) / 2;
        }
        resolution = canvas_size / (offset * 2 + 1)
        this.player.toggleCenter(resolution);
        onMap = !onMap;
        break;
      case 32: // aka spacebar
        if (player.pickaxes == 0) {
          break;
        }

        adjX = player.pos_xx;
        adjY = player.pos_yy;
        if (player.orientation == 2) {
          adjY++;
        } else if (player.orientation == 1) {
          adjY--;
        } else if (player.orientation == 3) {
          adjX++;
        } else {
          adjX--;
        }
        if (adjX > 0 && adjX < this.dimension - 1 && adjY > 0 && adjY < this.dimension - 1
          && input_array[adjX][adjY] == 0 || input_array[adjX][adjY] == 4) {
            input_array[adjX][adjY] = 1;
          player.pickaxes--;
        }
        break;
      case this.sketch.ENTER:
        if (trig_display_endpoint == 1) {
          trig_display_endpoint = 2;
        }
        if (isReady) {
          isReady = false;
          isPaused = false;
        }
        if (window.location.pathname == "/bonus") {
          konami.loop();
        }
        break;
      case 80:
        isPaused = !isPaused;
        break;
      case 77:
        if (!songPlaying) {
          return;
        }
        if (!mute) {
          song.pause();
        }
        else {
          song.play();
        }
        mute = !mute;
    }
  }

  this.overlay = function(text, size) {
      sketch.fill(255, 255, 255);
      sketch.textSize(size);
      sketch.textAlign(sketch.CENTER, sketch.CENTER);
      sketch.text(text, canvas_size / 2, canvas_size / 2);
      sketch.textAlign(sketch.LEFT, sketch.TOP);
  }

  this.determineType = function(xi, yj) {
    if (!this.isObstacle(xi, yj-1) && !this.isObstacle(xi, yj+1) && this.isObstacle(xi-1, yj) && this.isObstacle(xi+1, yj)) {
      return 1;
    }
    else if (this.isObstacle(xi,yj-1) && this.isObstacle(xi,yj+1) && !this.isObstacle(xi-1,yj) && !this.isObstacle(xi+1,yj)) {
      return 2;
    }
    else if (this.isObstacle(xi,yj-1) && !this.isObstacle(xi,yj+1) && this.isObstacle(xi-1,yj) && !this.isObstacle(xi+1,yj)) {
      return 3;
    }
    else if (this.isObstacle(xi,yj-1) && !this.isObstacle(xi,yj+1) && !this.isObstacle(xi-1,yj) && this.isObstacle(xi+1,yj)) {
      return 4;
    }
    else if (!this.isObstacle(xi,yj-1) && this.isObstacle(xi,yj+1) && !this.isObstacle(xi-1,yj) && this.isObstacle(xi+1,yj)) {
      return 5;
    }
    else if (!this.isObstacle(xi,yj-1) && this.isObstacle(xi,yj+1) && this.isObstacle(xi-1,yj) && !this.isObstacle(xi+1,yj)) {
      return 6;
    }
    else if (this.isObstacle(xi,yj-1) && !this.isObstacle(xi,yj+1) && !this.isObstacle(xi-1,yj) && !this.isObstacle(xi+1,yj)) {
      return 7;
    }
    else if (!this.isObstacle(xi,yj-1) && !this.isObstacle(xi,yj+1) && !this.isObstacle(xi-1,yj) && this.isObstacle(xi+1,yj)) {
      return 8;
    }
    else if (!this.isObstacle(xi,yj-1) && this.isObstacle(xi,yj+1) && !this.isObstacle(xi-1,yj) && !this.isObstacle(xi+1,yj)) {
      return 9;
    }
    else if (!this.isObstacle(xi,yj-1) && !this.isObstacle(xi,yj+1) && this.isObstacle(xi-1,yj) && !this.isObstacle(xi+1,yj)) {
      return 10;
    }
    else if (!this.isObstacle(xi,yj-1) && !this.isObstacle(xi,yj+1) && !this.isObstacle(xi-1,yj) && !this.isObstacle(xi+1,yj)) {
      return 11;
    }
    else if (!this.isObstacle(xi,yj-1) || !this.isObstacle(xi,yj+1)) {
      return 1;
    }
    else if (!this.isObstacle(xi-1,yj) || !this.isObstacle(xi+1,yj)) {
      return 2;
    }
    else {
      return 12;
    }
  }

  this.isObstacle = function(xi, yj) {
    if (xi < 0 || yj < 0 || xi >= dimension || yj >= dimension) {
      return true;
    }
    var aaa = !(input_array[xi][yj] >= 1 && input_array[xi][yj] <= 3);
    if (input_array[xi][yj] == 5 || input_array[xi][yj] == 6) {
      aaa = false;
    }
    return aaa;
  }

  this.timer = window.setInterval(function() {
    if (!isPausedTime && !isPaused) {
      timer++;
    }
  }, 1000)
}

var s2 = function (sketch) {
  sketch.setup = function() {
    canvas2 = sketch.createCanvas(400, 100);
    canvas2.position(0, 0);
    sketch.background(100);
    loader = new Loader(level,400,100,sketch)
  }


  sketch.draw = function() {
    sketch.background(100);
    loader.display_loader(level);
  }
}

var s3 = function (sketch) {
  let img;
  sketch.setup = function() {
    canvas3 = sketch.createCanvas(350, 100);
    canvas3.position(425, 0);
    sketch.background(100);

    img = sketch.loadImage('https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png');
    img2 = sketch.loadImage('https://i7.pngguru.com/preview/610/84/854/minecraft-pocket-edition-pickaxe-iron-tool-minecraft.jpg');
  }


  sketch.draw = function() {
    sketch.background(100);
    sketch.noSmooth();
    img.resize(50, 50);
    sketch.image(img, 30, 10);
    sketch.textSize(20);
    if (player.balance < 10) {
      sketch.text(player.balance, 50, 85);
    } else {
      sketch.text(player.balance, 45, 85);
    }
    img2.resize(50, 50);
    sketch.image(img2, 90, 10);
    sketch.textSize(20);
    sketch.text(player.pickaxes, 110, 85);

    sketch.textSize(50);
    sketch.text(this.formatTime(), 190, 65);
    sketch.fill(255);
  }

  this.formatTime = function() {
    if (isReady) {
      timer = 0;
    }
    var minutes = Math.floor(timer / 60);
    var seconds = timer % 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }
}

var s4 = function (sketch) {
  sketch.setup = function() {
    dimX = 350;
    dimY = 400;
    canvas4 = sketch.createCanvas(dimX, dimY);
    canvas4.position(425, 125);
    sketch.background(100);
    informer = new Informer(this.dimX, this.dimY, sketch);
  }



  sketch.draw = function() {
    sketch.background(100);
    informer.display();
  }
}

new p5(s1, 'container');
new p5(s2, 'container');
new p5(s3, 'container');
new p5(s4, 'container');