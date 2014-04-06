using System;
using System.Linq;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;
using Kata.RockPaperScissor;
using Kata.Web.Models;

namespace Kata.Web.Hubs
{
    public class GameHub : Hub
    {
        public async Task NewGame()
        {
            var random = new Random();
            var gameId = random.Next().ToString();
            await Groups.Add(Context.ConnectionId, gameId);

            var game = new Game(gameId);

            var player = new Player(Context.ConnectionId, "P1");
            GameManager.Instance.AddGame(game);
            GameManager.Instance.AddPlayerToGame(gameId, player);

            Clients.Group(gameId).getGameId(gameId);
        }

        public async Task JoinGame(string gameId){

            var players = GameManager.Instance.GetPlayersFromGameId(gameId);

            if (players.Count > 2)
            {
                await Clients.Group(gameId).onError("Sorry, I'm a little bit lazy right now... so only two players will be able to play in one game");
            }

            var game = GameManager.Instance.Games.Single(g => g.Id == gameId);

            var player = new Player(Context.ConnectionId, "P2");

            GameManager.Instance.AddPlayerToGame(gameId, player);

            if (game == null)
            {
                Clients.Caller.playerConnected("No Game to Connect... Sorry!");
            }

            await Groups.Add(Context.ConnectionId, gameId);
            Clients.Group(gameId).playerConnected(gameId, "A new player is online!");
        }
        
        public async Task Play(string gameId, string shapeName)
        {
            try
            {
                var players = GameManager.Instance.GetPlayersFromGameId(gameId);
                var game = GameManager.Instance.Games.First(g => g.Id == gameId);

                var currentPlayer = players.Single(p => p.Id == Context.ConnectionId);
                var otherPlayer = players.Single(p => p.Id != Context.ConnectionId);

                currentPlayer.SelectedShape = GetShapeFromString(shapeName);

                if (otherPlayer.SelectedShape == null)
                {
                    await Clients.Client(currentPlayer.Id).onWait("Waiting to the other player to play...");
                    await Clients.Client(otherPlayer.Id).onOtherPlayerPlays("Hurry up to decide, the other player is waiting for you!");
                }
                else
                {
                    var winner = game.Play(currentPlayer, otherPlayer);

                    if (winner != null)
                    {
                        var loser = players.Single(p => p.Id != winner.Id);

                        await Clients.Client(winner.Id).onWin("You Win against " + loser.SelectedShape.Name);
                        await Clients.Client(loser.Id).onLose("You Lose agains " + winner.SelectedShape.Name);
                    }
                    else
                    {
                        await Clients.Group(gameId).onTie("You end in a tie");
                    }

                    currentPlayer.Reset();
                    otherPlayer.Reset();
                }
            }
            catch (Exception e)
            {
                await Clients.Group(gameId).onError("Ops " + e.Message);
            }
        }

        private Shape GetShapeFromString(string shapeName)
        {
            switch (shapeName)
            {
                case "rock":
                    return new Rock();
                case "paper":
                    return new Paper();
                case "scissor":
                    return new Scissor();
                case "spock":
                    return new Spock();
                case "lizard":
                    return new Lizard();
                default:
                    return null;
            }
        }
    }
}