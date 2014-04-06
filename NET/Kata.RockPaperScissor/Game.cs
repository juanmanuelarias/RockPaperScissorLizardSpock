using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.RockPaperScissor
{
    public class Game
    {
        public string Id { get; private set; }

        public Game(string id)
        {
            Id = id;
        }

        public Game()
        {

        }

        public Player Play(Player playerOne, Player playerTwo)
        {
            if (playerOne.SelectedShape == null || playerTwo.SelectedShape == null)
            {
                throw new Exception("Cannot play with no shapes selection");
            }

            if (playerOne.SelectedShape.ShapeType == playerTwo.SelectedShape.ShapeType)
            {
                return null;
            }

            if (playerOne.SelectedShape.Defeat(playerTwo.SelectedShape))
            {
                return playerOne;
            }

            return playerTwo;
        }
    }
}
