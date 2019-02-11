process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
//pass sudoku array in function isValid 

function inRow(ar,row){
	var r = new Map();
	for(var i=0;i<9;i++){
		if(r.has(ar[row][i])){
			return false;
		}else{
			r.set(ar[row][i],1);
		}
	}
	r.clear();
	return true;
}

function inCol(ar,col){
	var c = new Map();
	for(var i=0;i<9;i++){
		if(c.has(ar[i][col])){
			return false;
		}else{
			c.set(ar[i][col],1);
		}
	}
	c.clear();
	return true;
}

function inCube(ar,row,col){
	var cu = new Map();
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			if(cu.has(ar[i+row][j+col])){
				return false;
			}else{
				cu.set(ar[i+row][j+col],1);
			}
		}
	}
	cu.clear();
	return true;
}

function isValid(ar){
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			if(!(inRow(ar,i)&&inCol(ar,j)&&inBox(ar,i-i%3,j-j%3))){
				return false;
			}
		}
	}
	return true;
}
