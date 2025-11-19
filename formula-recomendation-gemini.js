const properties = PropertiesService.getScriptProperties().getProperties();
const geminiApiKey = properties['GOOGLE_API_KEY'];

const geminiModelsUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${geminiApiKey}`;

const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite-preview-02-05:generateContent?key=${geminiApiKey}`;


function callGemini(prompt, temperature = 0) {
  const payload = {
    "contents": [
      {
        "parts": [
          {
            "text": prompt
          },
        ]
      }
    ],
    "generationConfig": {
      "temperature": temperature,
    },
  };

  const options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(payload),
    'muteHttpExceptions': true

  };

  const response = UrlFetchApp.fetch(geminiEndpoint, options);
  const data = JSON.parse(response.getContentText());
  const content = data["candidates"][0]["content"]["parts"][0]["text"];
  return content;
}

function testGemini(formula) {
  const prompt = `You are an expert in google SpreadSheets. Your task is to briefly recommend improvements in the following formula: ${formula}`;
  const output = callGemini(prompt);
  Logger.log(output);
  return output;
}

function onOpen(e) {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Validate AI")
    .addItem("Validate", "extractFormula")
    .addToUi();
}

function extractFormula() {
  const cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  const formula = cell.getFormula();
  Logger.log(formula);

  const response = testGemini(formula);
  const ui = SpreadsheetApp.getUi();
  ui.alert(response);
}

function listModels() {
  const options = {
    method: "get",
    muteHttpExceptions: true
  };
  const response = UrlFetchApp.fetch(geminiModelsUrl, options);
  const data = JSON.parse(response.getContentText());
  Logger.log(JSON.stringify(data, null, 2))
}