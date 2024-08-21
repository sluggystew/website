// This is the main file for the jack the snake minigame
//
const radius = 30;
const speed = 75;

// TODO how to import files in static files
// var styleSheet = document.createElement("style");
// styleSheet.setAttribute("src", "main.css");
// document.head.appendChild(styleSheet);

const svg = document.getElementById("jack-snake")
const head = svg.querySelector("#jack-snake-head");
console.log(head);

svg.style.position = "absolute";
svg.style.zIndex = -1;
head.setAttribute('cx', radius);
head.setAttribute('cy', radius);
head.setAttribute('r', radius);

var mouse_x = 500;
var mouse_y = 500;

var speed_x = 0;
var speed_y = 0;

var pos_x = 50;
var pos_y = 50;

var goal_x = mouse_x;
var goal_y = mouse_y;

setInterval(set_goal, 500);
//
function set_goal() {
//     if ((mouse_x > window.innerWidth) || (mouse_y > window.innerHeight) || (mouse_x < 0) || (mouse_y < 0)) {
//         goal_x = Math.random()*window.innerWidth;
//         goal_y = Math.random()*window.innerHeight;
//     } else {
//       goal_x = mouse_x
//       goal_y = mouse_y
//     }
//     // console.log("X:"+goal_x+" Y:"+goal_y+"\nWINDOW ");
//     // console.log("X:"+window.innerHeight+" Y:"+window.innerWidth);
    var out_now = false;
    if ((mouse_x > 500) || (mouse_y > 500) || (mouse_x < 0) || (mouse_y < 0)) {
        out_now = true;
    }
    console.log(out_now, moved_out);

    // moved out this frame
    if (out_now && !moved_out) {
        console.log("random");
        goal_x = Math.random()*window.innerWidth;
        goal_y = Math.random()*window.innerHeight;
    } else if (moved_out && goal_reached()) {
    }
    // is in frame
    moved_out = out_now;
}

var moved_out = false;

addEventListener("mousemove", (event) => {
      goal_x = event.pageX;
      goal_y = event.pageY;
    console.log("movin");
});

addEventListener("mouseleave", (event) => {
    goal_x = event.pageX;
    goal_y = event.pageY;
    console.log("mouse leave");
});

var lastTime = document.timeline.currentTime;
var mag;

function gameLoop(currTime) {
    if (currTime === undefined) currTime = 0;
    const deltaTime = (currTime - lastTime) / 1000.0;

  // Update the game state
 // goal_x = event.pageX;
 // goal_y = event.pageY;

    mag = Math.sqrt(Math.pow(pos_x, 2) + Math.pow(pos_y, 2));
    // console.log(currTime, lastTime, deltaTime, mag); 
    pos_x += (goal_x - pos_x) / (mag * 0.5) * speed * deltaTime
    pos_y += (goal_y - pos_y) / (mag * 0.5) * speed * deltaTime
    // console.log("Pos x = "+pos_x+", y = "+pos_y); 
    // throw new Error("asser failed");

  // Draw the game state
    svg.style.left = `${pos_x - radius}px`; // Set the left position
    svg.style.top = `${pos_y - radius}px`; // Set the top position
    // if ((mouse_x > window.innerWidth) || (mouse_y > window.innerHeight) || (mouse_x < 0) || (mouse_y < 0)) {
    // }

    lastTime = currTime;
  // Schedule the next iteration of the loop
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
