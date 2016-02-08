function quatre() {
    console.clear();
    var IMGglobal = new Image();

    IMGglobal.onload = function (event) {
        console.log('coucou, mon image est chargée !');
        console.log(this);
    };

    IMGglobal.onerror = function(event) {
        console.error(':( ERROR !');
    };

    IMGglobal.src = "http://www.global-imaging.net/images-logos/logo-global-imaging-rvb.jpg";


    //--

    var IMGpromise = new Image();

    /**
     * @param {Function} resolve
     * @param {Function} reject
     */
    var promiseResolver = function(resolve, reject) {
        IMGpromise.onload = function(event) {
            resolve.apply(this, [event /*, args*/]);
        };

        if (reject) {
            IMGpromise.onerror = function(event) {
                reject.apply(this, [event /*, args*/]);
            };
        }

        IMGpromise.src = "http://www.global-imaging.net/images-logos/logo-global-imaging-rvb.jpg";
    };

    var promiseImage = new Promise(promiseResolver);

    promiseImage.then(function() {
        console.log('coucou ! ouais !! une image !');
        console.log(arguments, this);
    }, function() {
        console.error('tristesse et damnation ....');
        console.warn(arguments, this);
    });

    promiseImage.then(function() {
        console.log('ouais je suis content encore !!!');
        console.log(arguments, this);
    });

    promiseImage.catch(function() {
        console.error('pleurs et désolation ....');
        console.warn(arguments, this);
    });
}