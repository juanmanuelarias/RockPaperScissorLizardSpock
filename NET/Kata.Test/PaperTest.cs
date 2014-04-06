using Kata.RockPaperScissor;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.Test
{
    [TestClass]
    public class PaperTest
    {
        [TestMethod]
        public void PaperWinsRock()
        {
            var paper = new Paper();
            var rock = new Rock();

            Assert.IsTrue(paper.Defeat(rock));
        }

        [TestMethod]
        public void PaperLostScissor()
        {
            var paper = new Paper();
            var scissor = new Scissor();

            Assert.IsFalse(paper.Defeat(scissor));
        }

        [TestMethod]
        public void PaperWinsSpock()
        {
            var paper = new Paper();
            var spock = new Spock();

            Assert.IsTrue(paper.Defeat(spock));
        }

        [TestMethod]
        public void PaperLostLizard()
        {
            var paper = new Paper();
            var lizard = new Lizard();

            Assert.IsFalse(paper.Defeat(lizard));
        }
    }
}
