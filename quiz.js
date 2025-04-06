var myquestions = [
    {
        question: "What are cookies?",
        answers: {
            a: 'A tasty baked good!',
            b: 'Small pieces of data used to identify your device as you use a network',
            c: 'Large pices of data that are always written on the hard drive'
        },
        correctanswer: 'b'
    },

    {
        question: "What is a common security issue with cookies?",
        answers: {
            a: 'Companies track and sell your data through cookies',
            b: 'Improving usability by knowing device type',
            c: 'Remembering user preferences'
        },
        correctanswer: 'a'
    },
    
    {
        question: "How can you protect yoursef from cookies?",
        answers: {
            a: "Accept cookies without reading a website's policies first",
            b: "Read a website's policies before accepting and remove cookies in you broswer settings",
            c: "Don't keep track of wesbites that have access to your information"
        },
        correctanswer: 'b'
    }

];


function generateQuiz(questions, quizcontainer, resultscontainer, submitbutton){
    function showquestions(questions, quizcontainer){

        //storing output and answer choice
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){

            //for each question
            answers = [];

            //for each available answer
            for(letter in questions[i].answers){

                //radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    +'</label>'
                );
            }

            //add question and answers to output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizcontainer.innerHTML = output.join('');
    }

    function showresults(questions, quizcontainer, resultscontainer){
        //gather answer containers from quiz
        var answercontainers = quizcontainer.querySelectorAll('.answers');

        //keep track of user answers
        var useranswer = '';
        var numcorrect = 0;

        //for each question
        for (var i=0; i<questions.length; i++){

            //find selected answer
            useranswer = (answercontainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            //if answer is correct
            if(useranswer==questions[i].correctanswer){
                //add to the number of correct answers
                numcorrect++;
                //color answers green
                answercontainers[i].style.color = 'darkgreen';

            }

            //if answer is wrong
            else{
                //color answers red
                answercontainers[i].style.color = 'red'
            }
        }

        resultscontainer.innerHTML = numcorrect + ' out of ' + questions.length;
    }

    showquestions(questions, quizcontainer);

    //on submit, show results
    submitbutton.onclick = function(){

        showresults(questions, quizcontainer, resultscontainer);

    }
}

//tell js which html elements to use fir quiz, results, and submit button
var quizcontainer = document.getElementById('quiz');
var resultscontainer = document.getElementById('results');
var submitbutton = document.getElementById('submit');

generateQuiz(myquestions, quizcontainer, resultscontainer, submitbutton);
