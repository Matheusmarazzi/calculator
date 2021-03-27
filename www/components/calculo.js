// This is a JavaScript file

//variavel do texto
var textodisplay ="";

//variavel do primeiro valor
var valor1 = 0;

//identificar operador
var operador = "";

function zerarDisplay(){
    textodisplay = "";
   $(".display").val("0");

}

$(document).on("click",".botao",function(){
  textodisplay += $(this).val();
  $(".display").val(textodisplay);

})

$(document).on("click",".ope",function(){
  operador = $(this).html();
  valor1 = textodisplay;
  zerarDisplay();




})
$(document).on("click","#limpar",function(){
  zerarDisplay();
  valor1=0;

})

$(document).on("click","#igual",function(){
  var valor2 = textodisplay;
  zerarDisplay();
  if(operador == "+"){
    textodisplay =parseFloat(valor1) + parseFloat(valor2);

  }
  if(operador == "-"){
    textodisplay =parseFloat(valor1) - parseFloat(valor2);

  }
  if(operador == "*"){
    textodisplay =parseFloat(valor1) * parseFloat(valor2);

  }
  if(operador == "/"){
    textodisplay =parseFloat(valor1) / parseFloat(valor2);

  }
  $(".display").val(textodisplay);
  



})