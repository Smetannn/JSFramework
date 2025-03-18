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
            } else if (selectedFigure === 'KleinBottle') {
                this.scene = new KleinBottle();
            }

            this.renderFrame();
        });
    }
    renderFrame() {
        this.canvas.clear();
        this.math3D.calcDistance(this.scene, this.WIN.CAMERA, 'distance');
        this.math3D.sortByArtistAlgorithm(this.scene.polygons);
        this.scene.polygons.forEach(polygon => {
            const points = polygon.points.map(index => {
                const point = this.scene.points[index];
                return new Point(
                    this.math3D.xs(point),
                    this.math3D.ys(point)
                );
            });

            this.canvas.polygon(points, polygon.color);
        });
        this.scene.edges.forEach(edge => {
            const p1 = this.scene.points[edge.p1];
            const p2 = this.scene.points[edge.p2];
            this.canvas.line(
                this.math3D.xs(p1),
                this.math3D.ys(p1),
                this.math3D.xs(p2),
                this.math3D.ys(p2)
            );
        });

        this.scene.points.forEach(point => {
            this.canvas.point(
                this.math3D.xs(point),
                this.math3D.ys(point)
            );
        });

    }
}


