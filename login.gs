function doGet(e) {
  // Get parameters from the URL
  var email = e.parameter.email;
  var password = e.parameter.password;

  // Get the active sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Get the data range
  var dataRange = sheet.getDataRange();

  // Get values in the sheet
  var values = dataRange.getValues();

  // Find the column indices for email and password
  var emailColumnIndex = values[0].indexOf('Email');
  var passwordColumnIndex = values[0].indexOf('Password');

  // Initialize response object
  var response = {
    message: 'false'
  };

  // Loop through rows to check for a match Most time consuming part
  for (var i = 1; i < values.length; i++) {
    if (values[i][emailColumnIndex] == email && values[i][passwordColumnIndex] == password) {
      response.message = 'true';
      break;
    }
  }

  // Return JSON response
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}
