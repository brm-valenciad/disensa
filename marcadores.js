
/*::::::FORMULARIO DE CONTACTO:::::*/
	$("body").on("click", "#item-articulo .text-black-50.p-0.m-0.p-1", function(){
		var me = $(this).find("strong").text().toLowerCase().trim(),
			category = "contacto",
			action   = "clic",
			label    = "";
			if ( me != undefined && me != ""){
				switch(me){
					case "teléfono:":
						label = "ver-teléfono";
					break;

					case "whatsapp":
						label = "contacto-whatsapp";
					break;

					case "email:":
						label = "enviar-correo";
					break;

					case "si eres ferretero disensa:":
						label = "ir-portal-disensa";
					break;
				}
			}
			dataLayer.push({'Categoria': category, 'acción': action,  'label': label, 'event': label});
	});
	//Selects
	$("body").on("change", "#item-articulo #contact-form select", function(){
		var me_ = ( $(this).attr("id") == undefined ) ? "categoria" :  $(this).attr("id"); 
			category = "contacto",
			action = "";

			if ( me_ != undefined && me_ != ""){
				switch(me_){
					case "ciudad":
						action = "seleccionar-ciudad";
					break;

					case "categoria":
						action = "select-categoria-usuario-form-contacto";
					break;
				}
			}
		dataLayer.push({'Categoria': category, 'acción': action,  'label': $(this).val(), 'event': action});
	});	
	//Boton para enviar formulario
	$("body").on("submit","#contact-form .btn-primary", function(){
		dataLayer.push({'Categoria': 'contacto', 'acción': 'enviar',  'label': 'enviar-contacto', 'event': 'enviar-form-contacto'});
	});
/*::::::FORMULARIO DE SERVICIO:::::*/
	$("body").on("change", "#FormVideoLLamada select", function(){
		var me 		 = $(this).attr("name"),
			category = "servicio",
			action   = "",
			event_   = "";

		switch (me){
			case "cupo":
				action = "select-categoria-usuario";
				event_ = "select-categoria-usuario-form-videollamada"
			break;

			case "producto":
				action = "select-necesidad";
				event_ = "enviar-form-videollamada"
			break;
		}
		console.warn($(this).val());
		dataLayer.push({'Categoria': category, 'acción': action,  'label': $(this).val(), 'event': event_});
	});

	$("body").on("submit","#FormVideoLLamada .btn-primary", function(){
		dataLayer.push({'Categoria': category, 'acción': 'submit',  'label': 'enviar-contacto', 'event': 'enviar-form-videollamada'});
	});
/*::::FORMULARIO DE TIENDAS:::: */
	$("body").on("change", "#item-articulo select", function(){
		var me_ = $(this).attr("id"),
			category = "'tiendas'",
			action   = "",
			event_   = "";

		if(me_){
			switch (me_){
				case "ciudad":
					action = "select-ciudad";
					event_ = "select-ciudad-tiendas"
				break;

				case "departamento":
					action = "select-departamento";
					event_ = "select-departamento-tiendas"
				break;
			}	
		}
		console.error($(this).val());
		dataLayer.push({'Categoria': category, 'acción': action,  'label': $(this).val(), 'event': event_});
	});
	$("body").on("click", "#item-articulo button.btn-success.btn-block", function(){
		dataLayer.push({'Categoria': 'tiendas', 'acción': 'select-ciudad',  'label': '__', 'event': 'select-ciudad-tiendas'});
	})
/*::::FORMULARIO DE MI DISENSA:::: */
	$("body").on("submit", "#contact-form button#btnSubmit0", function(){
		console.info("in yout ");
		dataLayer.push({'Categoria': 'mi-disensa', 'acción': 'onsubmit',  'label': 'enviar-contacto', 'event': 'enviar-form-registro'});
	})
