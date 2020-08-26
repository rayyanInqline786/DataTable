$(document).ready(function() {
    $('#example').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": "scripts/server_processing.php",
        columns: [
            { title: "Name" },
            { title: "Naksdj" },
            { title: "Status" },
            { title: "Balance" },
            { title: "Age"},
            { title: "Eye Color"},
        ]
    } );
} );