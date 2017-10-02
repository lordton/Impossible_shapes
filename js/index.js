
$(document).ready(function(){

var count = 0;

$(".triangle1").click(function (){
count++
console.log(count)


if (count==1) {
$(this).css( "border-color", "transparent transparent transparent #968284" ) 
}

else if (count==2) {
$(this).css( "border-color", "transparent transparent transparent #FFFCCA" ) }

else if (count==3) {
$(this).css( "border-color", "transparent transparent transparent #C0DBFD" ) }

else if (count==4) {
$(this).css( "border-color", "transparent transparent transparent yellow" ) }

else if (count==5) {
$(this).css( "border-color", "transparent transparent transparent pink" ) }

else if (count==6) {
$(this).css( "border-color", "transparent transparent transparent #422E92" )
  count=0
}


$(this).text(count)

});


$(".triangle2").click(function (){
count++
console.log(count)


if (count==1) {
$(this).css( "border-color", "transparent #968284 transparent transparent" ) 
}

else if (count==2) {
$(this).css( "border-color", "transparent #FFFCCA transparent transparent" ) }

else if (count==3) {
$(this).css( "border-color", "transparent #C0DBFD transparent transparent" ) }

else if (count==4) {
$(this).css( "border-color", "transparent yellow transparent transparent" ) }

else if (count==5) {
$(this).css( "border-color", "transparent pink transparent transparent" ) }

else if (count==6) {
$(this).css( "border-color", "transparent #422E92 transparent transparent" )
  count=0
   }

$(this).text(count)

});





    $(".pushme").click(function () {
       $(this).text("DON'T PUSH ME");
    });
    
    $(".pushme-with-color").click(function () {
       $(this).text("DON'T PUSH ME");
       $(this).addClass("btn-danger");
       $(this).removeClass("btn-warning");
    });
    
    $(".with-color").click(function () {    
       if($(this).hasClass("btn-warning"))
       {
          $(this).addClass("btn-danger");
          $(this).removeClass("btn-warning");
       }
       else{
          $(this).addClass("btn-warning");
          $(this).removeClass("btn-danger");
       }
    });

    $(".pushme2").click(function(){
    $(this).text(function(i, v){
       return v === 'PUSH ME' ? 'PULL ME' : 'PUSH ME'
    });
    });
});