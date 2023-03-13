import { appState } from "../AppState.js"
import { Trivia } from "../Models/Trivia.js";






class TriviasService {

    async getTrivias() {
        let response = await axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=medium')
        console.log('axios', response);
        appState.trivias = response.data.results.map(t => new Trivia(t))
        console.log('AppState', appState.trivias);
    }

}

export const triviasService = new TriviasService()