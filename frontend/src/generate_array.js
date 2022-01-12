function Array_Generator() {
	this.n;
	this.cells = [];
	this.frontier = [[]];
	this.frontierSiz = 0;
	this.dx = [1, -1, 0, 0];
	this.dy = [0, 0, 1, -1];
	this.arr = [[]];
	this.startX = 0;
	this.startY = 0;
	this.endX = 0;
	this.endY = 0;

	this.valid = function(x, y) {
		if (x >= 1 && x < this.n - 1 && y >= 1 && y < this.n - 1) {
			return true;
		} else {
			return false;
		}
	}

	this.getID = function(x, y) {
		return x * this.n + y;
	}

	this.shuff = function() {
		for (var iteration = 0; iteration < 5; iteration++) {
			var a = Math.floor(Math.random() * 4);
			var b = Math.floor(Math.random() * 4);
			
			var temp = this.dx[a];
			this.dx[a] = this.dx[b];
			this.dx[b] = temp;

			temp = this.dy[a];
			this.dy[a] = this.dy[b]
			this.dy[b] = temp;
		}
	}

	this.generate = function(siz, enemyCnt) {
		// console.log(enemyCnt);
		this.n = siz;
		for (var i = 0; i < this.n; i++) {
			for (var j = 0; j < this.n; j++) {
				this.cells[this.getID(i, j)] = 0;
			}
		}

		this.startX = 1;
		this.startY = Math.floor(Math.random() * (this.n - 2)) + 1;

		this.frontier[this.frontierSiz++] = [this.startX, this.startY, this.startX, this.startY];

		while (this.frontierSiz > 0) {
			var index = Math.floor(Math.random() * this.frontierSiz);
			var current = this.frontier[index];
			this.frontier[index] = this.frontier[this.frontierSiz - 1];
			this.frontierSiz--;

			var x = current[2], y = current[3];
			var xx = current[0], yy = current[1];
			if (this.cells[this.getID(x, y)] == 0) {
				this.cells[this.getID(x, y)] = this.cells[this.getID(xx, yy)] = 1;
				this.shuff();
				for (var dir = 0; dir < 4; dir++) {
					var adjX = x + this.dx[dir], adjY = y + this.dy[dir];
					var adjX2 = x + this.dx[dir] * 2, adjY2 = y + this.dy[dir] * 2;
					if (this.valid(adjX2, adjY2) && this.cells[this.getID(adjX2, adjY2)] == 0) {
						this.frontier[this.frontierSiz++] = [adjX, adjY, adjX2, adjY2];
					}
				}
			}
		}

		// for (var i = 0; i < 50; i++) {
		// 	var x = this.n - 2;
		// 	var y = Math.floor(Math.random() * this.n);
		// 	if (this.cells[this.getID(x, y)] == 1) {
		// 		endX = x, endY = y;
		// 		break;
		// 	}
		// }

		// if (endY == -1) {
		// 	for (var y = 0; y < this.n; y++) {
		// 		if (this.cells[this.getID(this.n - 2, y)] == 1) {
		// 			endX = this.n - 2, endY = y;
		// 			break;
		// 		}
		// 	}
		// }

		this.endX = this.n - 2;
		this.endY = -1;

		endLocs = [];
		cu = 0;
		for (y = 0; y < this.n; y++) {
			if (this.cells[this.getID(x, y)] == 1) {
				count = 0;
				for (dir = 0; dir < 4; dir++) {
					adjX = this.endX + this.dx[dir], adjY = y + this.dy[dir];
					if (this.cells[this.getID(adjX, adjY)] == 0) {
						count++;
					}
				}
				if (count == 3) {
					endLocs[cu++] = y;
				}
			}
		}
		if (cu == 0) {
			for (y = 0; y < this.n; y++) {
				if (this.cells[this.getID(endX, y)] == 1) {
					endY = y;
					break;
				}
			}
		} else {
			this.endY = endLocs[Math.floor(Math.random() * cu)];
		}

		locs = [[]];
		cur_id = 0;
		for (x = Math.floor(this.n / 2 + 1); x < this.n - 1; x++) {
			for (y = 1; y < this.n - 1; y++) {
				if (this.cells[this.getID(x, y)] == 1 && !(x == this.endX && y == this.endY)) {
					locs[cur_id++] = [x, y];
				}
			}
		}

		arr = [[]];
		for (i = 0; i < this.n; i++) {
			arr[i] = []
			for (j = 0; j < this.n; j++) {
				arr[i][j] = 0;
			}
		}

		console.log(enemyCnt, cur_id);
		while (enemyCnt > 0 && cur_id > 0) {
			// console.log("asjfasdjf")
			index = Math.floor(Math.random() * cur_id);
			x = locs[index][0];
			y = locs[index][1];

			locs[index] = locs[cur_id - 1];
			cur_id--;
			enemyCnt--;

			arr[x][y] = 6;
			// console.log("haha")
		}

		for (var i = 0; i < this.n; i++) {
			for (var j = 0; j < this.n; j++) {
				if (arr[i][j] == 6) {
					continue;
				}
				if (i == 0 || i == this.n - 1 || j == 0 || j == this.n - 1) {
					arr[i][j] = 0;
				} else {
					if (this.cells[this.getID(i, j)] == 1) {
						if (i == this.endX && j == this.endY) {
							arr[i][j] = 2; // ending cell
						} else if (i == this.startX && j == this.startY) {
							arr[i][j] = 5;
						} else if (Math.random() * 10 > 9) {
							arr[i][j] = 3; // coin
						} else {
							arr[i][j] = 1;
						}
					} else {
						if (Math.random() * 500 > 480) {
							arr[i][j] = 4;
						} else {
							arr[i][j] = 0;
						}
					}
				}
			}
		}

		this.arr = arr;
	}

	// only use with odd maze sizes
}
// 0 - wall
// 1 - no wall
// 2 - end cell
// 3 - coin cell
// 4 - shop cell
// 5 - start cell
// 6 - enemy cell