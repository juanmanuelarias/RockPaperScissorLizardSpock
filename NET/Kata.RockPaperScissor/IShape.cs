namespace Kata.RockPaperScissor
{
    public interface IShape
    {
        ShapeType ShapeType { get; }
        
        bool Defeat(IShape paper);

        string Name { get; }
    }
}