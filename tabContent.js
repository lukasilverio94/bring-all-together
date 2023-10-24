const btns = document.querySelectorAll(".tab-btn"); //get buttons
const about = document.querySelector(".about"); //
//target articles
const articles = document.querySelectorAll(".content");

//add event listener to about
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id; //set data when click only at button!
  if (id) {
    //remove active from all butons
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //Hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    //element linked to your respective id (each article)
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
