Template.prototype.graph3DTemplate = () => `
    <div class="graph3D">
            <select id = 'selectFigure'>
            <option value="Cube">Куб</option>
            <option value="Sphere">Сфера</option>
            <option value="Pyramid">Пирамида</option>
            <option value="Cylinder">Цилиндр</option>
            </select> 
        <canvas id="canvas3D"></canvas>
    </div>
`;