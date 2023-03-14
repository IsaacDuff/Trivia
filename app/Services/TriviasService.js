import { appState } from "../AppState.js"
import { Trivia } from "../Models/Trivia.js";


// how do i get inside of my trivias object to push the correct answer into the incorrect answers so, i know how to do the second part just not how to get inside the object to access that array from here. 



class TriviasService {

    async getTrivias() {
        let response = await axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=medium')
        console.log('axios', response);
        appState.trivias = response.data.results.map(t => new Trivia(t))
        console.log('AppState', appState.trivias);
    }

}

export const triviasService = new TriviasService()