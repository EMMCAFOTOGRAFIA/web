
function loadComponent(elementId, filePath) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar ' + filePath);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
 
  window.onload = function() {
    loadComponent('header', 'header.html');
    loadComponent('footer', 'footer.html');
  };
  