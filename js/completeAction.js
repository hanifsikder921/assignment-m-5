

const completeButton = document.querySelectorAll('.completeButton');
let totalTask = completeButton.length;
const assignTask = document.getElementById('assignTask');
assignTask.innerText = totalTask;

const completeTask = document.getElementById('completeTask');
let completeTaskNumber = parseInt(completeTask.innerText);




const historyBox = document.getElementById('historyBox');


if (totalTask > 9) {

    document.getElementById('zero').innerText = "";
}


let taskCount = 0;
for (const button of completeButton) {
    button.addEventListener('click', function (event) {




        const card = button.closest('.bg-gray-100');
        const cardTitle = card.querySelector('h3').textContent;





        const notification = confirm(`You Have Complete The Task  "${cardTitle}`);
        if (notification) {

            const now = new Date();
            const presentTime = now.toLocaleTimeString();


            const historyItem = document.createElement('p');
            historyItem.className = 'bg-gray-100 p-2 rounded-lg';
            historyItem.textContent = `You have completed the task "${cardTitle}" at ${presentTime}`;
            historyBox.appendChild(historyItem);
            button.disabled = true;



            totalTask = totalTask - 1;
            assignTask.innerText = totalTask;
            if (totalTask === 0) {
                assignTask.innerText = "";
            }



            taskCount = taskCount + 1;
            if (taskCount === completeButton.length) {
                alert("You have completed all tasks!");
            }



            completeTaskNumber = completeTaskNumber + 1;
            completeTask.innerText = completeTaskNumber;


        }






    })

}




document.getElementById("clearHistory").addEventListener('click', function () {
    historyBox.innerHTML = ``;
})



function DateSetup() {
    const daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = new Date();
    const dayName = daysName[today.getDay()];
    const monthName = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();

    const dateField=document.getElementById("date");


    if(day<9){
        dateField.innerText = monthName +' 0'+day+', '+year;
    }else{
        dateField.innerText = monthName +' '+day+', '+year;
    }
    document.getElementById("dayName").innerText = dayName+',';
}

DateSetup();

