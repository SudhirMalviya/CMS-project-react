






window.addEventListener("scroll", function() {
    var menu = document.getElementById("menu");
    if (window.scrollY > 90) {
      menu.classList.add("scrolled");
    } else {
      menu.classList.remove("scrolled");
    }
  });



  function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = (sidebar.style.width === '80px' || sidebar.style.width === '') ? '200px' : '80px';
}





// cursur animation--------------------------



// $(document).ready(function () {
//   var canvas = document.querySelector(".js-canvas");
//   var ctx = canvas.getContext("2d");
//   var stars = [];

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   canvas.addEventListener("mousemove", function (e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     var speed = 1 + Math.random() * 3; // Adjust the speed as needed
//     var size = 4;
//     var opacity = Math.random();

//     stars.push({ x, y, size, speed, opacity });
//   });

//   function drawStars() {
//     for (var i = 0; i < stars.length; i++) {
//       var star = stars[i];
//       ctx.fillStyle = `rgba(255, 215, 0, ${star.opacity}`; // Gold with variable opacity
//       ctx.beginPath();
//       ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
//       ctx.fill();

//       star.y += star.speed; // Move stars downward
//       star.opacity -= 0.01; // Decrease the opacity for each frame

//       if (star.opacity <= 0) {
//         stars.splice(i, 1); // Remove stars when their opacity becomes zero
//         i--;
//       }
//     }
//   }

//   function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawStars();
//   }

//   animate();
// });