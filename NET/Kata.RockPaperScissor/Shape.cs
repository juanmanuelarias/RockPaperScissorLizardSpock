using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.RockPaperScissor
{
    public abstract class Shape : IShape
    {
        public ShapeType ShapeType { get; protected set; }

        public string Name { get; protected set; }

        protected List<ShapeType> winsTo;

        public bool Defeat(IShape paper)
        {
            return winsTo.Contains(paper.ShapeType);
        }
    }
}
