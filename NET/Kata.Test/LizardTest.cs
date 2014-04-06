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
    public class LizardTest
    {
        [TestMethod]
        public void LizardWinsSpock()
        {
            var lizard = new Lizard();
            var spock = new Spock();

            Assert.IsTrue(lizard.Defeat(spock));
        }

        [TestMethod]
        public void LizardWinsPaper()
        {
            var lizard = new Lizard();
            var paper = new Paper();

            Assert.IsTrue(lizard.Defeat(paper));
        }

        [TestMethod]
        public void LizardLostRock()
        {
            var lizard = new Lizard();
            var rock = new Rock();

            Assert.IsFalse(lizard.Defeat(rock));
        }

        [TestMethod]
        public void LizardLostSicssor()
        {
            var lizard = new Lizard();
            var scissor = new Scissor();

            Assert.IsFalse(lizard.Defeat(scissor));
        }
    }
}
