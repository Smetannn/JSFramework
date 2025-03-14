class Thor extends Figure {
    constructor(r = 6, distance = 20) {
        super();
        const points = [];
        const edges = [];
        const polygons = [];
        for (let u = 0; u<Math.PI*2;u++){
            for (let v = 0; v<Math.PI*2;v++)
                points.push(new Point(
                    (distance+r*Math.cos(v))*Math.cos(u),
                    r*Math.sin(u),
                    (distance+r*Math.cos(v))*Math.sin(u)));
                    



                }

                return new Figure(points);
        }
        
    }
   


