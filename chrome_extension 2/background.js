chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting
      .insertCSS({
        target: {
          tabId,
        },
        files: ["./foreground-styles.css"],
      })
      .then(() => {
        chrome.scripting.executeScript({
          target: {
            tabId,
          },
          files: ["./foreground.js"],
        });
      })
      .then(() => {
        console.log("injected the foreground script");
      })
      .catch((e) => console.log(e));
  }
});
