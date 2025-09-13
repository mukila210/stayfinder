
/**********************register form*******************************/

  const getStartBtn = document.querySelector(".getStartBtn");
  const registerForm = document.querySelector(".registerForm");
  const close = document.querySelector(".close");

    getStartBtn.addEventListener("click",() =>{
     registerForm.classList.remove("d-none");
    });

    close.addEventListener("click",() =>{
     registerForm.classList.add("d-none");
    });


/***********************login form*******************************/

  const getLoginBtn = document.querySelector(".getLoginBtn");
  const loginForm = document.querySelector(".loginForm");
  const lClose = document.querySelector(".lClose");

    getLoginBtn.addEventListener("click",(e) =>{
      e.preventDefault();
     loginForm.classList.remove("d-none");
    });

    lClose.addEventListener("click",() =>{
     loginForm.classList.add("d-none");
    });


/**********************signup form*********************/

  const getSignupBtn = document.querySelector(".getSignupBtn");
  const signupForm = document.querySelector(".signupForm");
  const sClose = document.querySelector(".sClose");

    getSignupBtn.addEventListener("click",() =>{
      
     signupForm.classList.remove("d-none");
    });

    sClose.addEventListener("click",() =>{
     signupForm.classList.add("d-none");
    });


  
  




    
  
  



/**********************listings fetch*******************************/ 


document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:5000/api/listings')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const container = document.getElementById('listingContainer');
      container.innerHTML = ''; 

      data.forEach(listing => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card h-100';
        card.innerHTML = `
    
          
          <img src="${listing.image}" class="card-img-top" style="height:200px; object-fit:cover;" alt="${listing.type}"/>
          <div class="card-body">
            <h5 class="card-title">${listing.city}</h5>
            <p class="card-text">${listing.type}</p>
            <p class="card-text"><strong>${listing.price}</strong></p>
            <p class="card-text">${listing.date}</p>
            <a href="book1.html?roomId=${listing.id}" class="btn btn-primary">Book Now</a>
          </div>
              
          
        `;

        col.appendChild(card);
        container.appendChild(col);
      });
    })
    .catch(error => {
      console.error('Error loading listings:', error);
    });
});


/**********************register fetch*******************************/


document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("registerId").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword5").value;

  
  fetch("http://127.0.0.1:5000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password })  
  })
  .then((res) => res.json())
  .then((data) => {
    if(data.message) {
      alert("Registered Successfully!");
    } else {
      alert("Registered failed.");
    }
  })
  .catch((err) => {
    console.error("Error:", err);
    alert("Something went wrong");
  });
});


/**********************login fetch*******************************/


document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("loginId").value;
  const password = document.getElementById("loginPassword5").value;

  
  fetch("http://127.0.0.1:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })  
  })
  .then((res) => res.json())
  .then((data) => {
    if(data.message) {
      alert("Login success!");
    } else {
      alert("Login failed.");
    }
  })
  .catch((err) => {
    console.error("Error:", err);
    alert("Something went wrong");
  });
});



/**********************signup fetch*******************************/

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("signupId").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword5").value;

  
  fetch("http://127.0.0.1:5000/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password })  
  })
  .then((res) => res.json())
  .then((data) => {
    if(data.message) {
      alert("Signup success!");
    } else {
      alert("Signup failed.");
    }
  })
  .catch((err) => {
    console.error("Error:", err);
    alert("Something went wrong");
  });
});



/**********************checking fetch*******************************/


document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;

  fetch("http://localhost:5000/api/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      checkin,
      checkout,
      adults,
      children
    })
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message || "Submitted successfully!");
    })
    .catch((err) => {
      console.error("Submission failed:", err);
      alert("Submission failed. Try again.");
    });
});





    




