// ==UserScript==
// @name         ZakInstaBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==



(function() {

     window.onload = function() {




var likebox = document.createElement("div");

likebox.innerHTML="<div style='padding:3px 0px;width:100%;background-color:#DE2469;position:fixed;z-index:2000;top:0px;display:flex;margin:0px auto;justify-content:space-around;font-size:140%;text-align:center;border-radius:5px;flex-direction:row;'><input type='text' placeholder='Number' size='15' id='follownumber' /><input type='text' placeholder='Max Seconds' size='15' id='maxseconds' /><input type='text' placeholder='Min Seconds' size='15' id='minseconds' /><button id='likeb'  style='background-color:#B71F4A; color:white;font-weight:150;border:1px solid white;border-radius:5px;width:80px;margin-top:2px;'>Like</button><button id='followb' class='_qv64e _gexxb _4tgw8 _njrw0' style='color:white;font-weight:150;border:1px solid white;border-radius:5px;width:80px;background-color:#B71F4A;'>Follow</button><button id='unfollowb' class='_qv64e _gexxb _4tgw8 _njrw0' style='background-color:#B71F4A; color:white;font-weight:150;border:1px solid white;border-radius:5px;width:80px;margin-top:2px;'>UnFollow</button><button id='stopfo' style='background-color:#B71F4A; color:white;font-weight:150;border:1px solid white;border-radius:5px;width:80px;margin-top:2px;'>Stop</button><button id='loadcomments' style='background-color:#B71F4A; color:white;font-weight:150;border:1px solid white;border-radius:5px;width:120px;margin-top:2px;'>Load comments</button></div>";

likebox.style.zIndex="2000";
    document.body.appendChild(likebox);

    var popupinfo = document.createElement("div");
    var messagebox = document.createElement("div");
    messagebox.id="messagebox";
    messagebox.style.width="25%";
    messagebox.style.height="150px";
    messagebox.style.paddingTop="8px";
    messagebox.style.backgroundColor="#DE2469";
    messagebox.style.color="black";
    messagebox.style.fontSize="150%";
    messagebox.style.fontWeight="170";
    messagebox.style.position="fixed";
    messagebox.style.top="105px";
    messagebox.style.right="0px";
    messagebox.style.zIndex="1002";
    messagebox.style.padding = "15px 5px 5px 6px";
    messagebox.style.borderRadius="0px 0px 5px 5px";
    messagebox.style.opacity="0.95";
    messagebox.style.textAlign="center";
    messagebox.style.display="block";
    popupinfo.id="clickmessage";
    popupinfo.innerHTML = "<p><b>Welcome To IG-ZAKBOT</b></br></br>This Bot Has been developed By</br> Zakaria Kasmi<p>";
    messagebox.innerHTML = "<button id='showhide' style='background-color:#5E331E; color:white;font-weight:150;border:1px solid white;width:20px;height:20px;position:absolute;right:0px;top:0px;'>X</button>";

    document.body.appendChild(messagebox);
    document.getElementById("messagebox").appendChild(popupinfo);

var button1 ;

var f = document.getElementsByClassName("_8q670 _b9n99");
var i=0;
var x=100;
var length = 20;
var unfollowcount=10;
var closed = true;
var operationstring;
    var operation;
    var counter=0;
var  minT=2;
var  maxT = 10;
         var pass = true;
         var passcount=0;
    var mediacount=10;
    var type=0;
         var loadingcomments=0;
         var loadingcommentstime = 1000;
         var morecommentsload = "_2g7d5 notranslate _95hvo";

      var listofcomments ="_4a48i _277v9";
var followinsta =function (){


     if(x>0){

setTimeout(function(){
    button1 = document.getElementsByClassName("_8q670 _b9n99")[0].getElementsByClassName(operationstring);
   if(!closed){

       unfollowcount = 15;
      closed=true;
      }
    try{

    if(typeof(button1[0]) != 'undefined' && button1[0] != null){
        button1[i].click();
        counter++;

       }else {
          f = document.getElementsByClassName("_8q670 _b9n99")[0].getElementsByClassName(operationstring);
f[f.length-1].scrollIntoView();
       }

      }catch(err){
                loadmore();
                popupinfo.innerHTML ="<p>"+operation+"</br> <b>"+counter+"</b></br>"+err+"</p>";
                return followinsta();
               }
     popupinfo.innerHTML ="<p>"+operation+"<p> </br> N <b> "+counter+"</b></p>";
        unfollowcount--;
    x--;
   return followinsta();
},Math.floor(Math.random()*(maxT-minT+1)+minT)*1000);

}else { popupinfo.innerHTML ="<p>END </br> TOTAL "+operation+"</br> <b>"+counter+"</b></p>";};

if( document.getElementsByClassName("_8q670 _b9n99")[0].getElementsByClassName(operationstring).length <= 10 ){
    f = document.getElementsByClassName("_8q670 _b9n99")[0].getElementsByClassName(operationstring);

f[f.length-1].scrollIntoView();

    closed= false;
   };


};

         var waituntilllist = function(){

if(passcount > 0 && !pass){
    passcount--;

        setTimeout(function() { var list1 = document.getElementsByClassName("_8q670 _b9n99")[0];
    if(typeof(list1) == 'undefined' || list1 == null){
        popupinfo.innerHTML ="<p>  <b>START </b> </br> "+operation+" </br> Please Click on the List"+passcount+"</p>";
return  waituntilllist();
}else {
    popupinfo.innerHTML ="<p>  <b>START </b> </br> "+operation+" </br> wait ...</p>";
    pass = true;
    followUnfollowfunction();
    }},1000);
         }
         };

document.getElementById("unfollowb").onclick = function(){
    operationstring = "_qv64e _t78yp _4tgw8 _njrw0";
     passcount = 20;
        pass = false;
    operation = "UnFollow";
    counter=0;
            gettimeminmax();

    button1 = document.getElementsByClassName("_8q670 _b9n99")[0].getElementsByClassName(operationstring);
    var likeN =document.getElementById("follownumber").value;

    if(Number(likeN) > 0){
         popupinfo.innerHTML ="<p>  <b>START </b> </br> "+operation+"</p>";
        f = document.getElementsByClassName("_8q670 _b9n99");
        x = Number(likeN);
         followinsta();
    }else {alert("Enter a positive number");}

};
    document.getElementById("followb").onclick = function(){
         operationstring = "_qv64e _gexxb _4tgw8 _njrw0";
        operation = "Follow";
        passcount = 20;
        pass = false;

         gettimeminmax();
         popupinfo.innerHTML ="<p>  <b>START </b> </br> "+operation+" </br> Loading ...</p>";

waituntilllist();


};

var followUnfollowfunction = function(){    if(pass){

        counter=0;

    button1 = document.getElementsByClassName("_8q670 _b9n99")[0].getElementsByClassName(operationstring);
    var likeN =document.getElementById("follownumber").value;

    if(Number(likeN) > 0){
         popupinfo.innerHTML ="<p>  <b>START </b></br> "+operation+"</p>";
        f = document.getElementsByClassName("_8q670 _b9n99")[0].getElementsByClassName(operationstring);
        x = Number(likeN);
        try{
        loadmore();
        }catch(err){}finally{followinsta();}
    }else {alert("Enter a positive number");
          }
    };};

var Likeinsta =function (){
try{
    if(!closed){
                 button1 = document.getElementsByClassName("_8scx2 coreSpriteHeartOpen");
               closed=true;
    mediacount=7;}
     if(x>0){

setTimeout(function(){
     if(typeof(button1[i]) != 'undefined' && button1[i] != null ){
     button1[i].scrollIntoView();
    window.scrollBy(0,-1200);
     button1[i].click();
     }else {f[0].scrollTop += f[0].scrollHeight;}
   i++;
    counter++;
    popupinfo.innerHTML ="<p>"+operation+"<p> </br> N <b> "+counter+"</b></p>";

        mediacount--;
    x--;
   return Likeinsta();
},Math.floor(Math.random()*(maxT-minT+1)+minT)*1000);

}else { popupinfo.innerHTML ="<p>END </br> TOTAL "+operation+"</br> <b>"+counter+"</b></p>";};

if(( mediacount -3) <= 0 ){
    window.scrollTo(0,document.body.scrollHeight);
   closed=false;
   };
}catch(err){ i++; return Likeinsta(); }
};
    var gettimeminmax = function(){
         maxT = document.getElementById("maxseconds").value;
         minT = document.getElementById("minseconds").value;

             if(isNaN(maxT) || maxT<0 || isNaN(minT) || minT<0 || minT=="" || maxT==""){
                var result = confirm("enter a valide min time  max Time (default min = 2s Max 5s ) do you want to continue with default setting ?");
                if(result==true){
                    maxT=5;
                    minT=1;

                    document.getElementById("maxseconds").value= maxT;
                    document.getElementById("minseconds").value= minT;
                }

            }else {
                maxT = Number(maxT);
                minT = Number(minT);

            }
    };

      document.getElementById("likeb").onclick = function(){

          operation = "like";
          i=0;
              closed=false;
              mediacount=7;
            var likeN =document.getElementById("follownumber").value;

    if(Number(likeN) > 0){
        gettimeminmax();
        x = Number(likeN);
        popupinfo.innerHTML ="<p>  <b>START </b> </br> "+operation+"</p>";
        Likeinsta();
    }else {
        alert("Enter a positive number");
          }


      };
               var clickit = function(){

                   if(loadingcomments!=0){
                       try{
                   setTimeout(function (){


        var elementload =  document.getElementsByClassName("_m3m1c _1s3cd")[0];
                  if(typeof(elementload) != undefined && elementload != null){
                        elementload.click();

          counter = document.getElementsByClassName("_2g7d5 notranslate _95hvo").length;
      popupinfo.innerHTML ="<p></br>Comments :"+counter+"</br><b>Loading ...</b></p>";


                  }else{
                        if(document.getElementsByClassName("_ezgzd").length >0){  popupinfo.innerHTML ="<p></br> <b>Comments</br>Loading ... </b></p>";
                        var numbertaggedusers =0;
      counter = document.getElementsByClassName(morecommentsload).length;
      popupinfo.innerHTML ="<p></br>Comments :"+counter+"</br><b>Loading ...</b></p>";
   var taggedusers = document.getElementsByClassName("notranslate");
                      for(var i = 0; i < taggedusers.length; i++) {
                          if(taggedusers[i].className == 'notranslate') {
                              numbertaggedusers++;
                          }
                      }
                      if(counter<3){counter=3;}
       popupinfo.innerHTML ="<p></br>End Loading Comments</br></br>Total Comments :<b> "+(counter-3)+" </b></br></br>Total Tagged Users:<b>"+numbertaggedusers+"</b></p>";
numbertaggedusers=0;
 counter=0;
          document.getElementsByClassName(listofcomments)[0].scrollTop = document.getElementsByClassName(listofcomments)[0].scrollHeight=0;

                                                                               }else {
           popupinfo.innerHTML ="<p>No Comments Found !! Please Select a Picture or a video</p>";}

                }
                        return clickit();
               },loadingcommentstime);}catch(err){ return clickit();}
                   };
};
var loadmore = function (){
    setTimeout(function (){ document.getElementsByClassName("_gs38e")[0].scrollTop = document.getElementsByClassName("_gs38e")[0].scrollHeight; return loadmore();},2000);
                          };

    document.getElementById("followb").onmouseover = function(){
    document.getElementById("followb").style.backgroundColor="#5E331E";
    document.getElementById("followb").style.cursor='pointer';
};
 document.getElementById("followb").onmouseleave= function(){
        document.getElementById("followb").style.backgroundColor='#B71F4A';
    };
document.getElementById("unfollowb").onmouseover = function(){
    document.getElementById("unfollowb").style.backgroundColor="#5E331E";
      document.getElementById("unfollowb").style.cursor='pointer';
};
document.getElementById("unfollowb").onmouseleave = function(){
       document.getElementById("unfollowb").style.backgroundColor="#B71F4A";
};
document.getElementById("stopfo").onmouseover = function(){
    document.getElementById("stopfo").style.backgroundColor="#5E331E";
      document.getElementById("stopfo").style.cursor='pointer';
};
document.getElementById("stopfo").onmouseleave = function(){
       document.getElementById("stopfo").style.backgroundColor="#B71F4A";
};
document.getElementById("stopfo").onclick = function(){
       x=0;
    loadingcomments = 0;
     popupinfo.innerHTML ="<p></br>End</p>";
};
document.getElementById("likeb").onmouseover = function(){
    document.getElementById("likeb").style.backgroundColor="#5E331E";
      document.getElementById("likeb").style.cursor='pointer';
};
document.getElementById("likeb").onmouseleave = function(){
       document.getElementById("likeb").style.backgroundColor="#B71F4A";
};
    document.getElementById("loadcomments").onmouseover = function(){
    document.getElementById("loadcomments").style.backgroundColor="#5E331E";
      document.getElementById("loadcomments").style.cursor='pointer';
};
document.getElementById("loadcomments").onmouseleave = function(){
       document.getElementById("loadcomments").style.backgroundColor="#B71F4A";
};

         document.getElementById("minseconds").value = 2;
         document.getElementById("maxseconds").value = 10;
          document.getElementById("follownumber").value = 100;

    document.getElementById("loadcomments").onclick = function(){
        loadingcomments =1;
        counter = 0;

         minT = document.getElementById("minseconds").value;

        if(isNaN(minT) || minT<0 || minT==""){
popupinfo.innerHTML ="<p></br>Comments .</br> Please Enter a Valide Number in Min Second Box .</br> Current Min Second for Loading = "+loadingcommentstime+"</p>";

        }else {
            if(minT>100){
             minT = Number(minT);
            loadingcommentstime = minT;}
            loadingcommentstime = 1000;

        };





        clickit();

    };
      document.getElementById("showhide").onclick = function(){
           var messagebox = document.getElementById("messagebox");
          if(messagebox.style.width == '25%'){
              messagebox.style.width="5%";
                messagebox.style.height="250px";
          }else {
              messagebox.style.width="25%";
                messagebox.style.height="150px";
          }

      };





     };
})();


