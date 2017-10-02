// Rover Object Goes Here
// ======================
var rover = new Object();
	rover.direction="N";
	rover.positionX=0;
	rover.positionY=0;
	rover.log=[];
// ======================



function turnLeft(rover){

  console.log("turnLeft was called!");


  switch(rover.direction){
	case "N":
        rover.direction="W";
        break;
  case "S":
        rover.direction="E";
        break;

	 case "E":
        rover.direction="N";
        break;
   case "W":
        rover.direction="S";
        break;

    default:
       console.log("There is a problem turnLeft");
  }
    console.log(rover.direction);

 }

 function turnRight(rover){
  console.log("turnRight was called!");

    switch(rover.direction){
	 case "N":
        rover.direction="E";
        break;
   case "S":
        rover.direction="W";
        break;

	  case "E":
        rover.direction="S";
        break;
    case "W":
        rover.direction="N";
        break;

    default:
       console.log("There is a problem turnLeft");
  }
    console.log(rover.direction);


 }

 function moveForward(rover){
  console.log("moveForward was called")

    switch(rover.direction){
	  case "N":
		if (rover.positionY > 0 ){
			rover.positionY = rover.positionY - 1;
			travelLog(rover);
		}
        break;
     case "S":
     if (rover.positionY < 9 ){
			rover.positionY = rover.positionY + 1;
			travelLog(rover);
		}
        break;

	  case "E":
        if (rover.positionX < 9 ){
			rover.positionX = rover.positionX + 1;
			travelLog(rover);
		}
        break;
     case "W":
        if (rover.positionX > 0 ){
			rover.positionX = rover.positionX - 1;
			travelLog(rover);
		}
        break;

    default:
       console.log("There is a problem turnLeft");
  }

 }


function moveBackward(rover){
  console.log("moveBackward was called")

    switch(rover.direction){
	case "N":
		if (rover.positionY < 9 ){
			rover.positionY = rover.positionY + 1;
			travelLog(rover);
		}
        break;
    case "S":
        if (rover.positionY > 0 ){
			rover.positionY = rover.positionY - 1;
			travelLog(rover);
		}
        break;

	case "E":
        if (rover.positionX > 0 ){
			rover.positionX = rover.positionX - 1;
			travelLog(rover);
		}
        break;
    case "W":
        if (rover.positionX < 9 ){
			rover.positionX = rover.positionX + 1;
			travelLog(rover);
		}
        break;

    default:
       console.log("There is a problem turnLeft");
  }

}


function travelLog(rover){
	rover.log.push([rover.positionX, rover.positionY]);

}

function printLog(rover){
	var arrayLength = rover.log.length;
	for (var i = 0; i < arrayLength; i++) {
		console.log("Rover was moved to " +rover.log[i]);
	}
}

s
function commands(command){
	for (var i = 0, len = command.length; i < len; i++) {
	   switch(command[i]){
		case "f":
			moveForward(rover);
			break;
		case "r":
			turnRight(rover);
			break;
		case "l":
			turnLeft(rover);
			break;
		case "b":
			moveBackward(rover);
			break;
		}
	}
	printLog(rover);
}
