$(document).ready(function () {

    var totalHP = Math.floor(Math.random() * 120 + 19)

    $("#goal").html("<div>NEED TO BE: " + totalHP + " POWER LEVEL!</div>");

    var char1ATT = Math.floor(Math.random() * 12 + 1)
    var char2ATT = Math.floor(Math.random() * 12 + 1)
    var char3ATT = Math.floor(Math.random() * 12 + 1)
    var char4ATT = Math.floor(Math.random() * 12 + 1)

    var dmgDealt = 0;

    $("#total").html("<div>POWER LEVEL: " + dmgDealt + " !</div>");

    var win = 0;
    var lose = 0;
    $("#win").text("DOORS PASSED: " + win + " !");
    $("#lose").text("YOU'VE FAILED: " + lose + " TIME(S).");

    function reset() {

        totalHP = Math.floor(Math.random() * 120 + 19);

        console.log(totalHP)

        $("#goal").text("NEED TO BE: " + totalHP + " POWER LEVEL!");

        char1ATT = Math.floor(Math.random() * 12 + 1);
        char2ATT = Math.floor(Math.random() * 12 + 1);
        char3ATT = Math.floor(Math.random() * 12 + 1);
        char4ATT = Math.floor(Math.random() * 12 + 1);

        dmgDealt = 0;

        $("#total").html("<div>POWER LEVEL: " + dmgDealt + " !</div>");
    }

    function winCond() {

        alert("You may enter!");
        win++;
        $("#win").text("DOORS PASSED: " + win + " !");
        reset();

    }

    function loseCond() {

        alert("Try again...");
        lose++;
        $("#lose").text("YOU'VE FAILED: " + lose + " TIME(S).");
        reset();
    }

    $("#char1").on('click', function () {

        dmgDealt = dmgDealt += char1ATT;

        console.log("currentOutput = " + dmgDealt);

        $("#total").html("<div>POWER LEVEL: " + dmgDealt + " !</div>");

        if (dmgDealt == totalHP) {
            winCond();
        }
        else if (dmgDealt >= totalHP) {
            loseCond();
        }

    });

    $("#char2").on('click', function () {

        dmgDealt = dmgDealt += char2ATT;

        console.log("currentOutput = " + dmgDealt);

        $("#total").html("<div>POWER LEVEL: " + dmgDealt + " !</div>");

        if (dmgDealt == totalHP) {
            winCond();
        }
        else if (dmgDealt >= totalHP) {
            loseCond();
        }

    });

    $("#char3").on('click', function () {

        dmgDealt = dmgDealt += char3ATT;

        console.log("currentOutput = " + dmgDealt);

        $("#total").html("<div>POWER LEVEL: " + dmgDealt + " !</div>");

        if (dmgDealt == totalHP) {
            winCond();
        }
        else if (dmgDealt >= totalHP) {
            loseCond();
        }

    });

    $("#char4").on('click', function () {

        dmgDealt = dmgDealt += char4ATT;

        console.log("currentOutput = " + dmgDealt);

        $("#total").html("<div>POWER LEVEL: " + dmgDealt + " !</div>");

        if (dmgDealt == totalHP) {
            winCond();
        }
        else if (dmgDealt >= totalHP) {
            loseCond();
        }

    });

}); 