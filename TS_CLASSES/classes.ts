// class Player {
//     readonly first: string;
//     readonly last: string;
//     private score: number = 0;
//     // #score = 23; use either this or the private methods you cant't use both
//     numLives: number = 10;
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }
//     public getScore(): number {
//         return this.score;
//     }
// }

//private only accessible in the parent class
//protected is only accessible in parent class and child class

class Player {
    // readonly first: string;
    // readonly last: string;
    protected score: number = 0;
    // #score = 23; use either this or the private methods you cant't use both
    numLives: number = 10;
    constructor(readonly first: string, readonly last: string) {}
    public getScore(): number {
        return this.score;
    }
}

class superPlayer extends Player {
    isAdmin: boolean = true;
    constructor(first: string, last: string, isAdmin: boolean) {
        super(first, last);
        this.isAdmin = isAdmin;
    }
    setMaxScore() {
        this.score = 999999;
    }
}
const player1 = new Player("Bharath", "Kumar");
console.log(player1);
console.log(player1.getScore());

const player2 = new superPlayer("Travis", "Head", false);
console.log(player2);
console.log(player2.setMaxScore());
console.log(player2);
