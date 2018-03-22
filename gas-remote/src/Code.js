function onOpen(e) {
  var ui = DocumentApp.getUi();
  ui.createMenu('Hypothesis')
    .addItem('Launch Hypothesis', 'hypothesis')
    .addToUi();
}

function hypothesis() {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('Hypothesis');
  DocumentApp.getUi().showSidebar(html);
}