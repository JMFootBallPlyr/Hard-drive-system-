function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
   if(_id==1){
   	var totalBtns=3;
	var btnXPosArr=[413.2,439.2,465.1];
  	var btnYPosArr=[220.6,173.8,220.6];
	var buttonArr=[];
	var buttonClickArr=[];
	var buttonOverArr=[];
	var bubbleArr=[];
	var bubbleTitleArr=["ID_s01_titleTxt01","ID_s01_titleTxt02","ID_s01_titleTxt03"];
	var bubbleTextArr=["ID_s01_bodyTxt01","ID_s01_bodyTxt02","ID_s01_bodyTxt03"];
	var popupImageArr=["popup1.png","popup2.png","popup3.png"];
	var popupArr=[];
	//var crossArr=[];
	var clickBool=false;
	
  	var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFFFF").drawRect(198,47.55,350,233);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

	for(var i=0;i<3;i++){
		var container=new createjs.Container()
		var container2=new createjs.Container()
		_container.addChild(container);
		_container.addChild(container2);
		container.cursor="pointer";
		container2.cursor="pointer";
		container.id=i; 

		if(i==0){
			var connection = getCJSElement("IMAGE",{x:434.45,y:141.9,width:55,height:95,src:"connectlines.png"});
			container.addChild(connection);
		}
		btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png"});
		buttonArr.push(btn);
		container.addChild(btn);

		btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png"});
		buttonOverArr.push(btn1);
		container.addChild(btn1);
		btn1.visible=false;

		popupimage = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:popupImageArr[i]});
		container2.addChild(popupimage);
		popupArr[i]=popupimage;
		popupArr[i].visible=false;

		
		container2.addEventListener("click", handlerMethod);
		container.addEventListener("click", handlerMethod);
		container.addEventListener("mouseover", handlerOverMethod);
		container.addEventListener("mouseout", handlerOutMethod);

		var txtbox = getCJSElement("TEXTBOX",{x:90,y:315,width:500,height:170,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(txtbox);

		bubbleArr[i]=txtbox;
		bubbleArr[i].visible=false;
	}
  }else if(_id==2){
  	var totalBtns=3;
  	var btnXPosArr=[268,424,467.5];
  	var btnYPosArr=[203.8,203.8,203.8];
	var buttonArr=[];
	var buttonClickArr=[];
	var buttonOverArr=[];
	var bubbleArr=[];
	var sampleArray=[];
	var lastBtnClick;
	var bubbleTitleArr=["ID_s02_titleTxt01","ID_s02_titleTxt02","ID_s02_titleTxt03"];
	var bubbleTextArr=["ID_s02_bodyTxt01","ID_s02_bodyTxt02","ID_s02_bodyTxt03"];
	var popupImageArr=["popup_s2_1.png","popup_s2_2.png","popup_s2_3.png"];
	var popupArr=[];
	//var crossArr=[];
	var clickBool=false;
	var btnXPos=45
	var btnYPos=60;
	var textContainer;

  	var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFFFF").drawRect(128,143.9,420.6,45.7);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

	for(var i=0;i<totalBtns;i++){
		var container=new createjs.Container()
		var container2=new createjs.Container()
		_container.addChild(container);
		_container.addChild(container2);
		container.cursor="pointer";
		container2.cursor="pointer";
		container.id=i; 

		if(i==0){
			var connection = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:"connectinglines2.png"});
			container.addChild(connection);
		}
		btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png"});
		buttonArr.push(btn);
		container.addChild(btn);

		btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png"});
		buttonOverArr.push(btn1);
		container.addChild(btn1);
		btn1.visible=false;

		popupimage = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:popupImageArr[i]});
		container2.addChild(popupimage);
		popupArr[i]=popupimage;
		popupArr[i].visible=false;

		container2.addEventListener("click", handlerMethod);
		container.addEventListener("click", handlerMethod);
		container.addEventListener("mouseover", handlerOverMethod);
		container.addEventListener("mouseout", handlerOutMethod);

		var txtbox = getCJSElement("TEXTBOX",{x:90,y:315,width:500,height:170,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(txtbox);

		bubbleArr[i]=txtbox;
		bubbleArr[i].visible=false;
	}

  }
  else if(_id==4){
  	var totalBtns=10;
  	var btnXPosArr=[118,151.6,187.2,212.8,232.9,252.25,270.1,291.7,342.8,452.9];
var btnYPosArr=[84.8,213.8,84.8,213.8,84.8,213.8,84.8,213.8,84.8,213.8];
	var buttonArr=[];
	var buttonClickArr=[];
	var buttonOverArr=[];
	var bubbleArr=[];
	var sampleArray=[];
	var lastBtnClick;
	var bubbleTitleArr=["ID_s04_titleTxt01","ID_s04_titleTxt02","ID_s04_titleTxt03","ID_s04_titleTxt04","ID_s04_titleTxt05","ID_s04_titleTxt06","ID_s04_titleTxt07","ID_s04_titleTxt08","ID_s04_titleTxt09","ID_s04_titleTxt10"];
var bubbleTextArr=["ID_s04_bodyTxt01","ID_s04_bodyTxt02","ID_s04_bodyTxt03","ID_s04_bodyTxt04","ID_s04_bodyTxt05","ID_s04_bodyTxt06","ID_s04_bodyTxt07","ID_s04_bodyTxt08","ID_s04_bodyTxt09","ID_s04_bodyTxt10"];
var popupImageArr=["popup_s4_1.png","popup_s4_2.png","popup_s4_3.png","popup_s4_4.png","popup_s4_5.png","popup_s4_6.png","popup_s4_7.png","popup_s4_8.png","popup_s4_9.png","popup_s4_10.png"];
	var popupArr=[];
	//var crossArr=[];
	var clickBool=false;
	var btnXPos=45
	var btnYPos=60;
	var textContainer;

  	var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFFFF").drawRect(131.5,140.6,420.65,54.65);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

	for(var i=0;i<totalBtns;i++){
		var container=new createjs.Container()
		var container2=new createjs.Container()
		_container.addChild(container);
		_container.addChild(container2);
		container.cursor="pointer";
		container2.cursor="pointer";
		container.id=i; 

		if(i==0){
			var connection = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:"connectinglines4.png"});
			container.addChild(connection);
		}
		btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png"});
		buttonArr.push(btn);
		container.addChild(btn);

		btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png"});
		buttonOverArr.push(btn1);
		container.addChild(btn1);
		btn1.visible=false;

		popupimage = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:popupImageArr[i]});
		container2.addChild(popupimage);
		popupArr[i]=popupimage;
		popupArr[i].visible=false;

		container2.addEventListener("click", handlerMethod);
		container.addEventListener("click", handlerMethod4);
		container.addEventListener("mouseover", handlerOverMethod);
		container.addEventListener("mouseout", handlerOutMethod);

		var txtbox = getCJSElement("TEXTBOX",{x:90,y:315,width:500,height:170,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(txtbox);

		bubbleArr[i]=txtbox;
		bubbleArr[i].visible=false;
	}

  }else if(_id==5){
  	var totalBtns=4;
  	var btnXPosArr=[137,316.1,445.2,505.3];
  	var btnYPosArr=[214.3,214.3,214.3,214.3];
	var buttonArr=[];
	var buttonClickArr=[];
	var buttonOverArr=[];
	var bubbleArr=[];
	var sampleArray=[];
	var lastBtnClick;
	var bubbleTitleArr=["ID_s05_titleTxt01","ID_s05_titleTxt02","ID_s05_titleTxt03","ID_s05_titleTxt04"];
	var bubbleTextArr=["ID_s05_bodyTxt01","ID_s05_bodyTxt02","ID_s05_bodyTxt03","ID_s05_bodyTxt04"];
	var popupImageArr=["popup_s5_1.png","popup_s5_2.png","popup_s5_3.png","popup_s5_4.png"];
	var popupArr=[];
	//var crossArr=[];
	var clickBool=false;
	var btnXPos=45
	var btnYPos=60;
	var textContainer;

  	var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFFFF").drawRect(128,143.9,420.6,45.7);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

	for(var i=0;i<totalBtns;i++){
		var container=new createjs.Container()
		var container2=new createjs.Container()
		_container.addChild(container);
		_container.addChild(container2);
		container.cursor="pointer";
		container2.cursor="pointer";
		container.id=i; 

		if(i==0){
			var connection = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:"connectinglines5.png"});
			container.addChild(connection);
		}
		btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png"});
		buttonArr.push(btn);
		container.addChild(btn);

		btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png"});
		buttonOverArr.push(btn1);
		container.addChild(btn1);
		btn1.visible=false;

		popupimage = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:popupImageArr[i]});
		container2.addChild(popupimage);
		popupArr[i]=popupimage;
		popupArr[i].visible=false;

		container2.addEventListener("click", handlerMethod);
		container.addEventListener("click", handlerMethod5);
		container.addEventListener("mouseover", handlerOverMethod);
		container.addEventListener("mouseout", handlerOutMethod);

		var txtbox = getCJSElement("TEXTBOX",{x:90,y:315,width:500,height:170,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(txtbox);

		bubbleArr[i]=txtbox;
		bubbleArr[i].visible=false;
	}

  }else if(_id==6){
  	var totalBtns=4;
  	var btnXPosArr=[312,368.1,442.2,488.3];
  	var btnYPosArr=[214.3,214.3,214.3,214.3];
	var buttonArr=[];
	var buttonClickArr=[];
	var buttonOverArr=[];
	var bubbleArr=[];
	var sampleArray=[];
	var lastBtnClick;
	var bubbleTitleArr=["ID_s06_titleTxt01","ID_s06_titleTxt02","ID_s06_titleTxt03","ID_s06_titleTxt04"];
	var bubbleTextArr=["ID_s06_bodyTxt01","ID_s06_bodyTxt02","ID_s06_bodyTxt03","ID_s06_bodyTxt04"];
	var popupImageArr=["popup_s6_1.png","popup_s6_2.png","popup_s6_3.png","popup_s6_4.png"];
	var popupArr=[];
	//var crossArr=[];
	var clickBool=false;
	var btnXPos=45
	var btnYPos=60;
	var textContainer;

  	var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFFFF").drawRect(128.3,140.6,419.5,55.8);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

	for(var i=0;i<totalBtns;i++){
		var container=new createjs.Container()
		var container2=new createjs.Container()
		_container.addChild(container);
		_container.addChild(container2);
		container.cursor="pointer";
		container2.cursor="pointer";
		container.id=i; 

		if(i==0){
			var connection = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:"connectinglines6.png"});
			container.addChild(connection);
		}
		btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png"});
		buttonArr.push(btn);
		container.addChild(btn);

		btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png"});
		buttonOverArr.push(btn1);
		container.addChild(btn1);
		btn1.visible=false;

		popupimage = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:popupImageArr[i]});
		container2.addChild(popupimage);
		popupArr[i]=popupimage;
		popupArr[i].visible=false;

		container2.addEventListener("click", handlerMethod);
		container.addEventListener("click", handlerMethod5);
		container.addEventListener("mouseover", handlerOverMethod);
		container.addEventListener("mouseout", handlerOutMethod);

		var txtbox = getCJSElement("TEXTBOX",{x:90,y:315,width:500,height:170,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(txtbox);

		bubbleArr[i]=txtbox;
		bubbleArr[i].visible=false;
	}

  }else if(_id==7){
  	var totalBtns=4;
  	var btnXPosArr=[134.15,134.15,504.15,134.15];
  	var btnYPosArr=[214.3,65.3,70.3,111.3];
	var buttonArr=[];
	var buttonClickArr=[];
	var buttonOverArr=[];
	var bubbleArr=[];
	var sampleArray=[];
	var lastBtnClick;
	var bubbleTitleArr=["ID_s07_titleTxt01","ID_s07_titleTxt02","ID_s07_titleTxt03","ID_s07_titleTxt04"];
	var bubbleTextArr=["ID_s07_bodyTxt01","ID_s07_bodyTxt02","ID_s07_bodyTxt03","ID_s07_bodyTxt04"];
	var popupImageArr=["popup_s7_1.png","popup_s7_2.png","popup_s7_3.png","popup_s7_4.png"];
	var popupArr=[];
	//var crossArr=[];
	var clickBool=false;
	var btnXPos=45
	var btnYPos=60;
	var textContainer;

  	var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFFFF").drawRect(198.55,46.85,278.95,228.75);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

	for(var i=0;i<totalBtns;i++){
		var container=new createjs.Container()
		var container2=new createjs.Container()
		_container.addChild(container);
		_container.addChild(container2);
		container.cursor="pointer";
		container2.cursor="pointer";
		container.id=i; 

		if(i==0){
			var connection = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:"connectinglines7.png"});
			container.addChild(connection);
		}
		btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png"});
		buttonArr.push(btn);
		container.addChild(btn);

		btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png"});
		buttonOverArr.push(btn1);
		container.addChild(btn1);
		btn1.visible=false;

		popupimage = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:popupImageArr[i]});
		container2.addChild(popupimage);
		popupArr[i]=popupimage;
		popupArr[i].visible=false;

		container2.addEventListener("click", handlerMethod);
		container.addEventListener("click", handlerMethod5);
		container.addEventListener("mouseover", handlerOverMethod);
		container.addEventListener("mouseout", handlerOutMethod);

		var txtbox = getCJSElement("TEXTBOX",{x:90,y:315,width:500,height:170,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(txtbox);

		bubbleArr[i]=txtbox;
		bubbleArr[i].visible=false;
	}

  }





	function showButtons(val) {
		for(var i = 0; i < totalBtns; i++) {
			buttonArr[i].visible = val;
			
		}
		connection.visible = val;
	}

	 function handlerMethod(event) {
		
		for(var i = 0; i < totalBtns; i++) {
			popupArr[i].visible=false;
			bubbleArr[i].visible=false;
			//crossArr[i].visible=false;
			if(clickBool==false)
			{
				showButtons(false);
				
				hit.visible=true;
				clickBool=true;
			}
			else 
			{
				
				showButtons(true);
				clickBool=false;
				
				hit.visible=false;
			}
		
		}
		//crossArr[event.target.id].visible=true;
		popupArr[event.target.id].visible=true;
		bubbleArr[event.target.id].visible=true;
		buttonOverArr[event.target.id].visible=false;
 	}

 	function handlerMethod4(event) {
		
		for(var i = 0; i < totalBtns; i++) {
			popupArr[i].visible=false;
			bubbleArr[i].visible=false;
			//crossArr[i].visible=false;
			if(clickBool==false)
			{
				
				clickBool=true;
			}
			else 
			{
				
				clickBool=false;
				
			}
			showButtons(false);
			hit.visible=true;
		}
		//crossArr[event.target.id].visible=true;
		popupArr[event.target.id].visible=true;
		bubbleArr[event.target.id].visible=true;
		buttonOverArr[event.target.id].visible=false;
 	}
function handlerMethod5(event) {
		
		for(var i = 0; i < totalBtns; i++) {
			popupArr[i].visible=false;
			bubbleArr[i].visible=false;
			//crossArr[i].visible=false;
			if(clickBool==false)
			{
				
				clickBool=true;
			}
			else 
			{
				
				clickBool=false;
				
			}
			showButtons(false);
			hit.visible=true;
		}
		//crossArr[event.target.id].visible=true;
		popupArr[event.target.id].visible=true;
		bubbleArr[event.target.id].visible=true;
		buttonOverArr[event.target.id].visible=false;
 	}

 
 function handlerOverMethod(event)
 {
	buttonOverArr[event.target.id].visible=true;
 }

  function handlerOutMethod(event)
 {
	buttonOverArr[event.target.id].visible=false;
 }

	
});