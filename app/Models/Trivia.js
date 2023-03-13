import { generateId } from "../Utils/generateId.js"



export class Trivia {
    constructor(data) {
        this.id = generateId
        this.category = data.category
        this.correct_answer = data.correct_answer
        this.difficulty = data.difficulty
        this.incorrect_answers = data.incorrect_answers
        this.question = data.question
        this.type = data.type
    }


    get TextTemplate() {
        `
    <div class="col-2 rounded bg-warning trans d-flex justify-content-center">
    <h2>${this.category}</h2>
</div>
<div class="col-7"></div>
<div class="col-8">
    <div class="row justify-content-around rounded bg-info text-light">
    <div class="col-10 my-5">
        <h4>${this.question}</h4>
    </div>
    <div class="col-5 my-4 d-flex justify-content-center">Answer 1</div>
    <div class="col-5 my-4 d-flex justify-content-center">Answer 2</div>
    <div class="col-5 my-4 d-flex justify-content-center">Answer 3</div>
    <div class="col-5 my-4 d-flex justify-content-center">Answer 4</div>
    </div>
</div>
    `
    }
}