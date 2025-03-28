class EllipticalParaboloid extends Figure {
    constructor(count = 20,a = 7,b = 4) {
        super();
        
        //Генерация точек
        const dt = Math.PI * 2 / count;
        for(let i = 0; i <= Math.PI; i += dt){
            for(let j = 0; j < 2 * Math.PI; j += dt){
                const x = a * i * Math.cos(j);
                const y = i * i;
                const z = b * i * Math.sin(j);
                this.points.push(new Point(x,y,z));
        }
        //Генерация граней
        for(let i = 0; i < this.points.length; i++){
            if (i + 1 < this.points.length && (i + 1) % count !== 0){
                this.edges.push(new Edge(i, i + 1));
            } else if ((i + 1) % count === 0){
                this.edges.push(new Edge(i, i + 1 - count));
            }
            if (i < this.points.length - count){
                this.edges.push(new Edge(i, i + count));
            }
        }
        //Генерация полигонов
        for (let i = 0; i < this.points.length - count; i++) {
            if (i + 1 + count < this.points.length && (i + 1) % count !== 0) {
                this.polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
            } else if (i + count < this.points.length && (i + 1) % count === 0) {
                this.polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count]));
            }
        }
        
}}
}