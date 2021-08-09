function callWebApi(token, apiMethod, payload) {
  const response = UrlFetchApp.fetch(
    `https://www.slack.com/api/${apiMethod}`,
    {
      method: "post",
      contentType: "application/x-www-form-urlencoded",
      headers: { "Authorization": `Bearer ${token}` },
      payload: payload,
    }
  );
  console.log(`Web API (${apiMethod}) response: ${response}`)
  return response;
}

const token = PropertiesService.getScriptProperties().getProperty("SLACK_BOT_TOKEN");
const apiResponse = callWebApi(token, "chat.postMessage", {
  channel: "#random",
  text: ":wave: こんにちは！"
});

