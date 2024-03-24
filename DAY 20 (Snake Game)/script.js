let arrSnake = [{x : 10,y : 10}];

const Positionfood = () =>{
    let x = Math.floor(Math.random() * 21);
    let y = Math.floor(Math.random() * 21);
    return {x,y};
}

let foodPosition = Positionfood();

const Drawfood = () =>{
    let newDiv = document.createElement("div");
    newDiv.className = "food"
    newDiv.style.gridColumn =  foodPosition.x
    newDiv.style.gridRow = foodPosition.y
    document.querySelector("#Map").appendChild(newDiv);
}

const Drawbody = () =>{
    arrSnake.forEach(element =>{
        let newDiv = document.createElement("div");
        newDiv.className = "Snakebody"
        newDiv.innerHTML = "."
        newDiv.style.gridColumn =  element.x
        newDiv.style.gridRow = element.y
        document.querySelector("#Map").appendChild(newDiv);
    })
    
}

const Draw = () =>{
    document.getElementById('Map').innerHTML = ''
    Drawbody();
    Drawfood();
}
const Movement = (direction) =>{
    let head = {...arrSnake[0]}
    switch (direction) {
        case 'right':
            head.x++;
            if (head.x > 20){
                head.x = 1;
            }
            break;
        case 'left':
            head.x--;
            if (head.x <= 0){
                head.x = 20
            }
            break;
        case 'up':
            head.y--;
            if (head.y < 1){
                head.y = 20;
            }
            break;
        case 'down':
            head.y++;
            if (head.y > 20){
                head.y = 1;
            }else if (head.x < 0){
                head.y = 20
            }
            break; 
    }
    arrSnake.unshift(head);
    arrSnake.pop();
    
}
setInterval(() =>{
    Movement('right');
    Draw();
},400)
/* const Move = () =>{
    let a = ''
    setInterval(() => {
        document.onkeydown = function(event) {
            switch (event.keyCode) {
                case 37:
                    if (a != 'right'){
                        a = 'left'
                    } 
                    break;
                case 38:
                    if (a != 'down'){
                        a = 'up';
                    }
                break;
                case 39:
                    if (a != 'left'){
                        a = 'right';
                    }
                break;
                case 40:
                    if (a != 'up'){
                         a = 'down';
                    }
               break;
            }
        }
        Movement(a);
        Draw();
    }, 200);
}

Move();
*/




