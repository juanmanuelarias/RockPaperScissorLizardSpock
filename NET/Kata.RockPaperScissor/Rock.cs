using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.RockPaperScissor
{
    public class Rock : Shape
    {
        public Rock()
        {
            ShapeType = ShapeType.Rock;
            Name = "Rock";
            winsTo = new List<ShapeType>() { ShapeType.Scissor, ShapeType.Lizard };
        } 
    }
}
