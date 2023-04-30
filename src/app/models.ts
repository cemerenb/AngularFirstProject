export class NewModel{
    user;
    items;
    constructor(){
        this.user = 'Cem Eren Badur';
        this.items =  [
            new TodoItem("Spor",false),
            new TodoItem("Kitap",false),
            new TodoItem("Yemek",true),
            new TodoItem("Ders",false),

  ];
    }
}

export class TodoItem{
    description;
    action;
    constructor(description: string,action: boolean){
        this.description = description;
        this.action = action;
    }
}