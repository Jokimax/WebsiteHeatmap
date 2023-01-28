document.addEventListener("click", async function(e) {
    // Convert a press do data that fits within range
    x_pos = parseInt(e.clientX*(800/window.innerWidth))
    y_pos = parseInt(e.clientY*(600/window.innerHeight))
    e.preventDefault()
    // Send data to the backend
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