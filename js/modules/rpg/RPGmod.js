class RPGmod {
    randMoney = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    constructor() {
        this.user = {
            hp: 10,
            money: 5,
            current: 'start',
        }

        this.Rooms = {
            start: {
                title: "Комната в общаге",
                description: 'Обычное ни чем не примечательное утро. Ты проснулся в общаге.',
                buttonDescription: 'Куда пойдешь?',
                img: "img/start.jpg",
                exits: ['corridor', "window"]
            },
            corridor: {
                title: "Коридор",
                description: 'Ты открыл дверь и вышел в коридор, множество дверей окружают тебя.',
                buttonDescription: 'Куда пойдешь?',
                img: "img/corridor.jpg",
                exits: ['start', "toilet", "floor_2"]
            },
            toilet: {
                title: "Туалет",
                description: 'Ты зашел в общажный толчок. Ничего необычного, видно, что местные обитатели поддерживают его в "хорошем" состоянии. На удивление, ты не хочешь в туалет.',
                buttonDescription: 'Куда пойдешь?',
                img: "img/toilet.jpg",
                exits: ['corridor']
            },
            window: {
                title: "Выйти в окно",
                description: 'Ты вышел в окно. На самом деле ты постоянно это делаешь, ведь живешь на 2 этаже, так что ничего необычного.',
                buttonDescription: 'Куда пойдешь?',
                img: "img/window.jpg",
                exits: ["street"]
            },
            street: {
                title: "Улица",
                description: 'Ты на улице перед общагой.',
                buttonDescription: 'Куда пойдешь?',
                img: "img/street.jpg",
                exits: ["hall", "shop", "udsu"]
            },
            udsu: {
                title: "УдГУ",
                description: "Ты добрался до лучшего ВУЗа на планете. ",
                buttonDescription: "Нужны знания?",
                img: "img/udsu.jpg",
                exits: ["street", "class"]
            },
            class: {
                title: "Аудитория",
                description: "Успешного грызения гранита. ",
                buttonDescription: "Может вернемся?",
                img: "img/class.jpg",
                exits: ["udsu"],
                money: this.randMoney(1, 4)
            },
            floor_1: {
                title: "Лестница - 1 этаж",
                description: 'Ты пришел на 1 этаж.',
                buttonDescription: 'Куда пойдешь?',
                img: "img/floor_2.jpg",
                exits: ["floor_2", "hall"],
                money: this.randMoney(1, 4)

            },
            floor_2: {
                title: "Лестница - 2 этаж",
                description: 'Ты пришел на лесничную площадку своего 2 этажа.',
                buttonDescription: 'Ha какой этаж отправишься?',
                img: "img/floor.jpg",
                exits: ['corridor', "floor_1"]
            },
            hall: {
                title: "Вахта - 2 монеты",
                description: 'Ты пришел на вахту общежития. Проход стоит 2 монеты',
                buttonDescription: 'Куда пойдешь?',
                img: "img/hall.jpg",
                exits: ['street', "floor_1"],
                price: 2
            },
            heaven: {
                title: "Вальгалла студента",
                description: 'Ты умер от голода',
                buttonDescription: 'Начать сначала',
                img: "img/heaven.jpg",
                exits: ['start']
            }, shop: {
                title: "Красное Белое - 1 монета",
                description: 'Ты подкрепился! +3 к здоровью',
                buttonDescription: 'Куда дальше?',
                img: "img/kb.jpg",
                exits: ['street'],
                price: 1
            },
        }


        this.current = 'start';

        this.hp = this.user.hp;

    }   

    renderRoom(title, img, description, exits, hp){
        document.querySelector('.rpg-title').innerHTML = title;
        document.getElementById('description').innerHTML = description;
        document.getElementById('roomImage').src = img;
        document.getElementById('hp').innerHTML = 'Здоровье ' + hp + ' единиц';
        var exits = document.getElementById('exits');
        exits.innerHTML = '';
    }
    
    renderButton(text, onClick){
        var button = document.createElement('button');
        button.innerHTML = text;
        button.addEventListener('click', onClick);
        document.getElementById('exits').appendChild(button);
    }
    
    dead() {
        this.current = 'heaven';
        let room = this.Rooms[this.current];
        this.renderRoom(room.title, room.img, room.description, room.exits, this.hp);
        for (var i = 0; i < room.exits.length; i++) {
            ((i) => {
                this.renderButton(this.Rooms[room.exits[i]].title, () => {
                    this.current = room.exits[i];
                    this.hp = 10;
                    this.render();
                });
            })(i);
        }
    }
    render(){
        if (this.hp <= 0) {
            this.dead();
        } else {
        
        var room = this.Rooms[this.current];

        this.renderRoom(room.title, room.img, room.description, room.exits, this.hp);
        
        for(var i = 0; i < room.exits.length; i++){
            ((i) => {
                this.renderButton(this.Rooms[room.exits[i]].title, () => {
                    this.current = room.exits[i];
                    this.hp -= 1;
                    this.render();
            });
            })(i);
        }


    }  
    
}
}

/*class RPGmod {
    

    r

    dead() {
        this.current = 'heaven';
        let room = this.Rooms[this.current];
        this.renderRoom(room.title, room.img, room.description, room.exits, this.hp);
        for (var i = 0; i < room.exits.length; i++) {
            ((i) => {
                this.renderButton(this.Rooms[room.exits[i]].title, () => {
                    this.current = room.exits[i];
                    this.hp = 10;
                    this.render();
                });
            })(i);
        }
    }
    
    render() {
        if (this.hp <= 0) {
            this.dead();
        } else {
            let room = this.Rooms[this.current];
            if (this.current== "shop") {
                this.hp += 3;
            }
            this.renderRoom(room.title, room.img, room.description, room.exits, this.hp);
            for (var i = 0; i < room.exits.length; i++) {
                ((i) => {
                    this.renderButton(this.Rooms[room.exits[i]].title, () => {
                        this.current = room.exits[i];
                        this.hp -= 1;
                        this.render();
                    });
                })(i);
            }
        }

    }
}*/