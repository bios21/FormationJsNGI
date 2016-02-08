function deux() {
    console.clear();
    var a = "42";
    var b = 42;

    console.log(a == b);

    console.log(typeof a);
    a = [];
    console.log(typeof a);
    a = {};
    console.log(typeof a);


    //--

    var whatIsThis = function() {
        console.log(arguments);
        console.log(this);
    };

    whatIsThis();
    whatIsThis('bonjour', 'ça va ?', 42, [], {});

    whatIsThis.call(null, 1, 2, 3, 4);
    whatIsThis.apply({}, ['coucou', 'voici des arguments <3']);
    var anotherFn = whatIsThis.bind(new Image());
    anotherFn();

    //--

    function add(number) {
        return function (value) {
            return value + number;
        }
    }

    var add42 = add(42);

    console.log(add42(10));
    console.log(add42(5));
    console.log(add42(18));
}