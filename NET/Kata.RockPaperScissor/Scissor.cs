using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.RockPaperScissor
{
    public class Scissor : Shape
    {
        public Scissor()
        {
            ShapeType = ShapeType.Scissor;
            Name = "Scissor";
            winsTo = new List<ShapeType>() { ShapeType.Paper, ShapeType.Lizard };
        }
    }
}
