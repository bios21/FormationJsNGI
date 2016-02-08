function six() {
    console.clear();

    /* Q&A / LIVE CODE */

    var $out = $('#output'),
        stringifyMsg = function(msg) {
        try {
            return JSON.stringify(msg)
        } catch (e) {
            return msg;
        }
    };

    var tmpLog = console.log.bind(console);
    console.log = function() {
        tmpLog(arguments);

        var $pre = $('<pre>').css('color', 'green'),
            txt = '';
        for (var arg in arguments) {
            txt += stringifyMsg(arguments[arg]) + '  /  ';
        }
        $out.append($pre.text(txt));
    };

    var tmpError = console.error.bind(console);
    console.error = function(message) {
        tmpError(arguments);

        var $pre = $('<pre>').style('color', 'red'),
            txt = '';
        for (var arg in arguments) {
            txt += stringifyMsg(arguments[arg]) + '  /  ';
        }
        $out.append($pre.text(txt));
    };

    var tmpClear = console.clear.bind(console);
    console.clear = function() {
        tmpClear();
        $out.empty();
    };
}