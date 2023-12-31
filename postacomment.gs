function doGet(e) {
  var uid = e.parameter.uid;
  var threadId = e.parameter.threadId;
  var comtxt = e.parameter.comtxt;
 

  if (uid && threadId && comtxt) {
    addCommentToSheet(uid, threadId, comtxt);
    return ContentService.createTextOutput("successful");
  } else {
    return ContentService.createTextOutput("failed");
  }
}

function addCommentToSheet(uid, threadId, comtxt) {
  var sheetName = "comments";
  var sheet = getSheet(sheetName);

  var newRow = [uid, threadId, comtxt ]; 
  sheet.appendRow(newRow);
}

function getSheet(sheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    // If the sheet doesn't exist, you may want to add headers
    sheet.appendRow(["UID", "Thread ID", "Comment"]);
  }

  return sheet;
}
