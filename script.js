document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
  var instance = M.Carousel.init({
fullWidth: true,
indicators: true
  });
  var instance = M.Carousel.init({
    fullWidth: true
  });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.materialboxed');
var instances = M.Materialbox.init(elems);
});

document.getElementById('codigo').addEventListener('change', selecSeccion);
  function selecSeccion(){

    if (document.getElementById('codigo').value === "ATC"){
      alert('Estás listo para construir');
      document.getElementById('guia').innerHTML =
      `<div class="col s2"></div>
      <div class="col s8">
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQLUDY7rLokPCU9uNJ5mTJVP5GqoREQ0V9QuIoIspTGCTTsQfRb5SDd7hUqa-M6lVl4Uv45bYySNR7B/embed?start=false&loop=false&delayms=60000" frameborder="0" width="1024" height="797" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      <div class="col s2"></div>
    </div>
`
    }
     if (document.getElementById('codigo').value != "ATC"){
      alert('Aún no cumples el reto' );
    }
      document.getElementById('codigo').value = "";

  }
