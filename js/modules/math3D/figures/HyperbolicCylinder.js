class HyperbolicCylinder extends Figure {
    constructor(count = 10){
        super();
        

        //points
        let size = 5;
        for(let i = -count; i < count; i++){
            for(let j = 0; j < count; j++){
                const x = i + size / count;
                const y = x * x / size;
                const z = j - size;
                this.points.push(new Point(x,y,z));
            }
        }

        size = -5;
        for(let i = -count; i < count; i++){
            for(let j = 0; j < count; j++){
                const x = i - size / count;
                const y = x * x / size;
                const z = j + size;
                this.points.push(new Point(x,y,z));
            }
        }
        //edges
        for(let i = 0; i < this.points.length / 2; i++){
            if (i + 1 < this.points.length / 2 && (i + 1) % count !== 0){
                this.edges.push(new Edge(i, i + 1));
            } else if ((i + 1) % count === 0){
                this.edges.push(new Edge(i, i + 1 - count));
            }
            if (i < this.points.length / 2 - count){
                this.edges.push(new Edge(i, i + count));
            }
        }

        for (let i = this.points.length / 2; i < this.points.length; i++) {
            if (i + 1 < this.points.length && (i + 1) % count !== 0) {
                this.edges.push(new Edge(i, i + 1));
            } else if ((i + 1) % count === 0) {
                this.edges.push(new Edge(i, i - count + 1));
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
            this.polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count]));
        }
    }
    for (let i = Math.floor(this.points.length / 2); i < this.points.length - count; i++) {
        if (i + 1 + count < this.points.length && (i + 1) % count !== 0) {
            this.polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
        } else if (i + count < this.points.length && (i + 1) % count === 0) {
            this.polygons.push(new Polygon([i, i - count + 1, i + 1, i + count]));
        }
    }
        
        
        


    }
}