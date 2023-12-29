//Signup First Screen to accept username and password

function doGet(e) {
  var email = e.parameter.email;
  var password = e.parameter.password;

  if (!email || !password) {
    return ContentService.createTextOutput("Missing email or password parameters");
  }
  
  var sheet = SpreadsheetApp.openById('Your Sheet ID').getActiveSheet();
  var emailColumn = 2;  

  // Check if the email already exists
  var emailExists = sheet.getRange(2, emailColumn, sheet.getLastRow() - 1, 1)
                        .getValues()
                        .flat()
                        .includes(email);

  if (emailExists) {
    return ContentService.createTextOutput("False");
  } else {
    // Add a new row with the email and password
    return ContentService.createTextOutput("True");
  }
}

