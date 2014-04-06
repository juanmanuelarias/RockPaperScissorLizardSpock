using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.RockPaperScissor
{
    public class Spock : Shape
    {
        public Spock()
        {
            this.ShapeType = ShapeType.Spock;
            Name = "Spock";
            winsTo = new List<ShapeType>() { ShapeType.Rock, ShapeType.Scissor };
        }
    }
}
