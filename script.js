var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}


function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("щодня я не можу повірити, як мені пощастило", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("щодня я не можу повірити, як мені пощастило", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["серед трильйонів і трильйонів зірок,", "протягом мільярдів років"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("серед трильйонів і трильйонів зірок, протягом мільярдів років", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["серед трильйонів і трильйонів зірок,", "протягом мільярдів років"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("серед трильйонів і трильйонів зірок, протягом мільярдів років", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("бути живим і провести це життя з тобою", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("бути живим і провести це життя з тобою", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("важко уявити наскільки це малоймовірно", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("важко уявити наскільки це малоймовірно", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["і все ж я був тут, щоб отримати неможливий ", "шанс познайомитися з тобою ближче"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("і все ж я був тут, щоб отримати неможливий шанс познайомитися з тобою", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["і все ж я був тут, щоб отримати неможливий ", "шанс познайомитися з тобою ближче"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("і все ж я був тут, щоб отримати неможливий шанс познайомитися з тобою", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 2750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Настя, я так сильно тебе кохаю, більше, ніж", "час та простір, який може вмістити Всесвіт"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Настя, я так сильно тебе кохаю, більше, ніж час та простір, який може вмістити Всесвіт", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber > 2750 && frameNumber < 3000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Настя, я так сильно тебе кохаю, більше, ніж", "час та простір, який може вмістити Всесвіт"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Настя, я так сильно тебе кохаю, більше, ніж час та простір, який може вмістити Всесвіт", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }
    if(frameNumber == 3000){
        opacity = 0;
    }
    if(frameNumber >= 3000 && frameNumber < 3250){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks([" я не можу дочекатися, коли зможу провести", "весь час у світі ділячись цим коханням з тобою!"], canvas.width / 2, (canvas.height/2 ), fontSize, lineHeight);
        } else {
            context.fillText("і я не можу дочекатися, коли зможу провести весь час у світі, ділячись цим коханням з тобою!", canvas.width/2, canvas.height/2);
        }

        secondOpacity = secondOpacity + 0.01;
    }
    if(frameNumber > 3250 && frameNumber < 3500){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["я не можу дочекатися, коли зможу провести", "весь час у світі ділячись цим коханням з тобою!"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("і я не можу дочекатися, коли зможу провести весь час у світі, ділячись цим коханням з тобою!", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }
    if(frameNumber == 3500){
        opacity = 0;
    }
    if(frameNumber >= 3500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        drawTextWithLineBreaks([" З днем святого Валентина <3", "ВІД САШІ МАЛЮКА!"], canvas.width / 2, canvas.height/2, fontSize, lineHeight);

        thirdOpacity = thirdOpacity + 0.01;

    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
    
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);