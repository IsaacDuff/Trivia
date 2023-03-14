import { appState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";
import { Pop } from "../Utils/Pop.js";
import { Trivia } from "../Models/Trivia.js";




// function _drawQuestion() {
//     let question = appState.trivias
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