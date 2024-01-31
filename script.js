// Parallax Code
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);

const btn = document.getElementById("back");
btn.addEventListener('click',()=>{
        history.back();
})