<script>
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var parser = new DOMParser();
                var htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');

                // Access the element by its ID within the parsed document
                var contentElement = htmlDoc.getElementById('content');

                document.getElementById('content').innerHTML = contentElement.innerHTML;
            }
        };
        xhr.open('GET', 'https://web.kpi.kharkov.ua/ist/uk/spetsialnosti/bakalavriat/126-informatsijni-systemy-ta-tehnologiyi/', true);
        xhr.send();
    </script>
