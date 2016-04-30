
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
    if(_id == 1) {
        btnXPosArr=[20,622,20,622];
		btnYPosArr=[138.5,134,206,206];
        buttonArr=[];	
        sampleArray=[];
        bubbleArr=[];
        var lastBtnClick;
        bubbleTitleArr=["ID_s1_titleTxt01","ID_s1_titleTxt02","ID_s1_titleTxt03","ID_s1_titleTxt04"]
        bubbleTextArr=["ID_s1_bodyTxt01","ID_s1_bodyTxt02","ID_s1_bodyTxt03","ID_s1_bodyTxt04"]
        
        for(var i=0;i<btnXPosArr.length;i++)
        {
            var btn2 = getCJSElement("TEXTBOX",{x:142.6,y:362.3,width:395,height:110,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
            _container.addChild(btn2);		
            bubbleArr[i]=btn2;
            bubbleArr[i].visible=false;

            var htmlElement = document.createElement("div");
            htmlElement.style.cssText = "position:absolute;";
            htmlElement.id = "domElement_"+i;
            htmlElement.innerHTML = "<img id="+'slide1_'+i+" 'height='58.70' width='48' src='plus_btn.png'></img>";

            $("#mediaContainer").find('#commonMediaText').find('#slide_1').append(htmlElement)
            $("#slide1_"+i).on("click",clickFunction)
            $("#slide1_"+i).on("mouseover",mouseOverFunc);
            $("#slide1_"+i).on("mouseout",mouseOutFunc);
            $("#domElement_"+i).css("top",btnYPosArr[i]+"px")
            $("#domElement_"+i).css("left",btnXPosArr[i]+"px")
            $("#domElement_"+i).css("cursor","pointer")	
            $("#domElement_"+i).css("z-index","99")	
        }
        
        	

        var domElement = new createjs.DOMElement(htmlElement);
    }
    
    if(_id == 2) {
        btnXPosArr1=[567.95,602.45,624.95,624.95, 602.45,192.5,20,20];
		btnYPosArr1=[40.95,95,150.75,225.7,300.35,427.45,427.45,144.5];
        buttonArr1=[];	
        sampleArray1=[];
        bubbleArr1=[];
        var lastBtnClick1;
        bubbleTitleArr1=["ID_s2_titleTxt01","ID_s2_titleTxt02","ID_s2_titleTxt03","ID_s2_titleTxt04","ID_s2_titleTxt05","ID_s2_titleTxt06","ID_s2_titleTxt07","ID_s2_titleTxt08"];
        bubbleTextArr1=["ID_s2_bodyTxt01","ID_s2_bodyTxt02","ID_s2_bodyTxt03","ID_s2_bodyTxt04","ID_s2_bodyTxt05","ID_s2_bodyTxt06","ID_s2_bodyTxt07","ID_s2_bodyTxt08"];
        
        for(var i=0;i<btnXPosArr1.length;i++)
        {
            var btn2 = getCJSElement("TEXTBOX",{x:350,y:356.85,width:310,height:130,size:11,titleId:bubbleTitleArr1[i],bodyId:bubbleTextArr1[i]});
            _container.addChild(btn2);		
            bubbleArr1[i]=btn2;
            bubbleArr1[i].visible=false;

            var htmlElement1 = document.createElement("div");
            htmlElement1.style.cssText = "position:absolute;";
            htmlElement1.id = "domElement2_"+i;
            htmlElement1.innerHTML = "<img id="+'slide2_'+i+" 'height='58.70' width='48' src='plus_btn.png'></img>";

            $("#mediaContainer").find('#commonMediaText').find('#slide_2').append(htmlElement1)
            $("#slide2_"+i).on("click",clickFunction1)
            $("#slide2_"+i).on("mouseover",mouseOverFunc1);
            $("#slide2_"+i).on("mouseout",mouseOutFunc1);
            $("#domElement2_"+i).css("top",btnYPosArr1[i]+"px")
            $("#domElement2_"+i).css("left",btnXPosArr1[i]+"px")
            $("#domElement2_"+i).css("cursor","pointer")	
            $("#domElement2_"+i).css("z-index","99")	

        }
        
        var domElement = new createjs.DOMElement(htmlElement1);
    }
   
	
	function clickFunction(e){
        var _id = e.target.id.split('_')[1];
        if(lastBtnClick!=null){
            $("#slide1_"+lastBtnClick).attr("src","plus_btn.png");
            $("#slide1_"+lastBtnClick).attr("width","48");	
            $("#slide1_"+lastBtnClick).attr("heigh","58.70");	
            $("#domElement_"+lastBtnClick).css("top",(btnYPosArr[lastBtnClick])+"px");
            $("#domElement_"+lastBtnClick).css("left",(btnXPosArr[lastBtnClick])+"px")
            $("#slide1_"+lastBtnClick).on("mouseover",mouseOverFunc);
            $("#slide1_"+lastBtnClick).on("mouseout",mouseOutFunc);
            bubbleArr[lastBtnClick].visible=false;
        }
        lastBtnClick=_id
        $("#slide1_"+_id).attr("src","plus_btn_over2.png");	
        $("#slide1_"+_id).attr("width","35");	
        $("#slide1_"+_id).attr("heigh","35");	
        $("#domElement_"+_id).css("top",(btnYPosArr[_id]+5)+"px");
        $("#domElement_"+_id).css("left",(btnXPosArr[_id]+3)+"px")
        $("#slide1_"+_id).off("mouseover",mouseOverFunc);
        $("#slide1_"+_id).off("mouseout",mouseOutFunc);
        bubbleArr[_id].visible=true;
    }


    function mouseOverFunc(e){	
        var _id = e.target.id.split('_')[1];
        $("#slide1_"+_id).attr("src","plus_btn_over.png");
    }


    function mouseOutFunc(e){
        var _id = e.target.id.split('_')[1];
        $("#slide1_"+_id).attr("src","plus_btn.png");
    }

    function clickFunction1(e){
        var _id = e.target.id.split('_')[1];
        if(lastBtnClick1!=null){
            $("#slide2_"+lastBtnClick1).attr("src","plus_btn.png");
            $("#slide2_"+lastBtnClick1).attr("width","48");	
            $("#slide2_"+lastBtnClick1).attr("heigh","58.70");	
            $("#domElement2_"+lastBtnClick1).css("top",(btnYPosArr1[lastBtnClick1])+"px");
            $("#domElement2_"+lastBtnClick1).css("left",(btnXPosArr1[lastBtnClick1])+"px")
            $("#slide2_"+lastBtnClick1).on("mouseover",mouseOverFunc1);
            $("#slide2_"+lastBtnClick1).on("mouseout",mouseOutFunc1);
            bubbleArr1[lastBtnClick1].visible=false;
        }
        lastBtnClick1=_id
        $("#slide2_"+_id).attr("src","plus_btn_over2.png");		
        $("#slide2_"+_id).attr("width","35");	
        $("#slide2_"+_id).attr("heigh","35");	
        $("#domElement2_"+_id).css("top",(btnYPosArr1[_id]+5)+"px");
        $("#domElement2_"+_id).css("left",(btnXPosArr1[_id]+3)+"px")
        $("#slide2_"+_id).off("mouseover",mouseOverFunc1);
        $("#slide2_"+_id).off("mouseout",mouseOutFunc1);
        bubbleArr1[_id].visible=true;
    }


    function mouseOverFunc1(e){	
        var _id = e.target.id.split('_')[1];
        $("#slide2_"+_id).attr("src","plus_btn_over.png");
    }


    function mouseOutFunc1(e){
        var _id = e.target.id.split('_')[1];
        $("#slide2_"+_id).attr("src","plus_btn.png");
    }
	
});


/*(slideViewDidLoad = function(_container,_id)
{
	
    if(_id == 2){
        var totalButton=8;

        var btnXPosArr=[567.95,602.45,624.95,624.95, 602.45,192.5,20,20];
        var btnYPosArr=[40.95,95,150.75,225.7,300.35,427.45,427.45,144.5];
        var buttonArr=[];
        var buttonClickArr=[];
        var buttonOverArr=[];
        var bubbleArr=[];
        var sampleArray=[];
        var lastBtnClick;
        var bubbleTitleArr=["ID_titleTxt01","ID_titleTxt02","ID_titleTxt03","ID_titleTxt04","ID_titleTxt05","ID_titleTxt06","ID_titleTxt07","ID_titleTxt08"]
        var bubbleTextArr=["ID_bodyTxt01","ID_bodyTxt02","ID_bodyTxt03","ID_bodyTxt04","ID_bodyTxt05","ID_bodyTxt06","ID_bodyTxt07","ID_bodyTxt08"]
        for(var i=0;i<totalButton;i++) {
            var container=new createjs.Container()
            _container.addChild(container);
            container.id=i;

            container.cursor="pointer";


            btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png",});

            buttonArr.push(btn);
            container.addChild(btn);

            btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png",});

            buttonOverArr.push(btn1);
            container.addChild(btn1);
            btn1.visible=false;

            btn4 = getCJSElement("IMAGE",{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:35,height:35,src:"plus_btn_over2.png",});

            buttonClickArr.push(btn4);
            container.addChild(btn4);
            btn4.visible=false;

            container.addEventListener("click", handlerMethod);
            container.addEventListener("mouseover", handlerOverMethod);
            container.addEventListener("mouseout", handlerOutMethod);
            var btn2 = getCJSElement("TEXTBOX",{x:350,y:356.85,width:310,height:130,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
            _container.addChild(btn2);

            bubbleArr[i]=btn2;
            bubbleArr[i].visible=false;
        }
	}
	
	 function handlerMethod(event) {
		
		for(var i=0;i<totalButton;i++)
		{
	
		bubbleArr[i].visible=false;
		buttonClickArr[i].visible=false;
		
		}
		if(lastBtnClick)
		{
		buttonOverArr[lastBtnClick.id].visible=false;
		lastBtnClick.addEventListener("mouseover", handlerOverMethod);
		lastBtnClick.addEventListener("mouseout", handlerOutMethod);
		}
		bubbleArr[event.target.id].visible=true;
		buttonClickArr[event.target.id].visible=true;

       event.target.removeEventListener("mouseover", handlerOverMethod);
       event.target.removeEventListener("mouseout", handlerOutMethod);
	   lastBtnClick=event.target;
	   
 }
 
 function handlerOverMethod(event)
 {

	buttonOverArr[event.target.id].visible=true;
	

 }
  function handlerOutMethod(event)
 {
	buttonOverArr[event.target.id].visible=false;
	}
	
});*/

/*(slideViewDidLoad = function(_container,_id)
{
	if(_id == 1){	
	 	btnXPosArr=[20,625,20,625];
		btnYPosArr=[138.5,132,213.8,212.8];
		buttonArr=[];	
		sampleArray=[];
		bubbleArr=[];
		var lastBtnClick;
		var bubbleTitleArr=["ID_s1_titleTxt01","ID_s1_titleTxt02","ID_s1_titleTxt03","ID_s1_titleTxt04"]
		var bubbleTextArr=["ID_s1_bodyTxt01","ID_s1_bodyTxt02","ID_s1_bodyTxt03","ID_s1_bodyTxt04"]
		for(var i=0;i<4;i++)
		{
			var btn2 = getCJSElement("TEXTBOX",{x:23.45,y:259.95,width:424,height:209,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
			_container.addChild(btn2);		
			bubbleArr[i]=btn2;
			bubbleArr[i].visible=false;
		
			var htmlElement = document.createElement("div");
			htmlElement.style.cssText = "position:absolute;";
			htmlElement.id = "domElement_"+i;
			htmlElement.innerHTML = "<img id="+i+" height='50' width='50' src='plus_btn.png'></img>";
	
			$("#slide_1").append(htmlElement)
			$("#"+i).on("click",clickFunction1)
			$("#"+i).on("mouseover",mouseOverFunc1);
			$("#"+i).on("mouseout",mouseOutFunc1);
			$("#domElement_"+i).css("top",btnYPosArr[i]+"px")
			$("#domElement_"+i).css("left",btnXPosArr[i]+"px")
			$("#domElement_"+i).css("cursor","pointer")	
		}
    }

    if(_id == 2){	
	 	btnXPosArr1=[20,625,20,625];
		btnYPosArr1=[138.5,132,213.8,212.8];
		buttonArr1=[];	
		sampleArray1=[];
		bubbleArr1=[];
		var lastBtnClick1;
		var bubbleTitleArr1=["ID_s2_titleTxt01","ID_s2_titleTxt02","ID_s2_titleTxt03","ID_s2_titleTxt04"]
	    var bubbleTextArr1=["ID_s2_bodyTxt01","ID_s2_bodyTxt02","ID_s2_bodyTxt03","ID_s2_bodyTxt04"]
		for(var i=0;i<4;i++)
		{
			var btn2 = getCJSElement("TEXTBOX",{x:23.45,y:259.95,width:424,height:209,size:11,titleId:bubbleTitleArr1[i],bodyId:bubbleTextArr1[i]});
			_container.addChild(btn2);		
			bubbleArr1[i]=btn2;
			bubbleArr1[i].visible=false;
			
			var htmlElement1 = document.createElement("div");
			htmlElement1.style.cssText = "position:absolute;";
			htmlElement1.id = "domElement1_"+i;
			htmlElement1.innerHTML = "<img id="+i+" height='50' width='50' src='plus_btn.png'></img>";
			
			$("#slide_2").append(htmlElement1)
			$("#"+i).on("click",clickFunction)
			$("#"+i).on("mouseover",mouseOverFunc);
			$("#"+i).on("mouseout",mouseOutFunc);
			$("#domElement1_"+i).css("top",btnYPosArr1[i]+"px")
			$("#domElement1_"+i).css("left",btnXPosArr1[i]+"px")
			$("#domElement1_"+i).css("cursor","pointer")	
		}
	}

	function clickFunction1(e){
		if(lastBtnClick!=null){
			$("#"+lastBtnClick).attr("src","plus_btn.png");
			$("#"+lastBtnClick).on("mouseover",mouseOverFunc1);
			$("#"+lastBtnClick).on("mouseout",mouseOutFunc1);
			bubbleArr[lastBtnClick].visible=false;
		}
	    lastBtnClick=e.target.id
		$("#"+e.target.id).attr("src","plus_btn_over2.png");		
		$("#"+e.target.id).off("mouseover",mouseOverFunc1);
		$("#"+e.target.id).off("mouseout",mouseOutFunc1);
		bubbleArr[e.target.id].visible=true;
	}
	
	
	function mouseOverFunc1(e){	
		$("#"+e.target.id).attr("src","plus_btn_over.png");
	}
	
	
	function mouseOutFunc1(e){
		$("#"+e.target.id).attr("src","plus_btn.png");
	}	


	function clickFunction(e1){
		if(lastBtnClick1!=null){
			$("#"+lastBtnClick1).attr("src","plus_btn.png");
			$("#"+lastBtnClick1).on("mouseover",mouseOverFunc);
			$("#"+lastBtnClick1).on("mouseout",mouseOutFunc);
			bubbleArr1[lastBtnClick1].visible=false;
		}
	    lastBtnClick1=e1.target.id
		$("#"+e1.target.id).attr("src","plus_btn_over2.png");		
		$("#"+e1.target.id).off("mouseover",mouseOverFunc);
		$("#"+e1.target.id).off("mouseout",mouseOutFunc);
		bubbleArr1[e1.target.id].visible=true;
	}
	
	
	function mouseOverFunc(e1){	
		$("#"+e1.target.id).attr("src","plus_btn_over.png");
	}
	
	
	function mouseOutFunc(e1){
		$("#"+e1.target.id).attr("src","plus_btn.png");
	}	
});*/
