// PDF Viewer Modal Handler
document.addEventListener('DOMContentLoaded', function () {
  var pdfModalElement = document.getElementById('pdf-modal');
  if (pdfModalElement) {
    // Initialize Bootstrap modal
    var pdfModal = new bootstrap.Modal(pdfModalElement);

    // Find all "View Slides" buttons and add click handlers
    var viewButtons = document.querySelectorAll('[data-pdf-url]');
    viewButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();

        // Extract info from data-* attributes
        var pdfURL = button.getAttribute('data-pdf-url');
        var pdfTitle = button.getAttribute('data-pdf-title');

        // Construct the PDF.js viewer URL
        var viewerURL = '/assets/pdfjs/web/viewer.html?file=' + encodeURIComponent(pdfURL);

        // Update the iframe
        var iframe = pdfModalElement.querySelector('#pdf-iframe');
        iframe.src = viewerURL;

        // Show the modal
        pdfModal.show();
      });
    });

    // Clear the iframe src when modal is closed to stop the PDF from running in the background
    pdfModalElement.addEventListener('hidden.bs.modal', function () {
      var iframe = pdfModalElement.querySelector('#pdf-iframe');
      iframe.src = 'about:blank';
    });
  }
});
