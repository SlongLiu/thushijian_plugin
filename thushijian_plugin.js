// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Improve the ui of http://thshijian.tsinghua.edu.cn/.
// @author       Shilong Liu.
// @match        http://thshijian.tsinghua.edu.cn/f/xs/xmsq/index
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==


function commentCallbackFunction (jNode) {
    // console.log(jNode);
    // console.log(jNode[0]);
    var mid = jNode[0].children[1].children[0].getAttribute('mid');
    jNode[0].children[1].remove();

    let div = document.createElement("div");
    let a = document.createElement("a");
    a.className="btn_orange_b";
    a.text = "apply";
    a.addEventListener("click", function() {
        window.open('http://thshijian.tsinghua.edu.cn/f/xs/xmsq/apply/'+mid,'_blank');
    }, false);
    div.append(a);
    jNode.append(div);
    // jNode.text ("This comment changed by waitForKeyElements().");
}


(function() {
    'use strict';

    waitForKeyElements(".item_caozuo", commentCallbackFunction)

    // document.getElementsByClassName("applyProject").onclick = "window.abc('helloWorld')";
    // Your code here...
})();