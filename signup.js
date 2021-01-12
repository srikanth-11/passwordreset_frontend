
let email = document.getElementById("username");

let password = document.getElementById("password");

let registerButton = document.querySelector(".registerButton");

let displayMsgModal = (msg) => {
 let msgModalContainer = document.createElement("div");
 msgModalContainer.classList.add("msg-modal-container");
 msgModalContainer.id = "msg-modal-container";

 let msgModalContent = document.createElement("div");
 msgModalContent.classList.add("msg-modal-content");
 msgModalContent.innerHTML = msg;

 let modalCloseBtn = document.createElement("div");
 modalCloseBtn.classList.add("modal-close-btn");
 modalCloseBtn.innerHTML = "close";

 msgModalContent.append(modalCloseBtn);

 msgModalContainer.append(msgModalContent);
 document.body.append(msgModalContainer);

 modalCloseBtn.onclick = () => {
   msgModalContainer.style.display = "none";
 };
 setTimeout(() => {
   msgModalContainer.remove();
 }, 4000);
};


let checkOnSubmit = async (e) => {
 try {
    e.preventDefault()
    email = document.getElementById("username");
   


         let user = await fetch("http://localhost:3000/sign_up", {

             // Adding method type 
             method: "POST",

             // Adding body or contents to send 
             body: JSON.stringify({
                 email:email.value,
                 password:password.value
             }),
             

             // Adding headers to the request 
             headers: {
                 "Content-type": "application/json"
             }
         })
         console.log(user)

         let userJson = await user.json();
         
         if(userJson.message=="User Registered Successfully"){
        
        location.href="../index.html"
       
         }
         else if(userJson.message=="user Already exists"){
          location.href="../index.html"
         }
        
         

 }
 catch(err){
      console.log(err)    
 }
}

(function ()  {
	let form = document.querySelector("#signUpForm");

	form.addEventListener("input", (e) => {
		if (email.value.length > 0 && password.value.length ) {
			registerButton.removeAttribute("disabled");
		} else {
			registerButton.setAttribute("disabled", "disabled");
		}
	});

 form.addEventListener("submit", checkOnSubmit);
 form.addEventListener("submit", function(){
  form.reset()
 })
 
 
})();