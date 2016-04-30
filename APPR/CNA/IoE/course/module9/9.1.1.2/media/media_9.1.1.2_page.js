function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
	

   if(_id==1){
   
   	 var totalBtns=5;
	 var btnXPosArr=[96,96,561.85,96,561.85];
  	 var btnYPosArr=[117.8,222.8,215.8,51.35,55.8];
  	 var crossXPosArr=[480.45,480.45,480.45];
  	 var crossYPosArr=[75,75,75];
	 var buttonArr=[];
	 var buttonClickArr=[];
	 var buttonOverArr=[];
	 var bubbleArr=[];
	 var bubbleTitleArr=["ID_s01_titleTxt01","ID_s01_titleTxt02","ID_s01_titleTxt03", "ID_s01_titleTxt04","ID_s01_titleTxt05"];
	 var bubbleTextArr=["ID_s01_bodyTxt01","ID_s01_bodyTxt02","ID_s01_bodyTxt03", "ID_s01_bodyTxt04","ID_s01_bodyTxt05"];
	 var popupImageArr=["popup1.png","popup2.png","popup3.png", "popup4.png","popup5.png"];
	 var popupArr=[];
	 var crossArr=[];
	 var clickBool=false;
	
  	var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFFFF").drawRect(0,0,680,490);
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
			var connection = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:"connectlines.png"});
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

		/*var btn2 = getCJSElement("IMAGE",{x:crossXPosArr[i],y:crossYPosArr[i],width:45,height:45,src:"cross.png"});
		container2.addChild(btn2);
		crossArr[i]=btn2;
		crossArr[i].visible=false;*/
	
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

  		 var totalBtns=8;
	     var btnXPosArr=[201.55,255.7,279.4,302.9,337.4,361.95,383.25,407];
  	     var btnYPosArr=[60.8,254.8,60.8,254.8,60.8,254.8,60.8,254.8];
  	
		 var buttonArr=[];
		 var buttonClickArr=[];
		 var buttonOverArr=[];
		 var bubbleArr=[];
		 var bubbleTitleArr=["ID_s02_titleTxt01","ID_s02_titleTxt02","ID_s02_titleTxt03", "ID_s02_titleTxt04","ID_s02_titleTxt05","ID_s02_titleTxt06","ID_s02_titleTxt07","ID_s02_titleTxt08"];
		 var bubbleTextArr=["ID_s02_bodyTxt01","ID_s02_bodyTxt02","ID_s02_bodyTxt03", "ID_s02_bodyTxt04","ID_s02_bodyTxt05","ID_s02_bodyTxt06", "ID_s02_bodyTxt07","ID_s02_bodyTxt08"];
		 var popupImageArr=["popup6.png","popup7.png","popup8.png", "popup9.png","popup10.png","popup11.png", "popup12.png","popup13.png"];
		 var popupArr=[];
		 var crossArr=[];
		 var clickBool=false;
	
     	var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFFFF").drawRect(0,0,680,490);
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
		container.addEventListener("click", handlerMethod2);
		container.addEventListener("mouseover", handlerOverMethod);
		container.addEventListener("mouseout", handlerOutMethod);

		var txtbox = getCJSElement("TEXTBOX",{x:90,y:305,width:500,height:170,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
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
		popupArr[event.target.id].visible=true;
		bubbleArr[event.target.id].visible=true;
		buttonOverArr[event.target.id].visible=false;
 	}

 	 function handlerMethod2(event) {

		for(var i = 0; i < totalBtns; i++) {
			popupArr[i].visible=false;
			bubbleArr[i].visible=false;
			if(clickBool==false)
			{
				//hit.visible=true;
				clickBool=true;
			}
			else 
			{
				
				
				clickBool=false;
				//hit.visible=false;
			}

			showButtons(false);
			hit.visible=true;
			
		
		}
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