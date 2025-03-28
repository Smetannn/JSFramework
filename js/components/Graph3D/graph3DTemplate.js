Template.prototype.graph3DTemplate = () => `
    <div class="graph3D">
            <select id = 'selectFigure'>
            <option value="Cube">Куб</option>
            <option value="Sphere">Сфера</option>
            <option value="Pyramid">Пирамида</option>
            <option value="Cylinder">Цилиндр</option>
            <option value="Thor">Тор</option>
            <option value="EllipticalCylinder">Эллиптический цилиндр</option>
            <option value="ParabolicCylinder">Параболический цилиндр</option>
            <option value="HyperbolicCylinder">Гиперболический цилиндр</option>
            <option value="OneSheetedHyperboloid">Однополостный гиперболоид</option>
            <option value="TwoSheetedHyperboloid">Двухполостный гиперболоид</option>
            <option value="EllipticalParaboloid">Эллиптический параболоид</option>
            <option value="HyperbolicParaboloid">Гиперболический параболоид</option>
            </select> 
             <div class="checkboxes">
            <label><input type="checkbox" id="pointsCheckbox" checked> Точки</label>
            <label><input type="checkbox" id="edgesCheckbox" checked> Ребра</label>
            <label><input type="checkbox" id="polygonsCheckbox" checked> Полигоны</label>
        </div>
        <div class="light-control">
            <label for="lightPower">Мощность света: <span id="lightPowerValue">50</span></label>
            <input type="range" id="lightPower" min="0" max="100000" value="0" class="slider">
        </div>
        <canvas class="canvas" id="canvas3D"></canvas>
    </div>
        <canvas id="canvas3D"></canvas>
    </div>
`;
//<option value="KleinBottle">бутылка</option>