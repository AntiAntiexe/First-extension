document.addEventListener('DOMContentLoaded', function() {
    let convertButton = document.getElementById('convertButton');
    let resetButton = document.getElementById('resetButton');

    convertButton.addEventListener('click', function(){
        chrome.tabs.query({active :true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: 'convert'});
        });
    });

    resetButton.addEventListener('click', function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            cchrom.tabs.sendMessage(tabs[0])
        })
    })
})