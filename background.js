chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.search_expression != "") {
            $.ajax({
                url: "https://www.urbandictionary.com/define.php?term=" + request.search_expression,
                type: 'GET',
                success: function (data) {
                    let desc = $(data).find("div.meaning").first().text()
                    sendResponse({ description: desc });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                },
                async: false
            });
        }
    }
);