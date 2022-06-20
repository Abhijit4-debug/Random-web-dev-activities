document.getElementById("fea-btn").addEventListener("click", myFunction);
document.getElementById("serv-btn").addEventListener("click", myFunction1);
document.getElementById("btn").addEventListener("click", myFunction2);




function myFunction() {
    f=document.getElementById("feat-show");
    f.classList.toggle("show");

  }

function myFunction1() {
    f=document.getElementById("serv-show");
    f.classList.toggle("show1");

  }

  function myFunction2(){
      this.classList.toggle("click");
      f=document.querySelector(".sidebar");
      f.classList.toggle("show");


}

