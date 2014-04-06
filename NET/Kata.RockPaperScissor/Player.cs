using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.RockPaperScissor
{
    public class Player
    {
        public string Id { get; private set; }

        public string Name { get; set; }

        public IShape SelectedShape { get; set; }

        public Player(string id, string name)
        {
            Id = id;
            Name = name;
        }

        public Player(string name)
        {
            this.Name = name;
        }

        public void Reset()
        {
            SelectedShape = null;
        }
    }
}
