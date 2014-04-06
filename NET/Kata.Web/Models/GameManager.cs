using Kata.RockPaperScissor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Kata.Web.Models
{
    public class GameManager
    {
        private static readonly GameManager _instance = new GameManager();

        public List<Game> Games { get; private set; }

        private Dictionary<string, List<Player>> _players { get; set; }

        private GameManager()
        {
            Games = new List<Game>();
            _players = new Dictionary<string, List<Player>>();
        }

        public static GameManager Instance
        {
            get
            {
                return _instance;
            }
        }

        public void AddGame(Game game)
        {
            Games.Add(game);
            _players.Add(game.Id, new List<Player>());
        }

        public void AddPlayerToGame(string gameId, Player player)
        {
            _players[gameId].Add(player);
        }

        public List<Player> GetPlayersFromGameId(string gameId)
        {
            return _players[gameId];
        }
    }
}