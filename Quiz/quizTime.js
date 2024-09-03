async function data() {
    let response = await fetch('quizdata.json');
    /**
     * @type {{questions:{question:string,options:string[],answer:number}[]}}
     */
    let jsonObj = await response.json();

    let quiz = document.querySelector("body > div");

    //Going through the array of questions, one at the time
    jsonObj.questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        // Add the question text
        const questionText = document.createElement('h3');
        questionText.textContent = "" + (index + 1) + ". " + question.question; //variable.parameter
        questionDiv.appendChild(questionText);

        // Add the options as radio buttons, one at the time
        question.options.forEach(option => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = "question" + index;
            optionInput.value = option;

            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));

            questionDiv.appendChild(optionLabel);
            questionDiv.appendChild(document.createElement('br')); // Line break after each option
        });

        // Append the question div to the quiz container
        quiz.appendChild(questionDiv);
    });

    //button for score
    const score = document.createElement('div')
    score.id = "score_div"

    const submitButton = document.createElement('button');
    submitButton.id = "btn";
    submitButton.textContent = 'Submit Quiz';
    submitButton.onclick = checkAnswers;
    score.appendChild(submitButton);

    // Add a div to display the score
    const scoreDiv = document.createElement('div');
    scoreDiv.id = 'score';
    score.appendChild(scoreDiv);
    const emptyscore = document.createElement('div');
    score.appendChild(emptyscore);
    quiz.appendChild(score);

    // function to check the answers
    function checkAnswers() {
        let score = 0;

        //Going through the array of questions, one at the time
        jsonObj.questions.forEach((question, index) => {
            /**
             * @type {HTMLInputElement[]}
             */
            let color_toggle=false
            const selectedOption = document.querySelectorAll('input[name="question' + index + '"]');
            for (const key in selectedOption) {
                const element = selectedOption[key]  //declare a variable that is equal to the index of the option itself
                if (parseInt(key) === question.answer && element.checked) {
                    score++
                    color_toggle=true
                }
            }
            if (color_toggle) {
                document.querySelectorAll(".question")[index].style.backgroundColor = "green"
            }else{
                document.querySelectorAll(".question")[index].style.backgroundColor = "red"
            }
            /* document.querySelectorAll(".question")[index].style.backgroundColor = selectedOption.som§e((element, index) => {
                return index === question.answer && element.checked
            }) ? "green" : "red" */
        });

        // Display the score
        const scoreDiv = document.getElementById('score');
        scoreDiv.textContent = "Your score: " + score + " out of " + jsonObj.questions.length;
    }

}
data()