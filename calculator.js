function action(num)
{
  $(".display").val($(".display").val() + num);
}

function c()
{
	$(".display").val("");
}
	
	
 function del()
{
 	let value=$(".display").val();
	$(".display").val(value.substring(0, value.length-1))
}

function eql()
{
$(".display").val(eval($(".display").val()))
}


