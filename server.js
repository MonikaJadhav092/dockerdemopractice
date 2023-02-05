var exp=require("express");
var path=require("path");

var app=exp();


app.use(exp.static(path.join(__dirname,"public")));

app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname,"index.html"));
});

app.get("/hello",function(req,resp){
    var person={fname:"Monika",lanme:"Ugle",contact:9665003859};
    resp.send(person);
});

var server=app.listen(8000,function (){
    console.log("server started at port 8000");
});
