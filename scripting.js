

audio = new Audio("carol.opus");
skrik = new Audio("skrik.opus");
let scaryTime = false

function playTheShizz() {
    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
}


function blackAndWhite(image) {
    image.style.filter = "grayscale(100%)";
}

function restoreColor(image) {
    image.style.filter = "grayscale(0%)";
}

function blackAndWhiteBlink(image) {
    blackAndWhite(image);
    setTimeout(function() {
        restoreColor(image);
    }, 50);
}

var img = document.getElementById("my-image");

const duration = 1000;

var currentImage = 0;


setInterval(function() {
    if (scaryTime) {
        return
    }
  // Toggle between the images
    switch (currentImage) {
        case 0:
            // normalt bilde:
            break
        case 1:
            // blinnk 1
            img.src = "Christmas Spook.png";
            break
        case 2:
            // blinkn 2
            img.src = "Christmas FIXSpook.png";
            break
        case 3: 
            img.src = "spooklights2.png"
            // set tilbake til normalt bilde
            break
        case 4:
            blackAndWhiteBlink(img)    
            break         
    }
    currentImage = (currentImage + 1) % 5;

}, duration); 


function jumpScare() {
    scaryTime = true
    gammeltBilde = img.src
    img.src = "JukmpscareNew.png"
    skrik.play()
    setTimeout(function (){
        scaryTime = false
        img.src = gammeltBilde
    }, 3000)

}
