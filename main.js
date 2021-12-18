function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    display(data.cards)
})


 function display(mb){
     var deck=document.querySelector(".card-deck")
     deck.classList.add("text-center")
     console.log(deck)


  for(var i in mb){
    //   console.log(mb[i].name)
      var cading=document.createElement("div")
      caddiv.classlist.add("card")
       var cading=document.createElement("img")
      cading.src=mb[i].img
      caddiv.appendchild(cading)
      deck.appendchild(caddiv)

    //   Name area

    var cname=document.createElement("h2")
    cname.textcontent=mb[i].name;
    caddiv.appendchild(cname)
      
    // rate area

    var cname=document.createElement("h3")
    cname.textcontent=mb[i].rate;
    caddiv.appendchild(rate)
    
    // offer area

    var cname=document.createElement("h3")
    cname.textcontent="off/-"+mb[i].offer;
    caddiv.appendchild(offer)

    // button area

    var btn=document.createElement("button")
    btn.classList.add("btn btn-warning")
    btn.textContent=mb[i].button;
    caddiv.appendChild(btn)





  }   
 }