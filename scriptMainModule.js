function construct_func()
{
	var nameholder;
	return {
		name : function(fName,lName){
			nameholder = fName +' '+ lName;
		},

		consoleLog: function(){
			console.log(nameholder);
		}

	}
}

module.exports = construct_func;