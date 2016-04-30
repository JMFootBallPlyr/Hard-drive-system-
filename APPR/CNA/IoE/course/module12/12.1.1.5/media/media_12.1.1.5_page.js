
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){		
		var manifest = [
		{src:"images/bg_bluegreen_gradient.jpg", id:"bg_bluegreen_gradient"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"}
	];
		return manifest;	
});

(slideViewDidLoad = function(_container,_id)
{
	if(_id==5)
	{
			  btnXPosArr=[102.95, 491.85, 594.75, 484.05];
  btnYPosArr=[303.75, 260.75, 260.75, 76.75];
	buttonArr=[];	
	sampleArray=[];
	bubbleArr=[];
	var lastBtnClick;
    bubbleTitleArr=["ID_s5_titleTxt01","ID_s5_titleTxt02","ID_s5_titleTxt03","ID_s5_titleTxt04"];
    bubbleTextArr=["ID_s5_bodyTxt01","ID_s5_bodyTxt02","ID_s5_bodyTxt03","ID_s5_bodyTxt04"];
	
		function clickFunction(e){
		if(lastBtnClick!=null){
			
			$("#"+lastBtnClick).attr("src","plus_btn.png");
			$("#"+lastBtnClick).on("mouseover",mouseOverFunc);
			$("#"+lastBtnClick).on("mouseout",mouseOutFunc);
			bubbleArr[lastBtnClick].visible=false;
		}
	    lastBtnClick=e.target.id
		$("#"+e.target.id).attr("src","plus_btn_over2.png");		
		$("#"+e.target.id).off("mouseover",mouseOverFunc);
		$("#"+e.target.id).off("mouseout",mouseOutFunc);
		bubbleArr[e.target.id].visible=true;
	}
	
	
	function mouseOverFunc(e){	
		$("#"+e.target.id).attr("src","plus_btn_over.png");
	}
	
	
	function mouseOutFunc(e){
		$("#"+e.target.id).attr("src","plus_btn.png");
	}	
		
	for(var i=0;i<4;i++)
	{
         var btn2 = getCJSElement("TEXTBOX",{x:196,y:226,width:250,height:224.85,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(btn2);		
		bubbleArr[i]=btn2;
		bubbleArr[i].visible=false;
		
		var htmlElement = document.createElement("div");
		htmlElement.style.cssText = "position:absolute;";
		htmlElement.id = "domElement_"+i;
		htmlElement.innerHTML = "<img id="+i+" 'height='50' width='50' src='plus_btn.png'></img>";
		
		$("#slide_5").append(htmlElement)
		$("#"+i).on("click",clickFunction)
		$("#"+i).on("mouseover",mouseOverFunc);
		$("#"+i).on("mouseout",mouseOutFunc);
		$("#domElement_"+i).css("top",btnYPosArr[i]+"px")
		$("#domElement_"+i).css("left",btnXPosArr[i]+"px")
		$("#domElement_"+i).css("cursor","pointer")	
	}

	var domElement = new createjs.DOMElement(htmlElement);


	}


	 function handlerMethod(event) {
		
		ID_txt02.visible=!(ID_txt02.visible);
		ID_txt01.visible=!(ID_txt01.visible);
		btn2.visible=!(btn2.visible);
		
		hit.visible=!(hit.visible);
		
		
	   
 }
 
 function handlerOverMethod(event)
 {

	btn1.visible=true;
	

 }
  function handlerOutMethod(event)
 {
	btn1.visible=false;
	}

});

