// script.js
//typer
var TxtType = function(el, toRotate, period) 
{
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() 
{
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) 
    {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } 
    else 
    {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) 
    { 
        delta /= 2; 
    }

    if (!this.isDeleting && this.txt === fullTxt) 
    {
        delta = this.period;
        this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt === '') 
    {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500; 
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() 
{
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) 
    {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) 
        {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #0f0}";
    document.body.appendChild(css);
};
//typer end

//flash
window.addEventListener("load", function() 
{
    var f = document.getElementById('flash_text');
    setInterval(function() 
    {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 500);
}, false);

window.addEventListener("load", function() 
{
    var f = document.getElementById('flash_text_750');
    setInterval(function() 
    {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 750);
}, false);
//flash end

//page
function pg()
{
    var Total_Obj = document.getElementsByTagName("INPUT");
    var Str = "";
    for (var i = 0; i < Total_Obj.length; i++) {
        if (Total_Obj[i].type == "radio") {
            if (Total_Obj[i].checked) {
                if (Str == "") {
                    Str = Total_Obj[i].value;
                } else {
                    Str += Total_Obj[i].value;
                }
            }
        }
    }
    window.location.replace("../"+Str+"/index.html");
}

// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("sitconct");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 

function clkpic(){
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("modalimg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }
}