class Conus extends Figure {
    constructor(count = 20, h = 15, r = 10) {
        super();
        const points = [];
        const edges = [];
        const polygons = [];

        const dt = 2 * Math.PI / count; 
        //точки
        for (let i = 0; i < count; i++) {
            const angle = i * dt;
            points.push(new Point(
                r * Math.cos(angle), 
                r * Math.sin(angle), 
                0                          
            ));
        }
//dthibyf
        points.push(new Point(0, 0, h)); 
//ребра
        for (let i = 0; i < count; i++) {
            edges.push(new Edge(count, i)); 

            const nextIndex = (i + 1) % count; 
            edges.push(new Edge(i, nextIndex));
        }

        // Генерация полигонов
        for (let i = 0; i < count; i++) {
            const nextIndex = (i + 1) % count; 
            polygons.push(new Polygon(
                [count, i, nextIndex], 
            ));
        }

        return new Figure(points,edges,polygons);

    }
}