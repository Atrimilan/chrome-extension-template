
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get((result) => {
        console.log(result);    // Print existing storage data to the service worker console
    });

    InitStorage();
});

function InitStorage() {
    chrome.storage.sync.get((result) => {
        chrome.storage.sync.set({
            time: (result.time === undefined) ? 15 : result.time    // Set default time = 15 if not set
        });
    });
}

function ClearStorage() {
    chrome.storage.sync.clear();
}