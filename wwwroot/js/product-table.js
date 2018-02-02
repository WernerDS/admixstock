$(document).ready(function () {
	
	if($('#data-table')[0]) {

        // Add custom buttons
        var dataTableButtons =  '<div class="btn-group actions">' + 
								  '<button type="button" class="btn btn-light" data-table-action="print"><i class="fas fa-print"></i></button>' +
								  '<button type="button" class="btn btn-light" data-table-action="fullscreen"><i class="fas fa-expand"></i></button>' +
								  '<div class="btn-group" role="group">' +
								    '<button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-download"></i></button>' +
								    '<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">' +
								      '<a class="dropdown-item" href="#" data-table-action="excel">Excel (.xlsx)</a>' +
								      '<a class="dropdown-item" href="#" data-table-action="csv">CSV (.csv)</a>' +
								    '</div>' +
								  '</div>' +
								'</div>';

        // Initiate data-table
        $('#data-table').DataTable({
            autoWidth: false,
            responsive: true,
            lengthMenu: [[15, 30, 45, -1], ['15 Rows', '30 Rows', '45 Rows', 'Everything']], //Length select
            language: {
                searchPlaceholder: "Search for records..." // Search placeholder
            },
            dom: 'Blfrtip',
            buttons: [ // Data table buttons for export and print
                {
                    extend: 'excelHtml5',
                    title: 'Export Data'
                },
                {
                    extend: 'csvHtml5',
                    title: 'Export Data'
                },
                {
                    extend: 'print',
                    title: 'Dealer List'
                }
            ],
            "initComplete": function(settings, json) {
                $(this).closest('.dataTables_wrapper').prepend(dataTableButtons); // Add custom button (fullscreen, print and export)
            }
        });

        // Data table button actions
        $('body').on('click', '[data-table-action]', function (e) {
            e.preventDefault();

            var exportFormat = $(this).data('table-action');

            if(exportFormat === 'excel') {
                $(this).closest('.dataTables_wrapper').find('.buttons-excel').trigger('click');
            }
            if(exportFormat === 'csv') {
                $(this).closest('.dataTables_wrapper').find('.buttons-csv').trigger('click');
            }
            if(exportFormat === 'print') {
                $(this).closest('.dataTables_wrapper').find('.buttons-print').trigger('click');
            }
            if(exportFormat === 'fullscreen') {
                var parentCard = $(this).closest('.card');

                if(parentCard.hasClass('card--fullscreen')) {
                    parentCard.removeClass('card--fullscreen');
                    $('body').removeClass('data-table-toggled');
                }
                else {
                    parentCard.addClass('card--fullscreen')
                    $('body').addClass('data-table-toggled');
                }
            }
        });
    }
    
});