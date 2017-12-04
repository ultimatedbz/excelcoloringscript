function onEdit() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];

  // Add Green to products.
  var range = sheet.getRange("A5:A")
  var values = range.getValues();

  var colors = new Array(values.length);

  for (var x = 1; x <= values.length; x++) {
    var cell = range.getCell(x, 1);
    colors[x - 1] = new Array(1);
    if (!cell.isBlank()) {
      colors[x - 1][0] = "#C8E6C9";
    } else {
      colors[x - 1][0] = null;
    }
  }
  range.setBackgrounds(colors);
  
  // Add Grey to calculated Units.
  range = sheet.getRange("F5:F")
  values = range.getValues();
  
  colors = new Array(values.length);

  for (var x = 1; x <= values.length; x++) {
    var cell = range.getCell(x, 1);
    colors[x - 1] = new Array(1);
    if (!cell.isBlank()) {
      colors[x - 1][0] = "#f0f0f0";
    } else {
      colors[x - 1][0] = null;
    }
  }
  range.setBackgrounds(colors);
  
  // Add Grey to cost.
  range = sheet.getRange("H5:H")
  values = range.getValues();
  
  colors = new Array(values.length);

  for (var x = 1; x <= values.length; x++) {
    var cell = range.getCell(x, 1);
    colors[x - 1] = new Array(1);
    if (!cell.isBlank()) {
      colors[x - 1][0] = "#f0f0f0";
    } else {
      colors[x - 1][0] = null;
    }
  }
  range.setBackgrounds(colors);
}
