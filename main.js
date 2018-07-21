function Loadjson(file,callback){
  var xml=new XMLHttpRequest();
  xml.overrideMimeType("application/json");
  xml.open("GET",file,true);
  xml.onreadystatechange=function(){
    if(xml.readyState===4 && xml.status=="200"){
      callback(xml.responseText);
    }
  };
  xml.send(null);
}
Loadjson("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  basics(data.details);
  basic(data.career);
  classe(data.education);
  vani(data.keyskills);
  ac(data.achievements);
})
var child1=document.querySelector(".child1");
var child2=document.querySelector(".child2");


function basics(det){
  var image=document.createElement("img");
  image.src=det.image;
  child1.appendChild(image);

  var name=document.createElement("h1");
  name.textContent=det.name;
  child1.appendChild(name);

  var phoneno=document.createElement("h3");
  phoneno.textContent=det.phoneno;
  child1.appendChild(phoneno);

  var email=document.createElement("a");
  email.href="mailto:satyavanibobbadi@gmail.com"
  email.textContent=det.email;
  child1.appendChild(email);



  var address=document.createElement("h3");
  address.textContent="address";
  child1.appendChild(address);

  var hr=document.createElement("hr");
  child1.appendChild(hr);

  var addr=document.createElement("h3");
  addr.textContent=det.address;
  child1.appendChild(addr);

}
function basic(c){

  var info=document.createElement("h3");
  info.textContent="career objective:";
  child2.appendChild(info);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  var info=document.createElement("h3");
  info.textContent=c.info;
  child2.appendChild(info);

}
function classe(ed){


  var e=document.createElement("h3");
  e.textContent="education details:";
  child2.appendChild(e);

  var hr=document.createElement("hr");
  child2.appendChild(hr);
  for(i=0;i<ed.length;i++)
  {
  var deg=document.createElement("h3");
  deg.textContent=ed[i].degree;
  child2.appendChild(deg);

  var ul=document.createElement("ul");
  var li=document.createElement("li");
  li.textContent=ed[i].institute;
  ul.appendChild(li);
  child2.appendChild(ul);

  var ul1=document.createElement("ul1");
  var li1=document.createElement("li1");
  li1.textContent=ed[i].branch;
  ul1.appendChild(li1);
  child2.appendChild(ul1);
}
}
function vani(k){


  var ke=document.createElement("h3");
  ke.textContent="keyskills";
  child2.appendChild(ke);

  var hr=document.createElement("hr");
  child2.appendChild(hr);
 var skilldata=document.createElement("table");
 skilldata.border="1";
 child2.appendChild(skilldata);
 tabledata="";
 for(i=0;i<k.length;i++)
 {
   tabledata+="<tr><td>"+k[i].title+"</td><td>"+k[i].info;
 }
 skilldata.innerHTML=tabledata;
}
 function ac(t){
   var inr=document.createElement("h3");
   inr.textContent="achievements:";
   child2.appendChild(inr);

   var hr=document.createElement("hr");
   child2.appendChild(hr);

   var inr=document.createElement("h3");
   inr.textContent=t.info;
   child2.appendChild(inr);

 }
