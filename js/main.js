// Header Scroll
let nav = document.querySelector(".navbar");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");

    }
}

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// read more section 
let read_more_btn = document.querySelectorAll('.read-more-btn');
let read_more_content = document.querySelectorAll('.read-more-content');
read_more_content = Array.from(read_more_content);

read_more_btn.forEach((ele, index) => {
    ele.addEventListener("click", () => {
        if (read_more_content[index].style.display == "inline") {
            read_more_content[index].style.display = "none";
            ele.innerHTML = `Read more <i
            class="fas fa-arrow-right"></i>`
        } else {
            read_more_content[index].style.display = "inline";
            ele.innerHTML = `Read less <i
            class="fas fa-arrow-left"></i>`
        }
    })
})
