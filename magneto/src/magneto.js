function xCheck(xMouse,xMagneto,radius){
	if (Math.abs(xMouse - xMagneto) <= radius)
		return xMagneto;
	else
		return xMouse;
}

function yCheck(yMouse,yMagneto,radius){
	if (Math.abs(yMouse - yMagneto) <= radius)
		return yMagneto;
	else
		return yMouse;
}



function magnetoEffect (mousePos,magnetoPos,radius){ 
	// method1: function( param ) {
	// },
	// method2: function( param ) {
	// }
	xDrawPoint = [];
	yDrawPoint = [];
	for ( i = 0; i < magnetoPos.length; i++) {
		mousePos[0] = xCheck(mousePos[0],magnetoPos[i][0],radius);
		mousePos[1] = yCheck(mousePos[1],magnetoPos[i][1],radius);
	}
	return mousePos;
};

module.exports.magnetoEffect = magnetoEffect;
