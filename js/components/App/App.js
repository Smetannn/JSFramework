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

        this.esse = new Esse({
            id: 'esse-container',
            parent: this.id,
            template: template.esseTemplate
        });

        this.targets = new Targets({
            id: 'targets-container',
            parent: this.id,
            template: template.targetsTemplate
        });

        this.rpg = new RPG({
            id: 'rpg-container',
            parent: this.id,
            template: template.rpgTemplate
        });

        this.showContent('targets');
    }

    showContent(name) {
        this.esse.hide();
        this.targets.hide();
        this.rpg.hide();
        this[name].show();

}
}