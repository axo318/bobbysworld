

function pop_up_window(dimX, dimY,sketch) {
	this.dimX = dimX;
	this.dimY = dimY;
	this.sketch=sketch
	
	this.t1 ="The Edinburgh’s Castle";
	this.t2 = "The Palace of Holyroodhouse";
	this.t3 = "Arthur’s Seat and Salisbury Crags";
	this.t4 = "National Museum of Scotland";
	this.t5 = "The Royal Botanic Garden";

	this.d1 = "Scotland's most famous landmark, Edinburgh Castle is one of Britain's most visited tourist attractions. Highlights include the One O'clock Salute from Half Moon Battery (cannon fire commemorates the tradition of helping ships synchronize their clocks); the impressive Scottish National War Memorial; and the stunning collection of Crown Jewels housed in the Royal Palace. Another notable feature is the Stone of Destiny (aka, the Stone of Scone), famously stolen by Edward I and placed under the English throne in London - only returned to Scotland 700 years later in 1996.";
	this.d2 = "The Palace of Holyroodhouse is the Queen's official Edinburgh residence and has frequently been at the centre of Scottish history: it was where James II and James IV were each married, where James V and Charles I were crowned, and where \"Bonnie Prince Charlie\" held court in 1745. When the Queen's away, public access is permitted to the stunning Historic Apartments (former home of Mary Queen of Scots) and the State Apartments, famous for their fine furnishings, tapestries, and plasterwork.";
	this.d3 = "At 820 feet, Arthur's Seat is the highest point in the 640-acre Holyrood Park. The spectacular views from the top encompass the whole city all the way to the mouth of the Forth. The easiest way up is from the park's Dunsapie Loch. Also, easy to climb are the dramatic Salisbury Crags, a series of 151-foot cliffs adjacent to Arthur's Seat. Other features in this huge park are the ancient cultivation terraces, some of the earliest and best-preserved examples of ancient farming practices in Scotland, and the picturesque ruins of the medieval St. Anthony's Chapel.";
	this.d4 = "Since opening in 2011, the free National Museum has become one of Scotland's most popular attractions. Highlights include national archaeological collections; medieval artefacts; and displays focusing on natural history, geology, art, science, and technology. In its 16 galleries, containing more than 8,000 artefacts, are Dolly the sheep - the world's first cloned mammal - as well as some of Elton John's more elaborate stage costumes. Traditional museum displays also include material from Ancient Egypt and the infamous Maiden, an early form of guillotine.";
	this.d5 = "Edinburgh's Royal Botanic Garden is the second oldest such garden in Britain. Within its magnificent 70-acres are a herbarium and Britain's biggest palm house; a tropical house with exotic orchids; an alpine house; a terraced moorland garden; heather garden; and an extensive arboretum with rare giant trees from the Himalayas, North America, and China. Other highlights are the woodland garden, with its colorful azaleas, hydrangeas, camellias, and rhododendrons; an aquatic house, with tropical water plants such as the pink water lily from India; and touring displays in the Exhibition Hall.";
	
	//console.log(this.t1);
	this.img1 = this.sketch.loadImage("https://upload.wikimedia.org/wikipedia/commons/c/c1/Edinburgh_Castle_from_the_south_east.JPG");
	this.img2 = this.sketch.loadImage("https://upload.wikimedia.org/wikipedia/commons/c/ce/Holyroodhouse%2C_front_view.jpg");
	this.img3 = this.sketch.loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Edinburgh_Arthur_Seat_dsc06165.jpg/1024px-Edinburgh_Arthur_Seat_dsc06165.jpg");
	this.img4 = this.sketch.loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Museum_of_Scotland.jpg/1024px-Museum_of_Scotland.jpg");
	this.img5 = this.sketch.loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palm_House%2C_Royal_Botanic_Garden_Edinburgh.JPG/1024px-Palm_House%2C_Royal_Botanic_Garden_Edinburgh.JPG");

	this.next_x1 = this.dimX/2-40
	this.next_y1 = this.dimY-30
	this.next_x2 = 90
	this.next_y2 = 25 

	this.display_text = function (type){
		this.sketch.textSize(12);
		switch(type) {
			case 1: 
				this.sketch.text(this.t1, 10, 10, this.dimX - 10, 30);
				this.sketch.text(this.d1, 10, 40, this.dimX-10, this.dimY/2);
				this.img1.resize(this.dimX-20, this.dimY/2-20);
				this.sketch.image(this.img1, 10, this.dimY/2-20);//this.dimY, this.dimX / 2, this.dimY / 2);
				this.sketch.fill(222,184,135);

				this.sketch.rect(this.next_x1,this.next_y1,this.next_x2,this.next_y2);
				
				this.sketch.fill(0)
				this.sketch.text('PRESS ENTER',this.next_x1+2,this.next_y1+7,this.next_x2,this.next_y2);

				this.sketch.noFill();
				break;
			case 2: 
				this.sketch.text(this.t2, 10, 10, this.dimX - 10, 30);
				this.sketch.text(this.d2, 10, 40, this.dimX-10, this.dimY/2);
				this.img2.resize(this.dimX-20, this.dimY/2-20);
				this.sketch.image(this.img2, 10, this.dimY/2-20);//this.dimY, this.dimX / 2, this.dimY / 2);
				this.sketch.fill(222,184,135);

				this.sketch.rect(this.next_x1,this.next_y1,this.next_x2,this.next_y2);
				
				this.sketch.fill(0)
				this.sketch.text('PRESS ENTER',this.next_x1+2,this.next_y1+7,this.next_x2,this.next_y2);

				this.sketch.noFill();
				break;
			case 3: 
				this.sketch.text(this.t3, 10, 10, this.dimX - 10, 30);
				this.sketch.text(this.d2, 10, 40, this.dimX-10, this.dimY/2);
				this.img3.resize(this.dimX-20, this.dimY/2-20);
				this.sketch.image(this.img3, 10, this.dimY/2-20);//this.dimY, this.dimX / 2, this.dimY / 2);
				this.sketch.fill(222,184,135);

				this.sketch.rect(this.next_x1,this.next_y1,this.next_x2,this.next_y2);
				
				this.sketch.fill(0)
				this.sketch.text('PRESS ENTER',this.next_x1+2,this.next_y1+7,this.next_x2,this.next_y2);

				this.sketch.noFill();
				break;
			case 4: 
				this.sketch.text(this.t4, 10, 10, this.dimX - 10, 30);
				this.sketch.text(this.d2, 10, 40, this.dimX-10, this.dimY/2);
				this.img4.resize(this.dimX-20, this.dimY/2-20);
				this.sketch.image(this.img4, 10, this.dimY/2-20);//this.dimY, this.dimX / 2, this.dimY / 2);
				this.sketch.fill(222,184,135);

				this.sketch.rect(this.next_x1,this.next_y1,this.next_x2,this.next_y2);
				
				this.sketch.fill(0)
				this.sketch.text('PRESS ENTER',this.next_x1+2,this.next_y1+7,this.next_x2,this.next_y2);

				this.sketch.noFill();
				break;
			case 5: 
				this.sketch.text(this.t5, 10, 10, this.dimX - 10, 30);
				this.sketch.text(this.d2, 10, 40, this.dimX-10, this.dimY/2);
				this.img5.resize(this.dimX-20, this.dimY/2-20);
				this.sketch.image(this.img5, 10, this.dimY/2-20);//this.dimY, this.dimX / 2, this.dimY / 2);
				this.sketch.fill(222,184,135);

				this.sketch.rect(this.next_x1,this.next_y1,this.next_x2,this.next_y2);
				
				this.sketch.fill(0)
				this.sketch.text('PRESS ENTER',this.next_x1+2,this.next_y1+7,this.next_x2,this.next_y2);

				this.sketch.noFill();
				break;

			default:
				this.sketch.text(this.t5, 10, 10, this.dimX - 10, 30);
				this.sketch.text(this.d2, 10, 40, this.dimX-10, this.dimY/2);
				this.img5.resize(this.dimX-20, this.dimY/2-20);
				this.sketch.image(this.img5, 10, this.dimY/2-20);//this.dimY, this.dimX / 2, this.dimY / 2);
				this.sketch.fill(222,184,135);

				this.sketch.rect(this.next_x1,this.next_y1,this.next_x2,this.next_y2);
				
				this.sketch.fill(0)
				this.sketch.text('PRESS ENTER',this.next_x1+2,this.next_y1+7,this.next_x2,this.next_y2);

				this.sketch.noFill();
				break;
		}
	}
}