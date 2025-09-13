const getConfirmBtn = document.querySelector(".getConfirmBtn");
  const confirmForm = document.querySelector(".confirmForm");
  const cClose = document.querySelector(".cClose");

    getConfirmBtn.addEventListener("click",() =>{
      
     confirmForm.classList.remove("d-none");
    });

    cClose.addEventListener("click",() =>{
     confirmForm.classList.add("d-none");
    });




const selectedDateInput = document.getElementById("Date");

const form = document.getElementById('confirmForm');

document.getElementById("confirmForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const username = document.getElementById("bookedName").value;
      const date = selectedDateInput.value;

      const bookingData = {
        username,
        date
      };

      fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      })
      .then(res => {
      if (!res.ok) throw new Error("Booking failed");
      return res.json();
    })
    .then(() => {
      alert(`Thank you ${username}, your stay from ${date} is booked!`);
      form.reset();
      localStorage.clear(); 
    })
    .catch(err => {
      console.error(err);
      alert("Something went wrong");
    });
  });






    
    