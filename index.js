function copytoclip(button) {
    var copyText = button.textContent; // Get the button's text
    var originalcontent = button.textContent;
    navigator.clipboard.writeText(copyText).then(() => {
        button.textContent = "✔ copied!";
        setTimeout(function(){
            button.textContent = originalcontent;
        }, 2000);
        //alert("Copied: " + copyText);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
    
}