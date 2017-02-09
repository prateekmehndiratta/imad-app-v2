app.get('/ui/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
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



    request.open('GET', 'http://prateekmehndiratta.imad.hasura-app.io/counter',true);
    request.send(null);
};
    //make a request to counter and capture the response and store it in a varible in the correct span.
    
    
    
    var nameInput = Document.getElementById('name');
    var name=nameInput.value;
    var submit=document.getElementById('Submit_btn');
    submit.onclick=function() {
        var names=['name1','name2','name3'];
        var list='';
        for(var i=0;i<names.length;i++) {
            list+= '<li>' + names[i];
        }
    };
    