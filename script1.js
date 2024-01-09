
<script>
    document.getElementById('filterInput').addEventListener('input', filterTable);

    function filterTable() {
        var input = document.getElementById('filterInput');
        var filter = input.value.toUpperCase();
        var table = document.getElementById('data-table');
        var rows = table.getElementsByTagName('tr');

        for (var i = 1; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName('td');
            var display = false;

            for (var j = 0; j < cells.length; j++) {
                var cell = cells[j];

                if (cell) {
                    if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        display = true;
                        break;
                    }
                }
            }

            if (display) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
</script>
