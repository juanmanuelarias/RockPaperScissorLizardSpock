using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.RockPaperScissor
{
    public class Lizard : Shape
    {
        public Lizard()
        {
            ShapeType = ShapeType.Lizard;
            Name = "Lizard";
            winsTo = new List<ShapeType>() { ShapeType.Paper, ShapeType.Spock };
        }
    }
}
