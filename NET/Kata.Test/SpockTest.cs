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
    public class SpockTest
    {
        [TestMethod]
        public void SpockWinsRock()
        {
            var spock = new Spock();
            var rock = new Rock();

            Assert.IsTrue(spock.Defeat(rock));
        }

        [TestMethod]
        public void SpockWinsScissors()
        {
            var spock = new Spock();
            var scissor = new Scissor();

            Assert.IsTrue(spock.Defeat(scissor));
        }

        [TestMethod]
        public void SpockLostPaper()
        {
            var spock = new Spock();
            var paper = new Paper();

            Assert.IsFalse(spock.Defeat(paper));
        }

        [TestMethod]
        public void SpockLostLizard()
        {
            var spock = new Spock();
            var lizard = new Lizard();

            Assert.IsFalse(spock.Defeat(lizard));
        }
    }
}
