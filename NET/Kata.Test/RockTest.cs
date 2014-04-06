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
    public class RockTest
    {
        [TestMethod]
        public void RockWinsScissor()
        {
            var rock = new Rock();
            var paper = new Scissor();

            Assert.IsTrue(rock.Defeat(paper));
        }

        [TestMethod]
        public void RockLostPaper()
        {
            var rock = new Rock();
            var paper = new Paper();

            Assert.IsFalse(rock.Defeat(paper));
        }

        [TestMethod]
        public void RockWinsLizard()
        {
            var rock = new Rock();
            var lizard = new Lizard();

            Assert.IsTrue(rock.Defeat(lizard));
        }

        [TestMethod]
        public void RockLostSpock()
        {
            var rock = new Rock();
            var spock = new Spock();

            Assert.IsFalse(rock.Defeat(spock));
        }
    }
}
