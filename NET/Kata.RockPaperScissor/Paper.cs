using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.RockPaperScissor
{
    public class Paper : Shape
    {
        public Paper()
        {
            ShapeType = RockPaperScissor.ShapeType.Paper;
            Name = "Paper";
            winsTo = new List<ShapeType>() { ShapeType.Rock, ShapeType.Spock };
        }
    }
}
