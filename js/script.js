






var btncount = 0;


function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
    return [x,y]
}



const canvas = document.getElementById('canvas')
canvas.addEventListener('mousedown', function(e) {
    var coordinates = getCursorPosition(canvas, e)
    
    var btn = document.createElement("button")
    const container = document.getElementById('container')
    container.appendChild(btn)
    btncount = btncount +1
    btn.id = btncount.toString() 
    btn.style.backgroundColor = 'red'
    btn.style.width  = "20px"
    btn.style.height  = "20px"
    btn.style.borderRadius = "10px"
    btn.style.position = 'absolute'
    btn.style.left = (coordinates[0]-10).toString()+'px'
    btn.style.top = (coordinates[1]-10).toString()+'px'
})