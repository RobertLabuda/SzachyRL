/*******************************************************************************************************************/

var POSITION = POSITION || {}; // namespace POSITION

function Position(field) { 
    this.x = 0;
    this.y = 0;
    this.set(field);

} 

Position.prototype.set = function(field) {
    this.x = field.charCodeAt(0)-64;
    this.y = parseInt(field[1]);
    this.field = field;
};

/*******************************************************************************************************************/

var FIGURES = FIGURES || {}; // namespace Figures

function Figure(name,color,field) { //constructor Figure (name,color,field)
	this.name=name;
	this.color=color;
	this.field=field;
	alert('figura została stworzona')
}
Figure.prototype.display = function(){
	alert('Name: '+this.name+' Color: '+this.color+' Position: '+this.field);
};

/*******************************************************************************************************************/

FIGURES.King = {}; //namespace King

function King(name,color,field){ //class King
	Figure.call(this,name,color,field);
 }
 
 King.prototype = Object.create(Figure.prototype,Position.prototype); //create object King and inherits the Figure,Position
 King.prototype.constructor = King; //set construcor
 
 var king = new King('King','White','E1'); //initialize object king
 var king1 = new King('King','Black','E8');
 
String(king);
 String(king1);
 
King.prototype.display = function(){
	alert('Name: '+this.name+' Color: '+this.color+' Position: '+this.field+' ♕');
};

function canBeMoved(){
  var possiblePosition = new List();
  
      var currentX=Positions.x;
      var currentY=Positions.y;
  
  		possiblePositions.Add(new Position(currentX + 1, currentY));
			possiblePositions.Add(new Position(currentX - 1, currentY));
			possiblePositions.Add(new Position(currentX, currentY + 1));
			possiblePositions.Add(new Position(currentX, currentY - 1));
			possiblePositions.Add(new Position(currentX + 1, currentY + 1));
			possiblePositions.Add(new Position(currentX - 1, currentY + 1));
			possiblePositions.Add(new Position(currentX - 1, currentY - 1));
			possiblePositions.Add(new Position(currentX + 1, currentY - 1));
}

king.display();
king1.display();

/*******************************************************************************************************************/

FIGURES.Queen = {}; //namespace Queen

function Queen(name,color,field){ //class Queen
	Figure.call(this,name,color,field);
 }
 
 Queen.prototype = Object.create(Figure.prototype,Position.prototype); //create object Queen and inherits the Figure,Position
 Queen.prototype.constructor = Queen; //set construcor
 
 var queen = new Queen('Queen','White','D1'); //initialize object queen
 var queen1 = new Queen('Queen','Black','D8');
 
 String(queen);
 String(queen1);

 
Queen.prototype.display = function(){
	alert('Name: '+this.name+' Color: '+this.color+' Position: '+this.field+' ♕');
};

function canBeMoved(){
  var possiblePosition = new List();
  
      var currentX=Positions.x;
      var currentY=Positions.y;
  
      possiblePositions.Add(new Position(currentX - 1, currentY + 1));
		
			possiblePositions.Add(new Position(currentX - 2, currentY + 2));
			possiblePositions.Add(new Position(currentX - 3, currentY + 3));
			possiblePositions.Add(new Position(currentX - 4, currentY + 4));
			possiblePositions.Add(new Position(currentX - 5, currentY + 5));
			possiblePositions.Add(new Position(currentX - 6, currentY + 6));
			possiblePositions.Add(new Position(currentX - 7, currentY + 7));
			possiblePositions.Add(new Position(currentX - 8, currentY + 8));

			possiblePositions.Add(new Position(currentX + 1, currentY - 1));
			possiblePositions.Add(new Position(currentX + 2, currentY - 2));
			possiblePositions.Add(new Position(currentX + 3, currentY - 3));
			possiblePositions.Add(new Position(currentX + 4, currentY - 4));
			possiblePositions.Add(new Position(currentX + 5, currentY - 5));
			possiblePositions.Add(new Position(currentX + 6, currentY - 6));
			possiblePositions.Add(new Position(currentX + 7, currentY - 7));
			possiblePositions.Add(new Position(currentX + 8, currentY - 8));

			possiblePositions.Add(new Position(currentX + 1, currentY + 1));
			possiblePositions.Add(new Position(currentX + 2, currentY + 2));
			possiblePositions.Add(new Position(currentX + 3, currentY + 3));
			possiblePositions.Add(new Position(currentX + 4, currentY + 4));
			possiblePositions.Add(new Position(currentX + 5, currentY + 5));
			possiblePositions.Add(new Position(currentX + 6, currentY + 6));
			possiblePositions.Add(new Position(currentX + 7, currentY + 7));
			possiblePositions.Add(new Position(currentX + 8, currentY + 8));

			possiblePositions.Add(new Position(currentX - 1, currentY - 1));
			possiblePositions.Add(new Position(currentX - 2, currentY - 2));
			possiblePositions.Add(new Position(currentX - 3, currentY - 3));
			possiblePositions.Add(new Position(currentX - 4, currentY - 4));
			possiblePositions.Add(new Position(currentX - 5, currentY - 5));
			possiblePositions.Add(new Position(currentX - 6, currentY - 6));
			possiblePositions.Add(new Position(currentX - 7, currentY - 7));
			possiblePositions.Add(new Position(currentX - 8, currentY - 8));

			possiblePositions.Add(new Position(currentX, 1));
			possiblePositions.Add(new Position(currentX, 2));
			possiblePositions.Add(new Position(currentX, 3));
			possiblePositions.Add(new Position(currentX, 4));
			possiblePositions.Add(new Position(currentX, 5));
			possiblePositions.Add(new Position(currentX, 6));
			possiblePositions.Add(new Position(currentX, 7));
			possiblePositions.Add(new Position(currentX, 8));

			possiblePositions.Add(new Position(1, currentY));
			possiblePositions.Add(new Position(2, currentY));
			possiblePositions.Add(new Position(3, currentY));
			possiblePositions.Add(new Position(4, currentY));
			possiblePositions.Add(new Position(5, currentY));
			possiblePositions.Add(new Position(6, currentY));
			possiblePositions.Add(new Position(7, currentY));
			possiblePositions.Add(new Position(8, currentY));
}

queen.display();
queen1.display();
/*******************************************************************************************************************/

FIGURES.Bishop = {}; //namespace Bishop

function Bishop(name,color,field){ //class Bishop
	Figure.call(this,name,color,field);
 }
 
 Bishop.prototype = Object.create(Figure.prototype,Position.prototype); //create object Bishop and inherits the Figure,Position
 Bishop.prototype.constructor = Bishop; //set construcor
 
 var bishop = new Bishop('Bishop','White','C1'); //initialize object Bishop
 var bishop1 = new Bishop('Bishop','White','F1');
 var bishop2 = new Bishop('Bishop','Black','C8');
 var bishop3 = new Bishop('Bishop','Black','F8');
 
 String(bishop);
 String(bishop1);
 String(bishop2);
 String(bishop3);
 
Bishop.prototype.display = function(){
	alert('Name: '+this.name+' Color: '+this.color+' Position: '+this.field+' ♕');
};

function canBeMoved(){
  var possiblePosition = new List();
  
      var currentX=Positions.x;
      var currentY=Positions.y;
  
			possiblePositions.Add(new Position(currentX - 1, currentY + 1));
			possiblePositions.Add(new Position(currentX - 2, currentY + 2));
			possiblePositions.Add(new Position(currentX - 3, currentY + 3));
			possiblePositions.Add(new Position(currentX - 4, currentY + 4));
			possiblePositions.Add(new Position(currentX - 5, currentY + 5));
			possiblePositions.Add(new Position(currentX - 6, currentY + 6));
			possiblePositions.Add(new Position(currentX - 7, currentY + 7));
			possiblePositions.Add(new Position(currentX - 8, currentY + 8));

			possiblePositions.Add(new Position(currentX + 1, currentY - 1));
			possiblePositions.Add(new Position(currentX + 2, currentY - 2));
			possiblePositions.Add(new Position(currentX + 3, currentY - 3));
			possiblePositions.Add(new Position(currentX + 4, currentY - 4));
			possiblePositions.Add(new Position(currentX + 5, currentY - 5));
			possiblePositions.Add(new Position(currentX + 6, currentY - 6));
			possiblePositions.Add(new Position(currentX + 7, currentY - 7));
			possiblePositions.Add(new Position(currentX + 8, currentY - 8));

			possiblePositions.Add(new Position(currentX + 1, currentY + 1));
			possiblePositions.Add(new Position(currentX + 2, currentY + 2));
			possiblePositions.Add(new Position(currentX + 3, currentY + 3));
			possiblePositions.Add(new Position(currentX + 4, currentY + 4));
			possiblePositions.Add(new Position(currentX + 5, currentY + 5));
			possiblePositions.Add(new Position(currentX + 6, currentY + 6));
			possiblePositions.Add(new Position(currentX + 7, currentY + 7));
			possiblePositions.Add(new Position(currentX + 8, currentY + 8));

			possiblePositions.Add(new Position(currentX - 1, currentY - 1));
			possiblePositions.Add(new Position(currentX - 2, currentY - 2));
			possiblePositions.Add(new Position(currentX - 3, currentY - 3));
			possiblePositions.Add(new Position(currentX - 4, currentY - 4));
			possiblePositions.Add(new Position(currentX - 5, currentY - 5));
			possiblePositions.Add(new Position(currentX - 6, currentY - 6));
			possiblePositions.Add(new Position(currentX - 7, currentY - 7));
			possiblePositions.Add(new Position(currentX - 8, currentY - 8));
			
}
bishop.display();
bishop1.display();
bishop2.display();
bishop3.display();

/*******************************************************************************************************************/

FIGURES.Rook = {}; //namespace Rook

function Rook(name,color,field){ //class Rook
	Figure.call(this,name,color,field);
 }
 
 Rook.prototype = Object.create(Figure.prototype,Position.prototype); //create object Rook and inherits the Figure,Position
 Rook.prototype.constructor = Rook; //set construcor
 
 var rook = new Rook('Rook','White','A1'); //initialize object rook
 var rook1 = new Rook('Rook','White','H1');
 var rook2 = new Rook('Rook','Black','A8');
 var rook3 = new Rook('Rook','Black','H8');
 String(rook);
 String(rook1);
 String(rook2);
 String(rook3);
 
Rook.prototype.display = function(){
	alert('Name: '+this.name+' Color: '+this.color+' Position: '+this.field+' ♕');
};

function canBeMoved(){
  var possiblePosition = new List();
       
      var currentX=Positions.x;
      var currentY=Positions.y;
  
  possiblePositions.Add(new Position(1, currentY));
			possiblePositions.Add(new Position(2, currentY));
			possiblePositions.Add(new Position(3, currentY));
			possiblePositions.Add(new Position(4, currentY));
			possiblePositions.Add(new Position(5, currentY));
			possiblePositions.Add(new Position(6, currentY));
			possiblePositions.Add(new Position(7, currentY));
			possiblePositions.Add(new Position(8, currentY));
			//Y
			possiblePositions.Add(new Position(currentX, 1));
			possiblePositions.Add(new Position(currentX, 2));
			possiblePositions.Add(new Position(currentX, 3));
			possiblePositions.Add(new Position(currentX, 4));
			possiblePositions.Add(new Position(currentX, 5));
			possiblePositions.Add(new Position(currentX, 6));
			possiblePositions.Add(new Position(currentX, 7));
			possiblePositions.Add(new Position(currentX, 8));
			
}
rook.display();
rook1.display();
rook2.display();
rook3.display();
