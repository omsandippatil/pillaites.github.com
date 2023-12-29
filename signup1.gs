//Signup First Screen to accept username and password

function doGet(e) {
  var email = e.parameter.email;
  var password = e.parameter.password;

  if (!email || !password) {
    return ContentService.createTextOutput("Missing email or password parameters");
  }
  
  var sheet = SpreadsheetApp.openById('1KSe4G8KAB9cFif6jGIhN_TomrTzJaw295FAwxcC0nqg').getActiveSheet();
  var emailColumn = 2; // Assuming email is in the first column

  // Check if the email already exists
  var emailExists = sheet.getRange(2, emailColumn, sheet.getLastRow() - 1, 1)
                        .getValues()
                        .flat()
                        .includes(email);

  if (emailExists) {
    return ContentService.createTextOutput("False");
  } else {
    // Add a new row with the email and password
   
   var lastrow = sheet.getLastRow();
    var newRow = [lastrow,email, password];
    sheet.appendRow(newRow);
    return ContentService.createTextOutput("True");
  }
}
