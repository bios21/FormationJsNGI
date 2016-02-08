function cinq() {
    console.clear();
    console.log($('#output'));

    var def = $.get('poule.json', function(data) {
        console.log(data);

        var $pre = $('<pre>'),
            sData = JSON.stringify(data);

        $pre.text(sData);

        $('#output').append($pre);
    });

    console.log(def);

    //---
}