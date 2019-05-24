window.addEventListener("load", function() {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#020199"
            },
            "button": {
                "background": "#fff",
                "text": "#020199"
            }
        },
        "content": {
            "href": "/privacy"
        },
        "dismissOnScroll": 100,
        "dismissOnTimeout": 5000
    })
});