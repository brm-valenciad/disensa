var location = window.location;

function test(){
	$("#item-articulo").find(".text-black-50.p-0 m-0.p-1").each(function(){
		console.info($(this).css("border","1px solid red"));
	});
}

console.info(location);

test();

console.warn("Agregado el ");
