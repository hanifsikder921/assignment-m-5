document.getElementById("backButton").addEventListener("click",function(){

    window.location.href="index.html";
});




const questionContainer=document.getElementById("questionContainer");

const questions = [
    {
        question: "What are the different ways to select an element in the DOM?",
        answer: "There are many ways to select elements in the DOM, such as using querySelector, querySelectorAll, getElementsByTagName, getElementsByClassName, and getElementById"
    },

    {
        question: "What is the difference between innerHTML, innerText, and textContent ?",
        answer: " innerHTML: innerHTML  Return a full Sets of Html Element where include any types of Html Tags and all property . \ninnerText: innerText return a visible text content which text visible to fontend site if any item is hidden in his own tags  this item not showing in innerText. \ntextContent: textContent show all text include his tag . if any item hidden his own tag text content is showing visible text with hidden text ."
    },
    {
        question: "What is event delegation in the DOM?",
        answer: " "
    },
    {
        question: "What is event bubbling in the DOM?",
        answer: " "
    },
    {
        question: "How do you create, add, and remove elements using JavaScript?",
        answer: " "
    },

]

let questionNumber = 1; 
for (const question of questions) {
    const questionDiv = document.createElement("div");
    questionDiv.className = "bg-white p-6 rounded-lg shadow-md my-4";

    const questionHeading = document.createElement("h3");
    questionHeading.className = "text-xl font-bold";
    questionHeading.innerText = `Question-${questionNumber}: ${question.question}`;

    
    const hr = document.createElement("hr");
    hr.className = "my-1";

 
    const questionAnswer = document.createElement("p");
    questionAnswer.className = "text-lg w-11/12";
    questionAnswer.innerText = question.answer;

   
    questionDiv.appendChild(questionHeading);
    questionDiv.appendChild(hr);
    questionDiv.appendChild(questionAnswer);

   
    questionContainer.appendChild(questionDiv);

    questionNumber++; 
}