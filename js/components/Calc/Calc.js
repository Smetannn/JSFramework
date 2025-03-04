class Calc extends Component {
    constructor(options) {
        super(options);
    }
    operandHandler(event) {
        const A = document.getElementById('A').value;
        const B = document.getElementById('B').value;
        const operand = event.target.dataset.operand;
        const calcul = new Calculator();
        const C = calcul[operand](calcul.getEntity(A), calcul.getEntity(B));
        document.getElementById('C').value = C.toString();
    }
    addEventListeners() {
        const buttons = document.querySelectorAll('.operand');
        buttons.forEach(button => button.addEventListener('click', this.operandHandler));
    }
}