var firstimage  = $('#image').first();
firstimage.css('border-radius','1000px');

function align(){
    var f = document.getElementById('bottomalign');
    document.getElementById('bottomalign').style.position = "absolute";
}
align();


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// Dropdown NavBar
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  // Cat API

  let generate_btn = document.querySelector(".generate_btn");

  generate_btn.addEventListener("click", fetchPics);

  function fetchPics(){

      fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then((data) => {
          let catsImgUrl = data[0].url
          let catsImgEl = document.createElement("img")
          catsImgEl.setAttribute('src', `${catsImgUrl}`)

          let catsImagDiv = document.querySelector(".catsImagDiv")
          catsImagDiv.appendChild(catsImgEl)
      })
      .catch(err => console.log(err))
  }