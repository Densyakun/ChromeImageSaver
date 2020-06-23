chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    //var elems = document.body.getElementsByTagName("*");
    var elems = document.body.getElementsByTagName("img");
    for (let i of elems)
        if (attr = i.getAttribute("href") || i.getAttribute("src")) {
            e = attr.split('.');
            if (e.length > 0) {
                e = e[e.length - 1];
                e = e != 'html';
            }
            else
                e = true;
            if (e) {
                var a = document.createElement("a");
                a.setAttribute("href", attr);
                a.setAttribute("target", "_blank");
                a.setAttribute("download", attr + ".png");
                a.click();
                a.remove();
            }
        }
});