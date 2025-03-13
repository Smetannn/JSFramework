class Pyramid extends Figure {
constructor(size = 5, height = 10) {
        super();

        const points = [];
        const edges = [];
        const polygons = [];

        // Основание пирамиды (квадрат)
        points.push(new Point(-size, 0, -size)); // Левая нижняя точка
        points.push(new Point(size, 0, -size));  // Правая нижняя точка
        points.push(new Point(size, 0, size));   // Правая верхняя точка
        points.push(new Point(-size, 0, size));  // Левая верхняя точка

        // Вершина пирамиды
        points.push(new Point(0, height, 0));

        // Рёбра основания
        edges.push(new Edge(0, 1)); // Левая нижняя -> Правая нижняя
        edges.push(new Edge(1, 2)); // Правая нижняя -> Правая верхняя
        edges.push(new Edge(2, 3)); // Правая верхняя -> Левая верхняя
        edges.push(new Edge(3, 0)); // Левая верхняя -> Левая нижняя

        edges.push(new Edge(4, 0)); // Вершина -> Левая нижняя
        edges.push(new Edge(4, 1)); // Вершина -> Правая нижняя
        edges.push(new Edge(4, 2)); // Вершина -> Правая верхняя
        edges.push(new Edge(4, 3)); // Вершина -> Левая верхняя

        polygons.push(new Polygon([0, 1, 4])); // Левая нижняя, Правая нижняя, Вершина
        polygons.push(new Polygon([1, 2, 4],)); // Правая нижняя, Правая верхняя, Вершина
        polygons.push(new Polygon([2, 3, 4])); // Правая верхняя, Левая верхняя, Вершина
        polygons.push(new Polygon([3, 0, 4])); // Левая верхняя, Левая нижняя, Вершина

        polygons.push(new Polygon([0, 1, 2, 3]));

        return new Figure(points, edges, polygons);
    }
}
    