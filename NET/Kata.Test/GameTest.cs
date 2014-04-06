using Kata.RockPaperScissor;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.Test
{
    [TestClass]
    public class GameTest
    {
        [TestMethod]
        public void PlayerOneWinsPlayerTwo()
        {
            var playerOne = new Player("juan");
            var playerTwo = new Player("yagi");

            var shapeThatWins = new Mock<IShape>();
            shapeThatWins.Setup(s => s.Defeat(It.IsAny<IShape>())).Returns(true);
            shapeThatWins.Setup(s => s.ShapeType).Returns(ShapeType.Rock);

            var shapeThatLoses = new Mock<IShape>();
            shapeThatLoses.Setup(s => s.Defeat(It.IsAny<IShape>())).Returns(false);
            shapeThatLoses.Setup(s => s.ShapeType).Returns(ShapeType.Scissor);

            playerOne.SelectedShape = shapeThatWins.Object;
            playerTwo.SelectedShape = shapeThatLoses.Object;

            var game = new Game();
            var winner = game.Play(playerOne, playerTwo);

            Assert.AreEqual(playerOne, winner);
        }

        [TestMethod]
        public void PlayerTwoWinsPlayerOne()
        {
            var playerOne = new Player("juan");
            var playerTwo = new Player("yagi");

            var shapeThatWins = new Mock<IShape>();
            shapeThatWins.Setup(s => s.Defeat(It.IsAny<IShape>())).Returns(true);
            shapeThatWins.Setup(s => s.ShapeType).Returns(ShapeType.Rock);

            var shapeThatLoses = new Mock<IShape>();
            shapeThatLoses.Setup(s => s.Defeat(It.IsAny<IShape>())).Returns(false);
            shapeThatLoses.Setup(s => s.ShapeType).Returns(ShapeType.Scissor);

            playerOne.SelectedShape = shapeThatLoses.Object;
            playerTwo.SelectedShape = shapeThatWins.Object; 

            var game = new Game();
            var winner = game.Play(playerOne, playerTwo);

            Assert.AreEqual(playerTwo, winner);
        }

        [TestMethod]
        public void PlayerOneDrawPlayerTwo()
        {
            var playerOne = new Player("juan");
            var playerTwo = new Player("yagi");

            var shapeOne = new Mock<IShape>();
            shapeOne.Setup(s => s.Defeat(It.IsAny<IShape>())).Returns(true);
            shapeOne.Setup(s => s.ShapeType).Returns(ShapeType.Rock);

            var shapeTwo = new Mock<IShape>();
            shapeTwo.Setup(s => s.Defeat(It.IsAny<IShape>())).Returns(false);
            shapeTwo.Setup(s => s.ShapeType).Returns(ShapeType.Rock);

            playerOne.SelectedShape = shapeOne.Object;
            playerTwo.SelectedShape = shapeTwo.Object;

            var game = new Game();
            var winner = game.Play(playerOne, playerTwo);

            Assert.IsNull(winner);
        }
    }
}
