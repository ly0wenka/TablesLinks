<script>
    // Create form and inputs dynamically
    var filterContainer = document.getElementById('filterContainer');

    var form = document.createElement('form');
    form.id = 'filterForm';

    var labelName = document.createElement('label');
    labelName.htmlFor = 'nameFilter';
    labelName.textContent = 'Name:';
    form.appendChild(labelName);

    var inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'nameFilter';
    inputName.name = 'nameFilter';
    inputName.placeholder = 'Search for a name';
    form.appendChild(inputName);

    var labelAge = document.createElement('label');
    labelAge.htmlFor = 'ageFilter';
    labelAge.textContent = 'Age:';
    form.appendChild(labelAge);

    var inputAge = document.createElement('input');
    inputAge.type = 'text';
    inputAge.id = 'ageFilter';
    inputAge.name = 'ageFilter';
    inputAge.placeholder = 'Search for an age';
    form.appendChild(inputAge);

    var labelEmail = document.createElement('label');
    labelEmail.htmlFor = 'emailFilter';
    labelEmail.textContent = 'Email:';
    form.appendChild(labelEmail);

    var inputEmail = document.createElement('input');
    inputEmail.type = 'text';
    inputEmail.id = 'emailFilter';
    inputEmail.name = 'emailFilter';
    inputEmail.placeholder = 'Search for an email';
    form.appendChild(inputEmail);

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

    // Function to filter the table
    function filterTable() {
        var nameFilter = document.getElementById('nameFilter').value.toUpperCase();
        var ageFilter = document.getElementById('ageFilter').value.toUpperCase();
        var emailFilter = document.getElementById('emailFilter').value.toUpperCase();

        var table = document.getElementById('data-table');
        var rows = table.getElementsByTagName('tr');

        for (var i = 1; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName('td');
            var display = true;

            for (var j = 0; j < cells.length; j++) {
                var cell = cells[j];

                if (cell) {
                    var cellText = cell.innerHTML.toUpperCase();

                    if ((nameFilter && cellText.indexOf(nameFilter) === -1) ||
                        (ageFilter && cellText.indexOf(ageFilter) === -1) ||
                        (emailFilter && cellText.indexOf(emailFilter) === -1)) {
                        display = false;
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
