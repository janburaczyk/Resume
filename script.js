function rozwin(b){
    const el = b.parentElement.nextElementSibling
    el.classList.toggle("ukryty")
    if (el.classList.contains("ukryty")){
        b.textContent = "Expand"
    }
    else {
        b.textContent = "Collapse"
    }
}