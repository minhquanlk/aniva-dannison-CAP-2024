

  // initial plugin on ready
  if ($(".homepageFeature").length){

		$(".homepageFeature").each(function(){
			
			//Duplicate center h3
			targetDupeH3 = $(this).children(".options").children("h3").eq(1);
			
			
			targetDupeH3.clone(true).insertAfter(targetDupeH3);
			
			$(this).children(".options").children("h3").each(function( index ) {
				  if(index==2) $( this ).addClass("duplicated");
				  if(index==1) $( this ).addClass("first");
			});
				var animationLength = 750;
				var positionToMove = 0;
				var h3index;
				var hpfColor;
				var hpfLink;

				var hpfTitle;
				var hpfText;
				var hpfActions;
				var imgSwap;
				var targetDetailWindow = $(this).children(".detailWindow");
				var targetMainImageLink = $(this).children(".imgSwap").children(".mainImageLink");
				var targetMainImagePlayLink = $(this).children(".playOverlay").children(".mainImageLink");
				
				var targetActionBar = targetDetailWindow.children(".actionBar");
				var targetDetailsText = targetDetailWindow.children(".detailsText");
				var targetDetailsTextGroup = targetDetailsText.children(".group");
				var targetActionContainer = targetActionBar.children(".actionContainer");
				var targetActionBarContent = targetActionBar.children(".actionContainer").children(".actionBarContent");

				var targetDetailWindowAuto = $(this).children(".detailWindow");
				var targetMainImageLinkAuto = $(this).children(".imgSwap").children(".mainImageLink");
				var targetActionBarAuto = targetDetailWindowAuto.children(".actionBar");
				var targetDetailsTextAuto = targetDetailWindowAuto.children(".detailsText");
				var targetDetailsTextGroupAuto = targetDetailsTextAuto.children(".group");
				var targetActionContainerAuto = targetActionBarAuto.children(".actionContainer");
				var targetActionBarContentAuto = targetActionBarAuto.children(".actionContainer").children(".actionBarContent");

				/* Original Avery Colors*/
				bgcRedBright={dark:"#CC0000",light:"#FF0014"};
				bgcYellowOrange={dark:"#FF9900",light:"#FAB023"};
				bgcOrange={dark:"#FF3300",light:"#FF6600"};
				bgcToupe={dark:"#a99d81",light:"#c4b796"};
				bgcPurpleDark={dark:"#330066",light:"#580e9b"};
				bgcPurpleLight={dark:"#993399",light:"#9f60b5"};
				bgcGreenLime={dark:"#009900",light:"#33CC00"};
				bgcGreenMedium={dark:"#004300",light:"#006600"};
				bgcBlueMuted={dark:"#2b4872",light:"#3c639c"};
				bgcAqua={dark:"#3399FF",light:"#00CCFF"};

				// Shared colors
				bgcGreyDark={dark:"#333333",light:"#4d4f53"};
				bgcGreyLight={dark:"#666666",light:"#999999"};



				// MEDICAL COLORS
				bgcOrangeDark={dark:"#Cf673B",light:"#FF6633"};
				bgcGreenDark={dark:"#6D9830",light:"#8DC63F"};
				bgcBlueDark={dark:"#007BAE",light:"#0096D6"};
				bgcBlueLightDark={dark:"#4A9BAB",light:"#60C9DD"};
				bgcOrangeLightDark={dark:"#D9982D",light:"#FBB034"};
				bgcYellowDark={dark:"#B3B446",light:"#E3E65B"};
				bgcFusiaDark={dark:"#7B1264",light:"#A21984"};
				bgcPurpleDarkMedical={dark:"#9C6A97",light:"#BF83B9"};

              // JAC COLORS
              bgcJacPantone326={dark:"#00A295",light:"#00A295"};
              bgcJac50Pantone326={dark:"#97D1CB",light:"#97D1CB"};
              bgcJac30Pantone326={dark:"#C6E4E0",light:"#C6E4E0"};

				var currentIndex = 0;

				var scrollArray = [];

				var timer = $.timer(function() {
					//alert(scrollArray.length);
					if(currentIndex==1 && scrollArray.length<4){
						currentIndex=0;
					}
					else if(currentIndex==1 && scrollArray.length>3){
						currentIndex=3;
					}
					else if(currentIndex==3){
						currentIndex=0;
					}
					else if(currentIndex==0){
						currentIndex=1;
					}
					else{
						alert("No condition");
					}


					if(targetMainImageLink.children("img").length>1){

						autoRotate(scrollArray[currentIndex], scrollArray.length);
					}
				});

				$(this).children(".options").children("h3").each(function(index) {
					//alert("Pushing");
					scrollArray.push($(this));

				});

				// place if here to not start timer

				timer.set({ time : 5000, autostart : true });

				$(this).children(".options").children("h3").click(function(){
					
					timer.stop();

					//Gathering Data
					h3index = $(this).index();
					
					if (h3index == 0){positionToMove=0;imgSwap=".hpcMainImg1";}
					if ((h3index == 1)||(h3index == 2)){positionToMove=240;imgSwap=".hpcMainImg2";}
					if (h3index >= 3){positionToMove=480;imgSwap=".hpcMainImg3";}
					var targetImage = $(this).parents(".homepageFeature").children(".imgSwap").children(imgSwap);

					// Check if hidden param of video is true to show the overlay of the play button image
					if($(this).children(".video").val()){$(this).parent().parent().children(".playOverlay").removeClass('hide');}
					else{$(this).parent().parent().children(".playOverlay").addClass('hide');}

					if($(this).children(".hpfColor").val()){hpfColor = $(this).children(".hpfColor").val();}
					else{hpfColor="Aqua";}
					color=hpfColor;
					targetDetailWindow = $(".detailWindow");
					targetDetailWindow.removeClass();
					targetDetailWindow.addClass("detailWindow");
					targetDetailWindow.addClass("start"+hpfColor);
					var bgHpfColor = "bgc"+hpfColor;
					var startHpfColor = "start"+hpfColor;
					if($(this).children(".hpfLink").val() && !($(this).children(".video").val())){
                        hpfLink = $(this).children(".hpfLink").val();
                        $(this).parent().parent().children("a").removeAttr("data-target");
                        $(this).parent().parent().children("a").removeAttr("data-toggle");
                        $(this).parent().parent().children(".imgSwap").find("a").removeAttr("data-target");
                        $(this).parent().parent().children(".imgSwap").find("a").removeAttr("data-toggle");
                        $(this).parent().parent().children(".playOverlay").children("a").removeAttr("data-target");
                        $(this).parent().parent().children(".playOverlay").children("a").removeAttr("data-toggle");

                    }
					else{
                         if(($(this).children(".video").val())){

                             $(this).parent().parent().children("a").attr("data-target",$(this).children(".hpfLink").val());
                             $(this).parent().parent().children("a").attr("data-toggle","modal");
                             $(this).parent().parent().children(".playOverlay").children("a").attr("data-target",$(this).children(".hpfLink").val());
                             $(this).parent().parent().children(".playOverlay").children("a").attr("data-toggle","modal");
                             $(this).parent().parent().children(".imgSwap").find("a").attr("data-target",$(this).children(".hpfLink").val());
                             $(this).parent().parent().children(".imgSwap").find("a").attr("data-toggle","modal");
                         }

                        hpfLink="#";

                    }
					if($(this).children(".windowh3").length){hpfTitle = $(this).children(".windowh3").html();}

					if($(this).children(".windowh4").length){hpfText = $(this).children(".windowh4").html();}
					if($(this).children(".windowA").length){hpfActions = $(this).children(".windowA").html();}
					if (hpfActions == ""){hpfActions="<span class='actionArrow'>&ndash;&gt;</span><span class='linkDescription'>Read More</span>";}

					//Primary Animation
					targetMainImageLink.children("img").stop(true,true).fadeOut(animationLength);
					targetMainImageLink.children(imgSwap).stop(true,true).fadeIn(animationLength);

					targetDetailWindow.animate({
						left: positionToMove
					}, animationLength );
					//window.dave === window['dave']
					//	alert(hpfColor);
					
					
					targetActionContainer.children(".actionArrowBg").stop(true,true).animate({
						backgroundColor: window[bgHpfColor].dark
					}, animationLength );
					targetActionBar.children(".actionBarBg").stop(true,true).animate({
						backgroundColor: window[bgHpfColor].light
					}, animationLength );
					targetDetailsText.stop(true,true).animate({
						backgroundColor: window[bgHpfColor].light
					}, animationLength );
					targetDetailsTextGroup.stop(true,true).animate({
						opacity: 0
					}, animationLength/2 );
					targetActionBarContent.stop(true,true).animate({
						opacity: 0
					}, animationLength/2 );

					//Secondary Animation + New data population

					//setTimeout(function() {

						targetDetailsTextGroup.children("h3").html(hpfTitle);
						targetDetailsTextGroup.children("p").html(hpfText);
						targetActionBarContent.html(hpfActions);
						targetDetailWindow.attr("href", hpfLink);
						targetDetailWindow.removeClass();
						targetDetailWindow.addClass("detailWindow");
						targetDetailWindow.addClass(startHpfColor);
						targetMainImageLink.attr("href", hpfLink);
						targetMainImagePlayLink.attr("href", hpfLink);

						targetDetailsTextGroup.stop(true,true).animate({
							opacity: 1
						}, animationLength/2 );
						targetActionBarContent.stop(true,true).animate({
							opacity: 1
						}, animationLength/2 );
					//}, animationLength/2);
					//end timeout
				});
				//end function

				// sterling
				function autoRotate(theIndex,slides){

					//Gathering Data
					h3index = theIndex.index();
					
					var objReference = theIndex;
					if (h3index == 0){
						if(slides==3){
							//positionToMove=480;
							$(".duplicated").show();
							$(".first").show();
						}
						positionToMove=0;imgSwap=".hpcMainImg1";
					}
					if (h3index == 1){
						if(slides==3){
							positionToMove=480;
							$(".first").hide();
							$(".duplicated").hide();
						}else{ 
							positionToMove=240;
						}
						imgSwap=".hpcMainImg2";}
					if (h3index == 2){
						
							positionToMove=240;
						
						imgSwap=".hpcMainImg2";}
					if (h3index >= 3){
						
						positionToMove=480;imgSwap=".hpcMainImg3";
					}
					var targetImageAuto = objReference.parent(".homepageFeature").children(".imgSwap").children(imgSwap);
					//alert(targetImageAuto.val());
					//alert("Target image auto:"+targetImageAuto.length);
					//alert("IMG Length:"+$(this).parents(".homepageFeature").children(".imgSwap").children(imgSwap).length);

					// Check if hidden param of video is true to show the overlay of the play button image
					if(objReference.children(".video").val()){objReference.parent().parent().children(".playOverlay").removeClass('hide');}
					else{objReference.parent().parent().children(".playOverlay").addClass('hide');}

					if(objReference.children(".hpfColor").val()){hpfColor = objReference.children(".hpfColor").val();
						//alert("color:"+hpfColor);
					}				
					else{hpfColor="Aqua";}
					targetDetailWindow = $(".detailWindow");
					targetDetailWindow.removeClass();
					targetDetailWindow.addClass("detailWindow");
					targetDetailWindow.addClass("start"+hpfColor);
					if (!hpfColor.startsWith("bgc")){hpfColor = "bgc"+hpfColor;}

					if(objReference.children(".hpfLink").val() && !objReference.children(".video").val()){

                        hpfLink = objReference.children(".hpfLink").val();
                        objReference.parent().parent().children("a").removeAttr("data-target");
                        objReference.parent().parent().children("a").removeAttr("data-toggle");
                        objReference.parent().parent().children(".imgSwap").find("a").removeAttr("data-target");
                        objReference.parent().parent().children(".imgSwap").find("a").removeAttr("data-toggle");
                        objReference.parent().parent().children(".playOverlay").children("a").removeAttr("data-target");
                        objReference.parent().parent().children(".playOverlay").children("a").removeAttr("data-toggle");
                    }
					else{
                        if(objReference.children(".video").val()) {

                            objReference.parent().parent().children("a").attr("data-target",objReference.children(".hpfLink").val());
                            objReference.parent().parent().children("a").attr("data-toggle","modal");
                            objReference.parent().parent().children(".playOverlay").children("a").attr("data-target",objReference.children(".hpfLink").val());
                            objReference.parent().parent().children(".playOverlay").children("a").attr("data-toggle","modal");
                            objReference.parent().parent().children(".imgSwap").find("a").attr("data-target",objReference.children(".hpfLink").val());
                            objReference.parent().parent().children(".imgSwap").find("a").attr("data-toggle","modal");
                        }

                        hpfLink="#";

                    }
					if(objReference.children(".windowh3").length){hpfTitle = objReference.children(".windowh3").html();}

					if(objReference.children(".windowh4").length){hpfText = objReference.children(".windowh4").html();}
					if(objReference.children(".windowA").length){hpfActions = objReference.children(".windowA").html();}
					if (hpfActions == ""){hpfActions="<span class='actionArrow'>&ndash;&gt;</span><span class='linkDescription'>Read More</span>";}

					//alert(hpfLink);

					//Primary Animation

					targetMainImageLink.children("img").stop(true,true).fadeOut(animationLength);
					targetMainImageLink.children(imgSwap).stop(true,true).fadeIn(animationLength);
					targetDetailWindow.animate({
						left: positionToMove
					}, animationLength );

					targetActionContainerAuto.children(".actionArrowBg").stop(true,true).animate({
						backgroundColor: window[hpfColor].dark
					}, animationLength );

					targetActionBar.children(".actionBarBg").stop(true,true).animate({
						backgroundColor: window[hpfColor].light
					}, animationLength );
					targetDetailsText.stop(true,true).animate({
						backgroundColor: window[hpfColor].light
					}, animationLength );
					targetDetailsTextGroup.stop(true,true).animate({
						opacity: 0
					}, animationLength/2 );
					targetActionBarContent.stop(true,true).animate({
						opacity: 0
					}, animationLength/2 );

					//Secondary Animation + New data population

					//setTimeout(function() {
						//alert(targetDetailWindow);
						targetDetailsTextGroup.children("h3").html(hpfTitle);
						targetDetailsTextGroup.children("p").html(hpfText);
						targetActionBarContent.html(hpfActions);
						targetDetailWindow.attr("href", hpfLink);
						targetMainImageLink.attr("href", hpfLink);
						targetMainImagePlayLink.attr("href", hpfLink);
						targetDetailsTextGroup.stop(true,true).animate({
							opacity: 1
						}, animationLength/2 );
						targetActionBarContent.stop(true,true).animate({
							opacity: 1
						}, animationLength/2 );
					//}, animationLength/2);
				}
				//end sterling
		});
}