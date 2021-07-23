Webcam.set({
    width : 300,
    height : 300,
    image_format : 'png',
    png_quality : 90
    });
    
    camera = document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snap(){
    
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id = "capture_img" src ="' + data_uri + '" ></img>';
    });
    }
    
    console.log('ml5 version', ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/p8gMZOD8P/model.json', modelLoaded);
    
    function modelLoaded(){
        console.log("model is loaded");
    }