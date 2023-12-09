Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera= document.getElementById("camera")
Webcam.attach(camera)
console.log( "ml5.version:  ",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x3BwF-xyd/model.json",modelLoaded)

function takephoto(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML='<img id="sm" src="'+data_uri+'">'
        }
    )
}

function modelLoaded(){
    console.log('model loaded')
}

function identifyphoto(){
    img=document.getElementById('sm')
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("resultobjectname").innerHTML=results[0].label
        document.getElementById("resultobjectaccuracy").innerHTML=results[0].confidence.toFixed(3)
    }
    
}