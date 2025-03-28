class TwoSheetedHyperboloid extends Figure {
    constructor(count = 10, a = 1, b = 1, c = 1) {
        super();
        const dt = 2 * Math.PI / count;
        //points
        for(let i = 0; i <= Math.PI; i+= dt){
            for(let j = 0; j < 2 * Math.PI; j+= dt){
                const x = a * Math.sinh(i) * Math.cos(j);
                const y = c * Math.cosh(i);
                const z = b * Math.cosh(i) * Math.sin(j);
                this.points.push(new Point(x, y, z));
            }
        }
        for (let i = 0; i <= Math.PI; i += dt) {
            for (let j = 0; j < 2 * Math.PI; j += dt) {
                this.points.push(new Point(-a * Math.sinh(i) * Math.cos(j), -c * Math.cosh(i), -b * Math.cosh(i) * Math.sin(j)));
            }
        }
        //edges
        for (let i = 0; i < this.points.length / 2; i++) {
            if (i + 1 < this.points.length && (i + 1) % count !== 0) {
                this.edges.push(new Edge(i, i + 1));
            } else if ((i + 1) % count === 0) {
                this.edges.push(new Edge(i, i + 1 - count));
            }
            if (i < this.points.length / 2 - count) {
                this.edges.push(new Edge(i, i + count));
            }
        }
        for (let i = this.points.length / 2 + count; i < this.points.length; i++) {
            if (i + 1 < this.points.length && (i + 1) % count !== 0) {
                this.edges.push(new Edge(i, i + 1));
            } else if ((i + 1) % count === 0) {
                this.edges.push(new Edge(i, i + 1 - count));
            }
            if (i < this.points.length - count) {
                this.edges.push(new Edge(i, i + count));
            }
        }
        //polygons
        for (let i = 0; i < this.points.length / 2 - count; i++) {
            if (i + 1 + count < this.points.length && (i + 1) % count !== 0) {
                this.polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
            } else if (i + count < this.points.length && (i + 1) % count === 0) {
                this.polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count]))
            }
        }
        for (let i = this.points.length / 2; i < this.points.length; i++) {
            if (i + 1 + count < this.points.length && (i + 1) % count !== 0) {
                this.polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
            } else if (i + count < this.points.length && (i + 1) % count === 0) {
                this.polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count]))
            }
        }
        
        
    }
}
