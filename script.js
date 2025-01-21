const submit = document.getElementById('submit')
const feedbackListUi = document.getElementById('userFeedbackList')
let feedbackList = readFeedbackList()

// if nothing exists an empty array is needed
function readFeedbackList(){
    const feedbackList = JSON.parse(localStorage.getItem("userFeedbackList"));
    if (feedbackList) {
        return feedbackList;
    }
    return [];
}

// so i dont have to fix stuff twice
function renderListElement(userFeedbackItem){
    const listItem = document.createElement('li');
    const contentElementUsername= document.createElement('h1');
    contentElementUsername.textContent = userFeedbackItem.username;
    const contentElementMessage= document.createElement('p');
    contentElementMessage.textContent = userFeedbackItem.message;
    listItem.appendChild(contentElementUsername);
    listItem.appendChild(contentElementMessage);
    feedbackListUi.appendChild(listItem);
}

// only gets called once, when you first enter
function renderFeedbackList(){
    feedbackList.forEach((item, index) => {
        renderListElement(item);
    })
}

function addFeedback(){
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageInput = document.getElementById('message').value;
    const feedbackItem = {username: username, email: email, message: messageInput};
    
    feedbackList.push(feedbackItem);
    localStorage.setItem("userFeedbackList", JSON.stringify(feedbackList));
    renderListElement(feedbackItem);
}

renderFeedbackList();