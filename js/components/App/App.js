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
            id: 'esse',
            parent: this.id,
            template: template.esseTemplate
        });

        this.targets = new Targets({
            id: 'targets',
            parent: this.id,
            template: template.targetsTemplate
        });

        this.rpg = new RPG({
            id: 'rpg',
            parent: this.id,
            template: template.rpgTemplate
        });
        this.calc = new Calc({
            id: 'calc',
            parent: this.id,
            template: template.calcTemplate,
        });
        this.graph2D = new Graph2D({
            id: 'graph2D',
            parent: this.id,
            template: template.graph2DTemplate,
        });

        
        this.showContent('graph2D');
    }

    showContent(name) {
        this.esse.hide();
        this.graph2D.hide();
        this.targets.hide();
        this.rpg.hide();
        this.calc.hide();
        this[name].show();

}
}