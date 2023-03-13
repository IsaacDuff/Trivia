import { appState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";
import { Pop } from "../Utils/Pop.js";


// _drawQuestion() {
//     let trivia = appState.trivias
//     trivia.push()
// }


export class TriviasController {
    constructor() {
        console.log('hello from controller');
        // let data = fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=medium')
        // console.log(data);

        this.getTrivias()
    }

    async getTrivias() {
        try {
            await triviasService.getTrivias()
        } catch (error) {
            console.log(error);
            Pop.error(error)
        }
    }
}