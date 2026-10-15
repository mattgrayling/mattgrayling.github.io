// Bootstrap 4 PDF viewer: populate on open and release the iframe on close.
document.addEventListener('DOMContentLoaded', function () {
  var pdfModalElement = document.getElementById('pdf-modal');
  if (!pdfModalElement) return;

  var iframe = pdfModalElement.querySelector('#pdf-iframe');
  var title = pdfModalElement.querySelector('#pdf-modal-label');
  var pdfModal = $(pdfModalElement);

  pdfModal.on('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var pdfURL = button && button.getAttribute('data-pdf-url');
    if (!pdfURL) {
      event.preventDefault();
      return;
    }
    var pdfTitle = button.getAttribute('data-pdf-title') || 'Slides';
    title.textContent = pdfTitle;
    iframe.title = pdfTitle;
    // Wait for the modal transition before PDF.js measures its viewport.
    pdfModal.one('shown.bs.modal', function () {
      iframe.src = pdfModalElement.getAttribute('data-viewer-url') + '?file=' + encodeURIComponent(pdfURL);
    });
  });

  pdfModal.on('hidden.bs.modal', function () {
    iframe.src = 'about:blank';
  });
});
