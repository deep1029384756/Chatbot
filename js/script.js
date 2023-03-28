const chatBot = document.querySelector(".chatbot");
const button = document.querySelector(".button");
const input = document.querySelector(".input");
const send = document.querySelector(".chatbot__send");
const chatbotDisplay = document.querySelector(".chatbot__display");
const remove = document.querySelector(".chatbot__remove");

//show chatbot
button.addEventListener("click", () => {
    //input.disabled = true;
//    askInfo();
input.focus()
chatBot.classList.toggle("show");
});
askInfo();
/// ask info
function askInfo(){
    input.disabled = true;
    input.classList.add("add")
    let chatBox1 = document.createElement("div");
      chatBox1.classList.add("chat-box1");
      chatbotDisplay.append(chatBox1);
      let info = document.createElement("div");
      info.classList.add("t-div")
     info.textContent = "Hello User,are you looking for some information?";
      chatBox1.append(info);
      let yesDiv = document.createElement("div");
      let noDiv = document.createElement("div");
      yesDiv.classList.add("t-div1");
      noDiv.classList.add("t-div1");
      yesDiv.textContent = "Yes";
      noDiv.textContent = "No";
      info.append(yesDiv);
      info.append(noDiv);
      yesDiv.addEventListener("click",()=>{
          callYes();
      })
      noDiv.addEventListener("click",()=>{
           callNo();
      })
}

//if user said yes
function callYes(){
    let chatBox1 = document.createElement("div");
    chatBox1.classList.add("chat-box1");
    chatbotDisplay.append(chatBox1);
    let info = document.createElement("div");
    info.classList.add("t-div")
   info.textContent = "What information you want?";
    chatBox1.append(info);
    let timeDiv = document.createElement("div");
    let tempDiv = document.createElement("div");
    timeDiv.classList.add("t-div1");
    tempDiv.classList.add("t-div1");
    timeDiv.textContent = "Time";
    tempDiv.textContent = "Temperature";
    info.append(tempDiv);
    info.append(timeDiv);
    tempDiv.addEventListener("click",()=>{
        input.disabled = false;
        input.classList.remove("add")
        callTemp(tempDiv);
    })
    timeDiv.addEventListener("click",()=>{
        input.disabled = false;
        input.classList.remove("add")
        callTime(timeDiv);
    })
    chatbotDisplay.scrollTo(0,chatbotDisplay.scrollHeight - chatbotDisplay.offsetHeight)
}

//function to call no
function callNo(){
    let chatBox1 = document.createElement("div");
    chatBox1.classList.add("chat-box1");
    chatbotDisplay.append(chatBox1);
    let chatsL = document.createElement("div");
    chatsL.classList.add("chats-l");
    chatsL.textContent = "Okay, Have a good day!😊";
    chatBox1.append(chatsL);
    chatbotDisplay.scrollTo(0,chatbotDisplay.scrollHeight - chatbotDisplay.offsetHeight)
}


//function for calling time
function callTime(timeDiv){
    input.focus()
    sendText(timeDiv.textContent);
    let chatBox2 = document.createElement("div");
    chatBox2.classList.add("chat-box1");
    chatbotDisplay.append(chatBox2);
    let chatsL = document.createElement("div");
    chatsL.classList.add("chats-l");
    chatsL.textContent = "Enter Place.";
    chatBox2.append(chatsL);
    turn = true;
    turn1 = false;
    timeDiv.disabled = true;
    chatbotDisplay.scrollTo(0,chatbotDisplay.scrollHeight  - chatbotDisplay.offsetHeight)
}

function callTemp(tempDiv){
       input.focus()
        sendText(tempDiv.textContent);
        let chatBox2 = document.createElement("div");
        chatBox2.classList.add("chat-box1");
        chatbotDisplay.append(chatBox2);
        let chatsL = document.createElement("div");
        chatsL.classList.add("chats-l");
        chatsL.textContent = "Enter Place.";
        chatBox2.append(chatsL);
        turn1 = true;
        turn = false;
        tempDiv.disabled = true;
        chatbotDisplay.scrollTo(0,chatbotDisplay.scrollHeight - chatbotDisplay.offsetHeight)
}

//remove chatbot
console.log(remove)
remove.addEventListener("click",()=>{
    chatBot.classList.toggle("show")
})

let turn = false;
let turn1 = false;
//send text to bot
console.log(input);
function sendText(value) {
  document.querySelector(".chatbot__status").textContent = "online"
  input.focus()
  console.log(value);
  if (value === "") return;
  else {
    let chatBox = document.createElement("div");
    chatBox.classList.add("chat-box");
    chatbotDisplay.append(chatBox);
    let chats = document.createElement("div");
    chats.classList.add("chats");
    chats.textContent = value;
    chatBox.append(chats);
    input.value = "";
    setTimeout(respond(value), 10000);
    if (turn) {
        turn= false;
      getTime(value);

    }
    if (turn1) {
        turn1 = false;
      getTemp(value);
    }
  }
  
}
send.addEventListener("click", (e) => {
  sendText(input.value);
  chatbotDisplay.scrollTo(0,chatbotDisplay.scrollHeight - chatbotDisplay.offsetHeight)
});
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendText(input.value);
    chatbotDisplay.scrollTo(0,chatbotDisplay.scrollHeight - 350)
  }
});

//respond to user
function respond(value) {
    input.focus()
  let val = value.toLowerCase();
   console.log(val)
  let re = "hi".toLowerCase();
  let re1 = "hello".toLowerCase();
  var respondValue = "";
  if (val.indexOf(re) > -1 || val.indexOf(re1) > -1) {
    respondValue = "Hello, Are you looking for some information?";
  }
  
  if (respondValue == "") {
    if(value.toLowerCase().indexOf("Yes".toLowerCase()) > -1) {
      let chatBox1 = document.createElement("div");
      chatBox1.classList.add("chat-box1");
      chatbotDisplay.append(chatBox1);
      let info = document.createElement("div");
      info.classList.add("t-div")
     info.textContent = "What information you want?";
      chatBox1.append(info);
      let timeDiv = document.createElement("div");
      let tempDiv = document.createElement("div");
      timeDiv.classList.add("t-div1");
      tempDiv.classList.add("t-div1");
      timeDiv.textContent = "Time";
      tempDiv.textContent = "Temperature";
      info.append(tempDiv);
      info.append(timeDiv);
      //  show time
      timeDiv.addEventListener("click", () => {
        input.focus()
        sendText(timeDiv.textContent);
        let chatBox2 = document.createElement("div");
        chatBox2.classList.add("chat-box1");
        chatbotDisplay.append(chatBox2);
        let chatsL = document.createElement("div");
        chatsL.classList.add("chats-l");
        chatsL.textContent = "Enter Place.";
        chatBox2.append(chatsL);
        turn = true;
        turn1 = false;
        timeDiv.disabled = true;
        chatbotDisplay.scrollTo(0,chatbotDisplay.scrollHeight  - chatbotDisplay.offsetHeight)
      });
      tempDiv.addEventListener("click", () => {
        input.focus()
        sendText(tempDiv.textContent);
        let chatBox2 = document.createElement("div");
        chatBox2.classList.add("chat-box1");
        chatbotDisplay.append(chatBox2);
        let chatsL = document.createElement("div");
        chatsL.classList.add("chats-l");
        chatsL.textContent = "Enter Place.";
        chatBox2.append(chatsL);
        turn1 = true;
        turn = false;
        tempDiv.disabled = true;
        chatbotDisplay.scrollTo(0,chatbotDisplay.scrollHeight - chatbotDisplay.offsetHeight)
      });
    }
    //     let chatBox1 = document.createElement("div");
    //   chatBox1.classList.add("chat-box1");
    //   chatbotDisplay.append(chatBox1);
    //   let info = document.createElement("div");
    //   info.classList.add("t-div")
    //  info.textContent = "Are you sure? Little information wont hurt you.";
    //   chatBox1.append(info);
    // }
  } else {
    let chatBox1 = document.createElement("div");
    chatBox1.classList.add("chat-box1");
    chatbotDisplay.append(chatBox1);
    let chatsL = document.createElement("div");
    chatsL.classList.add("chats-l");
    chatsL.textContent = respondValue;
    chatBox1.append(chatsL);
    input.focus()
  }
}

// var city = 'dubai'
let timezone = "";
function getTime(city) {
    document.querySelector(".chatbot__status").textContent = "online"
    input.focus()
  //get timezone
  turn = false;
  if(city==="Temperature") return;
  fetch("https://api.api-ninjas.com/v1/timezone?city=" + city, {
    headers: { "X-Api-Key": "P8WFquJCLgPS2Zne3/hYDA==F3mmZEDgTCzmVlIK",
    "Access-Control-Allow-Origin": "*"},
    contentType: "application/json",
  })
    .then((result) => result.json())
    .then((data) => {
      //get time
      console.log(data.timezone);
      var time = new Date().toLocaleString("en-US", {
        timeZone: data.timezone,
        timeStyle: "medium",
        hourCycle: "h24",
      });
      let chatBox1 = document.createElement("div");
      chatBox1.classList.add("chat-box1");
      chatbotDisplay.append(chatBox1);
      let chatsL = document.createElement("div");
      chatsL.classList.add("chats-l");
      if(typeof data.timezone === "undefined"){
        chatsL.textContent = "Sorry, Unable to find city.";
      }
      else{
        chatsL.textContent = `The timezone of ${city} is ${data.timezone}, So the time is ${time}`;
      }
      chatBox1.append(chatsL);
      chatbotDisplay.scrollTo(0,chatbotDisplay.scrollHeight - chatbotDisplay.offsetHeight)
    });
    setTimeout(()=>askInfo1(),5000);
}

//get temprature
const getTemp = async(city)=> {
    document.querySelector(".chatbot__status").textContent = "Online"
    input.focus()
  turn1 = false;
  if(city==="Time") return;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3379a703400d0a116e40ef9d8bde5528`
  )
    .then((res) => res.json())
    .then((data) => {
      let chatBox1 = document.createElement("div");
      chatBox1.classList.add("chat-box1");
      chatbotDisplay.append(chatBox1);
      let chatsL = document.createElement("div");
      chatsL.classList.add("chats-l");
      if(typeof data.main === "undefined")
      chatsL.textContent = "Sorry,unale to find city.";
      else{
        //console.log(data.Status)
        var temp = data.main.temp - 273.15;
        temp = Math.round(temp * 100) / 100;
        chatsL.textContent = `The temperature of ${city} is ${temp} C`;
      }
       chatBox1.append(chatsL);
      chatbotDisplay.scrollTo(0,chatbotDisplay.scrollHeight - chatbotDisplay.offsetHeight)
    });
      setTimeout(()=>askInfo1(),5000);
}


//againask
function askInfo1(){
    input.disabled = true;
    input.classList.add("add")
    input.focus()
    //chatBot.classList.toggle("show");
    let chatBox1 = document.createElement("div");
      chatBox1.classList.add("chat-box1");
      chatbotDisplay.append(chatBox1);
      let info = document.createElement("div");
      info.classList.add("t-div")
     info.textContent = "Do you want more info?";
      chatBox1.append(info);
      let yesDiv = document.createElement("div");
      let noDiv = document.createElement("div");
      yesDiv.classList.add("t-div1");
      noDiv.classList.add("t-div1");
      yesDiv.textContent = "Yes";
      noDiv.textContent = "No";
      info.append(yesDiv);
      info.append(noDiv);
      chatbotDisplay.scrollTo(0,chatbotDisplay.scrollHeight - chatbotDisplay.offsetHeight)
      yesDiv.addEventListener("click",()=>{
          callYes();
      })
      noDiv.addEventListener("click",()=>{
        callNo()
      })
}
//typing
input.addEventListener("input",()=>{
    document.querySelector(".chatbot__status").textContent = "typing.."
    document.querySelector(".chatbot__status").textContent = "online"
})
