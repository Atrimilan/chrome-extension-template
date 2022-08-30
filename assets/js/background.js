
// Function called when extention is installed
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get((result) => {
        console.log(result);    // Print existing storage data to the service worker console
    });

    InitStorage();
});

// Initialize default values
function InitStorage() {
    chrome.storage.sync.get((result) => {
        chrome.storage.sync.set({
            time: (result.time === undefined) ? 15 : result.time    // Set default value if not set yet
        });
    });
}

// Clear Chrome storage
function ClearStorage() {
    chrome.storage.sync.clear();
}