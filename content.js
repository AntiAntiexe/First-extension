chrom.runtime.onMessage.addListener(function(request, sender, snedResponse){
    if (request.action === 'convert'){
        document.document.style.filter = 'grayscale(100%)';
        sendResponse({message: 'Website converted to black and white.'})
    } else if (request.action === 'reset'){
        document.document.style.filter = 'none';
        sendResponse({message: 'Website reset to original colours.'})
    }
});