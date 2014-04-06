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
    public class ScissorTest
    {
        [TestMethod]
        public void ScissorWinsPaper()
        {
            var scissor = new Scissor();
            var paper = new Paper();

            Assert.IsTrue(scissor.Defeat(paper));
        }

        [TestMethod]
        public void ScissorLostRock()
        {
            var scissor = new Scissor();
            var rock = new Rock();

            Assert.IsFalse(scissor.Defeat(rock));
        }

        [TestMethod]
        public void ScissorWinsLizard()
        {
            var scissor = new Scissor();
            var lizard = new Lizard();

            Assert.IsTrue(scissor.Defeat(lizard));
        }

        [TestMethod]
        public void ScissorLostSpock()
        {
            var scissor = new Scissor();
            var spock = new Spock();

            Assert.IsFalse(scissor.Defeat(spock));
        }
    }
}
