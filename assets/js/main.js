document.querySelector("#menu").addEventListener("click", ()=>{
    document.querySelector("#nav").classList.add("flex")
    document.querySelector("#nav").classList.remove("hidden")
})


document.querySelector("#close").addEventListener("click", ()=>{
    document.querySelector("#nav").classList.add("hidden")
    document.querySelector("#nav").classList.remove("flex")
})