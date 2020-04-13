document.addEventListener('mouseup', function (e) {
    var text = window.getSelection().toString();
    var selection = window.getSelection().getRangeAt(0);
    var rect = selection.getBoundingClientRect();

    if (text != "") {
        var newNode = document.createElement("span");
        newNode.setAttribute('class', 'class_to_find_highlighted_text');
        selection.surroundContents(newNode);

        chrome.runtime.sendMessage({ search_expression: text }, function (response) {
            console.log("Response in content script: " + response.description);
            $(".class_to_find_highlighted_text").append("<input id='tooltip_with_response' title='" + response.description + "'>");
        });
    }
}, false);


//https://www.urbandictionary.com/define.php?term=weirdo
/*<div class="meaning">someone who is different from
<a class="autolink" href="/define.php?term=everybody%20else"
onclick="ga(&apos;send&apos;, &apos;event&apos;, &apos;Autolink&apos;, &apos;Click&apos;, &quot;everybody else&quot;);">everybody else</a>, but <a class="autolink" href="/define.php?term=that%27s%20okay" onclick="ga(&apos;send&apos;, &apos;event&apos;, &apos;Autolink&apos;, &apos;Click&apos;, &quot;that&apos;s okay&quot;);">that&apos;s okay</a> because they&apos;re being themselves and they aren&apos;t like <a class="autolink" href="/define.php?term=the%20fake" onclick="ga(&apos;send&apos;, &apos;event&apos;, &apos;Autolink&apos;, &apos;Click&apos;, &quot;the fake&quot;);">the fake</a> bitches you see these days</div>*/