
class Graph3D extends Component {
    constructor(options) {
        super(options);

        this.WIN = {
            LEFT: -5,
            BOTTOM: -5,
            WIDTH: 10,
            HEIGHT: 10,
            CENTER: new Point(0, 0, 30),
            CAMERA: new Point(0, 0, 50),
        };

       this.LIGHT = new Light(-40,5,10,100000);
        this.scene = new Cube();
        this.figures = new Figures;
        this.math3D = new Math3D({ WIN: this.WIN });
        this.canvas = new Canvas({
            id: 'canvas3D',
            width: 500,
            height: 500,
            WIN: this.WIN,
            callbacks: {
                wheel: (event) => this.wheel(event),
                mousemove: (event) => this.mousemove(event),
                mouseup: () => this.mouseup(),
                mousedown: (event) => this.mousedown(event),
                mouseleave: () => this.mouseleave(),
            },
        });

        this.canRotate = false;
        this.dx = 0;
        this.dy = 0;

        this.renderFrame();
    }

    wheel(event) {
        const delta = (event.wheelDelta > 0) ? 1.1 : 0.9;
        this.scene.points.forEach(point => this.math3D.zoom(delta, point));
        this.renderFrame();
    }

    mouseup() {
        this.canRotate = false;
    }

    mouseleave() {
        this.canRotate = false;
    }

    mousedown(event) {
        this.canRotate = true;
        this.dx = event.offsetX;
        this.dy = event.offsetY;
    }

    mousemove(event) {
        if (this.canRotate) {
            const ROTATION_SENSITIVITY = 5;
            const gradus = Math.PI / 180 / ROTATION_SENSITIVITY;

            this.scene.points.forEach(point => {
                this.math3D.rotateOy(-(this.dx - event.offsetX) * gradus, point);
                this.math3D.rotateOx(-(this.dy - event.offsetY) * gradus, point);
            });

            this.dx = event.offsetX;
            this.dy = event.offsetY;
            this.renderFrame();
        }
    }


    addEventListeners() {
        document.getElementById('selectFigure').addEventListener('change', (event) => {
            const selectedFigure = event.target.value;

            if (selectedFigure === 'Cube') {
                this.scene = new Cube();
            } else if (selectedFigure === 'Sphere') {
                this.scene = new Sphere();
            } else if (selectedFigure === 'Pyramid') {
                this.scene = new Pyramid();
            } else if (selectedFigure === 'Cylinder') {
                this.scene = new Cylinder();
            } else if (selectedFigure === 'Thor') {
                this.scene = new Thor();
            } else if (selectedFigure === 'Elipsoid') {
                this.scene = new Elipsoid();
            } else if (selectedFigure === 'Conus') {
                this.scene = new Conus();
            } else if (selectedFigure === 'EllipticalCylinder') {
                this.scene = new EllipticalCylinder();
            } else if (selectedFigure === 'ParabolicCylinder') {
                this.scene = new ParabolicCylinder();
            } else if (selectedFigure === 'HyperbolicCylinder') {
                this.scene = new HyperbolicCylinder();
            } else if (selectedFigure === 'OneSheetedHyperboloid') {
                this.scene = new OneSheetedHyperboloid();
            } else if (selectedFigure === 'TwoSheetedHyperboloid') {
                this.scene = new TwoSheetedHyperboloid();
            } else if (selectedFigure === 'EllipticalParaboloid') {
                this.scene = new EllipticalParaboloid();
            } else if (selectedFigure === 'HyperbolicParaboloid') {
                this.scene = new HyperbolicParaboloid();
            }
            this.renderFrame();
        });

        document.getElementById('pointsCheckbox').addEventListener('change', () => {
            this.renderFrame();
        });

        document.getElementById('edgesCheckbox').addEventListener('change', () => {
            this.renderFrame();
        });

        document.getElementById('polygonsCheckbox').addEventListener('change', () => {
            this.renderFrame();
        });
document.getElementById('lightPower').addEventListener('input', (event) => {
            const powerValue = parseInt(event.target.value);
            this.LIGHT.lumen = powerValue;
            document.getElementById('lightPowerValue').textContent = powerValue;
            this.renderFrame();
        });
        
    }
    renderFrame(){
        this.canvas.clear();
        this.math3D.calcDistance(this.scene, this.WIN.CAMERA, 'distance');
        this.math3D.calcDistance(this.scene, this.LIGHT, 'lumen');
        this.math3D.sortByArtistAlgorithm(this.scene.polygons);

        if (document.getElementById("polygonsCheckbox").checked) {
            this.scene.polygons.forEach(polygon => {
                const array = [];
                polygon.points.forEach(index => 
                    array.push({
                        x : this.math3D.xs(this.scene.points[index]),
                        y : this.math3D.ys(this.scene.points[index]),
                    })
                )
                const lumen = this.math3D.calcIllumination(polygon.lumen, this.LIGHT.lumen);
                let {r,g,b} = polygon.color;
                r = Math.round(r*lumen);
                g = Math.round(g*lumen);
                b = Math.round(b*lumen);
                this.canvas.polygon(array, `${polygon.rgbToHex(r, g, b)}`);
            });
        }

        if (document.getElementById("edgesCheckbox").checked) {
            this.scene.edges.forEach(edge => {
                const point1 = this.scene.points[edge.p1];
                const point2 = this.scene.points[edge.p2];
                this.canvas.line(
                    this.math3D.xs(point1),
                    this.math3D.ys(point1),
                    this.math3D.xs(point2),
                    this.math3D.ys(point2)
                );
            });
        }

        if (document.getElementById("pointsCheckbox").checked) {
            this.scene.points.forEach(point => {
                this.canvas.point(
                    this.math3D.xs(point),
                    this.math3D.ys(point)
                );
            });
        }
    }
}
