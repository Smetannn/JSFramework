Template.prototype.calcTemplate =()=> `  <div class="container">
        <textarea id='A' placeholder="Первое слагаемое"></textarea>
        <textarea id='B' placeholder="Второе слагаемое"></textarea>
        <div class="buttons">
            <button class="operand" data-operand="add">+</button>
            <button class="operand" data-operand="sub">-</button>
            <button class="operand" data-operand="mult">×</button>
            <button class="operand" data-operand="div">÷</button>
            <button class="operand" data-operand="pow">^</button>
            <button class="operand" data-operand="prod">Prod</button>
            <button class="operand" data-operand="zero">Zero</button>
            <button class="operand" data-operand="one">One</button>
            <button class="operand" data-operand="getValue">getValue</button>
        </div>
        <textarea id="C" placeholder="Результат"></textarea>
    </div>`