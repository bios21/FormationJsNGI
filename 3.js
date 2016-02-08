function trois() {
    console.clear();
    var MaClass = function() {
        var maVariablePrivee = 'whatever';

        this.maVariablePulique = 'coucou';

        var maFonctionPrivee = function() {

        };
		
        function monAutreFonctionPrivee() {
			that
        }

        this.maFonctionPublique = function() {
			this.maVariablePulique;
			maVariablePrivee
        };
    };
	
	debugger;

    MaClass.fonctionStatique = function() {
        console.log(this);
    };

    MaClass.prototype.encoreFonctionPublique = function() {
        console.log(this);
    };

	
	var autre = new MaClass();
	var autre2 = autre;
	autre.maVariablePulique = 'toto';

    var monObjet = new MaClass();
    //----


    var Heritage = function() {
        MaClass.apply(this, arguments);
    };
    Heritage.prototype = Object.create(MaClass.prototype);
    Heritage.prototype.constructor = Heritage;
}