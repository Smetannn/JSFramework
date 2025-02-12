class App extends Component {
    constructor(options) {
        super(options);
        new Menu({
            id: 'menu',
            parent: this.id,
            template: template.menuTemplate,
            callbacks: {
                show: (name) => this.showContent(name),
            }
        });
    }
    showContent(name) {
        console.log(name);
    }
}