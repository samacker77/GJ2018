window.onload=function(){
  stopLoading();
  $(".leftUpper").addClass("leftUpperAnimated");
  $('.leftRightDown').addClass("leftRightDownAnimated");
  $('.leftLeftDown').addClass("leftLeftDownAnimated");
}
$(document).ready(function(){
  initLoading();
  $("body").click(function(){
      $("#login_popup").css({display:'none',opacity:'0'});
  });

  $("div").not(".burger,#user_menu,.user_menu_entry").hover(function(event){
      $("#user_menu").css({display:'none',opacity:'0'});
  });

  $(".burger").hover(function(event){
        event.stopPropagation();
      $("#user_menu").css({display:'block',opacity:'1'});
  });
})

function changeTab(index,tab){
  if(tab!=1){
    $("#"+index+"_tabpage_1").fadeOut(200);
  }
  if(tab!=2){
    $("#"+index+"_tabpage_2").fadeOut(200);
  }
  if(tab!=3){
    $("#"+index+"_tabpage_3").fadeOut(200);
  }
  if(tab!=4){
    $("#"+index+"_tabpage_4").fadeOut(200);
  }
  $("#"+index+"_tabpage_"+tab).fadeIn(200);
}

function closeIframe(){
  $("#login_popup").css({display:'none',opacity:'0'});
  location.reload();
}

function loginClick(event){
  event.stopPropagation();
  $("#login_popup").css({display:'block',opacity:'1'});
}

function login(event){
  alert("Login Before Registration");
  event.stopPropagation();
  loginClick();
}

function logout(){
  $("#user_menu").css({display:'none',opacity:'0'});
  initLoading();
  $.ajax({
      type: "POST",
      url: "../Register/logout.php",
      success: function( result ){
        if(result=='success'){
          location.reload();
          stopLoading();
        }else{
          alert('No Internet Connection');
        }
      }
    });
}

function register(workshopId,index){
    if(workshopId=='WID02'){
      $("#register_iframe").attr({'src':"../Register/register_workshop_team.php?workshopId="+workshopId+"&lastPage=Workshops&numParticipant=5&slide="+index});
      $("#popup").css({'visibility':'visible','opacity':1});
    }else if(workshopId=='WID05' || workshopId=='WID06'){
      $("#register_iframe").attr({'src':"../Register/register_workshop_team.php?workshopId="+workshopId+"&lastPage=Workshops&numParticipant=4&slide="+index});
      $("#popup").css({'visibility':'visible','opacity':1});
    }else{
      window.location.href="../Register/register_workshop.php?workshopId="+workshopId+"&lastPage=Workshops&slide="+index;
    }
}

function closeRegisterSimply(){
  $("#popup").css({'visibility':'hidden','opacity':0});
}

function closeRegister(slide){
  $("#popup").css({'visibility':'hidden','opacity':0});
  window.location.href="../Workshops/index.php?slide="+slide;
}

function hide_popup(){
  $("#popup").css({'visibility':'hidden','opacity':0});
}

function unregister(workshopId,index){
  window.location.href="../Register/unregister_workshop.php?workshopId="+workshopId+"&lastPage=Workshops&slide="+index;
}




