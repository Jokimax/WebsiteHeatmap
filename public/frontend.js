document.addEventListener("click", async function(e) {
    x_pos = parseInt(e.clientX*(800/window.innerWidth))
    y_pos = parseInt(e.clientY*(600/window.innerHeight))
    e.preventDefault()
    await fetch("http://localhost:3000/",
    {        
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            x: x_pos,
            y: y_pos
        })
    })
});