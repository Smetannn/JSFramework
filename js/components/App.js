class App extends Component {
    constructor(options) {
        super(options);
        this.esse = null;
            new Menu({
            id: 'menu',
            parent: this.id,
            template: template.menuTemplate,
            callbacks: {
                show:(name)=> this.showContent(name),
            }
        });
    }
    showContent(name) {
        if (name === 'esse') {
                if (!this.esse ) {
                    this.esse = new Esse({
                        id: 'esse-container', parent: this.id, template: template.esseTemplate
                    });
                } 
                this.esse.show();
        }else{
            if (this.esse) {
                this.esse.hide();
            }
        }
        console.log(name);
    }
}