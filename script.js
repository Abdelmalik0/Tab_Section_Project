const tabs = document.querySelector(".tabs"); // Use the correct selector for your tabs
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function(btn) {
            btn.classList.remove("live");
        });
        e.target.classList.add("live");

        articles.forEach(function(article) {
            article.classList.remove("live");
        });
        
        const element = document.getElementById(id);
        if (element) { // Check if the element exists
            element.classList.add("live");
        }
    }
});
