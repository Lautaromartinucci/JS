const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_tzk9hnh';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar Email';
        Swal.fire({
          icon: 'success',
          title: 'Enviado!',
          text: 'Tu comentario a sido enviado con exito!',
        })
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  });
