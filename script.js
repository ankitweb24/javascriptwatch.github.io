document.documentElement.style.setProperty('--animate-duration', '3s');

var progressstatus = document.getElementById('progressbar');
var percent = document.getElementById('percent');
var totalheight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    var progress = (window.pageYOffset / totalheight) * 100;
    progressstatus.style.height = progress + "%";
    percent.innerHTML = Math.round(progress) + "%";
}
var type = new Typed('#typed', {
    stringsElement: '#items',
    typeSpeed: 30,
    startDelay: 1000,
    backSpeed: 10,
    loop: true,
    loopCount: 1000
});

// clock javascript code
function clock() {
    var hr = document.getElementById('hour');
    var mn = document.getElementById('miniuts');
    var sc = document.getElementById('seconds');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hr.innerHTML = h;
    mn.innerHTML = m;
    sc.innerHTML = s;
}
var set_room = setInterval(clock, 1000);


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}