<script>
    // Create filter dropdowns dynamically
    var filterContainer = document.getElementById('filterContainer');

    var form = document.createElement('form');
    form.id = 'filterForm';

    var columns = ['Name', 'Age', 'Email']; // Adjust with your column names

    columns.forEach(function (column) {
        var label = document.createElement('label');
        label.htmlFor = column.toLowerCase() + 'Filter';
        label.textContent = column + ':';
        form.appendChild(label);

        var select = document.createElement('select');
        select.id = column.toLowerCase() + 'Filter';
        select.name = column.toLowerCase() + 'Filter';
        select.innerHTML = '<option value="">All</option>'; // Add an option for selecting all values

        var uniqueValues = getUniqueValues(column);
        uniqueValues.forEach(function (value) {
            var option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            select.appendChild(option);
        });

        form.appendChild(select);
    });

    var submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Filter';
    form.appendChild(submitButton);

    filterContainer.appendChild(form);

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        filterTable();
    });

    // Function to get unique values from a column
    function getUniqueValues(column) {
        var table = document.getElementById('data-table');
        var cells = Array.from(table.querySelectorAll('td:nth-child(' + (columns.indexOf(column) + 1) + ')'));
        var uniqueValues = new Set(cells.map(function (cell) {
            return cell.textContent;
        }));
        return Array.from(uniqueValues);
    }

    // Function to filter the table
    function filterTable() {
        columns.forEach(function (column) {
            var filterValue = document.getElementById(column.toLowerCase() + 'Filter').value.toUpperCase();

            var table = document.getElementById('data-table');
            var rows = table.getElementsByTagName('tr');

            for (var i = 1; i < rows.length; i++) {
                var cell = rows[i].getElementsByTagName('td')[columns.indexOf(column)];
                var display = true;

                if (cell) {
                    var cellText = cell.innerHTML.toUpperCase();

                    if (filterValue && cellText.indexOf(filterValue) === -1) {
                        display = false;
                        break;
                    }
                }

                if (display) {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        });
    }
</script>
