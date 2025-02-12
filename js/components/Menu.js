class Menu extends Component {
    addEventListeners() {
        document.querySelectorAll('.menu-item').forEach(button => 
            button.addEventListener('click', (event) => {
                const name = event.target.dataset.name; 
                this.callbacks.show(name); 
            })
        );
    }
}