document.addEventListener("DOMContentLoaded", function() {
    for (var key in localStorage) {
        if (key.startsWith("hexo-blog-encrypt#")) {
            localStorage.removeItem(key);
        }
    }
});
