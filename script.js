  document.querySelectorAll('.menu-details li').forEach(function(item) {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
