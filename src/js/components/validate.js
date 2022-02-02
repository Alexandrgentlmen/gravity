// // validate forms
// let validateForms = function (selector, rules) {

// 	new window.JustValidate(selector, {
// 		rules: rules,
// 		submitHandler: function (form, values, ajax) {
// 			var formData = new FormData(form);

// 			var xhr = new XMLHttpRequest();


// 			xhr.onreadystatechange = function () {
// 				if (xhr.readyState === 4) {

// 					if (xhr.status === 200) {
// 						console.log('Отправлено!')
// 					} else {

// 					}
// 				}
// 			}

// 			// Add any event handlers here...
// 			xhr.open('POST', "mail.php", true);
// 			xhr.send(formData);

// 			form.reset();
// 		},
// 	});
// }

// // validateForms('.mailing__form', { email: { required: true, email: true } }, 'mailing-window', 'materialy s proshloj konferencii');
// validateForms('.newsletter__form', { email: { required: true, email: true }, tel: { required: true } });
// validateForms('.subs-form', { email: { required: true, email: true } });
