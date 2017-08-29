		var link = document.querySelector(".map-contacts-btn");
		var popup = document.querySelector(".modal-feedback");
		var close = document.querySelector(".modal-feedback-close");
		var login = popup.querySelector("[name=name]");
		
		link.addEventListener("click", function (evt) {
			evt.preventDefault( );
			popup.classList.add("modal-feedback-show");
			login.focus( );
			});
		close.addEventListener("click", function (evt) {
			evt.preventDefault( );
			popup.classList.remove("modal-feedback-show");
			});	