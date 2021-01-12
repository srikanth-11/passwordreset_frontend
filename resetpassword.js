


let password = document.getElementById("password");

let resetButton = document.querySelector(".resetButton");


let checkOnSubmit = async () => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("key");
    console.log(token);
    try {
      console.log(token)
            let data = await fetch("http://localhost:3000/reset", {
                // Adding method type
                method: "PUT",

                // Adding body or contents to send
                body: JSON.stringify({
                    token,
                    password:password.value
                }),

                // Adding headers to the request
                headers: {
                    "Content-type": "application/json",
                },
            });
            console.log(data)
            let jsonData = await data.json();
          
    } catch (err) {
        console.log(err);
    }
}

(function ()  {
 let form = document.querySelector("#resetPasswordForm");
	

	form.addEventListener("input", (e) => {
		if ( password.value.length > 0) {
			resetButton.removeAttribute("disabled");
		} else {
			resetButton.setAttribute("disabled", "disabled");
		}
	});

 form.addEventListener("submit", checkOnSubmit);
 form.addEventListener("submit", function(){

    let loginButtonDiv = document.querySelector("#resbutton");

    loginButtonDiv.innerHTML = `<button class=" w-100 btn btn-outline-primary py-2" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>`;
  form.reset()
 })
 
 
})();

