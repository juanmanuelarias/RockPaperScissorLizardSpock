(function ($) {
    $(function () {
        var gameHub = $.connection.gameHub;
        var gameId;
        var wins = 0;
        var loses = 0;

        $.connection.hub.start().done(function () {
            $("#btnNewGame").click(function () {
                gameHub.server.newGame();
            });

            $("#btnJoinGame").click(function () {
                var gameId = $("#gameIdJoin").val();
                gameHub.server.joinGame(gameId);
            });

            $("#btnRock").click(function () {
                play("rock");
            });

            $("#btnPaper").click(function () {
                play("paper");
            });

            $("#btnScissor").click(function () {
                play("scissor");
            });

            $("#btnLizard").click(function () {
                play("lizard");
            });

            $("#btnSpock").click(function () {
                play("spock");
            });
        });

        gameHub.client.getGameId = function (id) {
            $("#gameIdNew").val(id);
            gameId = id;
        }

        gameHub.client.playerConnected = function (id, message) {
            gameId = id;
            console.log(message);
        }

        gameHub.client.onWait = function (message) {
            console.log(message);
        }

        gameHub.client.onWin = function (message) {
            wins++;
            console.log(message);
        }

        gameHub.client.onTie = function (message) {
            console.log(message);
        }

        gameHub.client.onLose = function (message) {
            loses++;
            console.log(message);
        }

        gameHub.client.onError = function (message) {
            console.log(message);
        }

        gameHub.client.onOtherPlayerPlays = function (message) {
            console.log(message);
        }

        function play(shape) {
            gameHub.server.play(gameId, shape);
        }
    });
})($);