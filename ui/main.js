
var button= document.getElementbyId('counter');
button.onclick=function(){
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter=request.responseText;
                var span=document.getElementbyId('count');
                span.innerHTML = counter.tostring();
            }
    }
    };
};


request.open('GET','http://prateekmehndiratta.imad.hasura-app.io/counter',true);
request.send(null);
    //make a request to counter and capture the response and store it in a varible in the correct span.
    
    
    
    