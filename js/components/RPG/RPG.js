class RPG extends Component {
    constructor(options) {
        super(options);
    }  

    addEventListeners() {
        (new RPGmod()).render();
    }
}