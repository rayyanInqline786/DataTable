$(document).ready(function () {

  // functions for date range filter
  function filter() {
    $.fn.dataTable.ext.search.push(
      function (settings, data, dataIndex) {


        var valid = true;
        var min = moment($("#txtMin").val());
        if (!min.isValid()) { min = null; }

        var max = moment($("#txtMax").val());
        if (!max.isValid()) { max = null; }

        if (min === null && max === null) {
          // no filter applied or no date columns
          valid = true;
        }
        else {

          $.each(settings.aoColumns, function (i, col) {

            if (col.type == "startDate") {
              var cDate = moment(data[i]);
              if (cDate.isValid()) {
                if (max !== null && max.isBefore(cDate)) {
                  valid = false;
                }
                if (min !== null && cDate.isBefore(min)) {
                  valid = false;
                }
              }
              else {
                valid = false;
              }
            }
          });
        }
        return valid;
      });
  }
  function filterEnd() {
    $.fn.dataTable.ext.search.push(
      function (settings, data, dataIndex) {


        var valid = true;
        var min = moment($("#txtMin").val());
        if (!min.isValid()) { min = null; }

        var max = moment($("#txtMax").val());
        if (!max.isValid()) { max = null; }

        if (min === null && max === null) {
          // no filter applied or no date columns
          valid = true;
        }
        else {

          $.each(settings.aoColumns, function (i, col) {

            if (col.type == "endDate") {
              var cDate = moment(data[i]);
              if (cDate.isValid()) {
                if (max !== null && max.isBefore(cDate)) {
                  valid = false;
                }
                if (min !== null && cDate.isBefore(min)) {
                  valid = false;
                }
              }
              else {
                valid = false;
              }
            }
          });
        }
        return valid;
      });
  }
  function filterStart1() {
    $.fn.dataTable.ext.search.push(
      function (settings, data, dataIndex) {


        var valid = true;
        var min = moment($("#txtMin1").val());
        if (!min.isValid()) { min = null; }

        var max = moment($("#txtMax1").val());
        if (!max.isValid()) { max = null; }

        if (min === null && max === null) {
          // no filter applied or no date columns
          valid = true;
        }
        else {

          $.each(settings.aoColumns, function (i, col) {

            if (col.type == "startDate") {
              7
              var cDate = moment(data[i]);

              if (cDate.isValid()) {
                if (max !== null && max.isBefore(cDate)) {
                  valid = false;
                }
                if (min !== null && cDate.isBefore(min)) {
                  valid = false;
                }
              }
              else {
                valid = false;
              }
            }
          });
        }
        return valid;
      });
  }
  function filterEnd1() {
    $.fn.dataTable.ext.search.push(
      function (settings, data, dataIndex) {


        var valid = true;
        var min = moment($("#txtMin1").val());
        if (!min.isValid()) { min = null; }

        var max = moment($("#txtMax1").val());
        if (!max.isValid()) { max = null; }

        if (min === null && max === null) {
          // no filter applied or no date columns
          valid = true;
        }
        else {

          $.each(settings.aoColumns, function (i, col) {

            if (col.type == "endDate") {
              7
              var cDate = moment(data[i]);

              if (cDate.isValid()) {
                if (max !== null && max.isBefore(cDate)) {
                  valid = false;
                }
                if (min !== null && cDate.isBefore(min)) {
                  valid = false;
                }
              }
              else {
                valid = false;
              }
            }
          });
        }
        return valid;
      });
  }

  //Dropdown for selecting columns
  $("#cols").on("change", function () {
    var status = this.value;
    if (status == "Start Date") {
      $(".filter").show()
      $(".filter").addClass("set")
      filter();
    }
    else {
      $(".filter").show()
      $(".filter").addClass("set")
      filterEnd();
    }
  })
  
  // perform daterange filter
  $("#btnGo").click(function () {
    $('#example').DataTable().draw();
  });
  $("#btnGo1").click(function () {
    console.log("working...")
    $('#example1').DataTable().draw();
  });

  // Initialising Datatable
  initialiseTable();
  initialiseTable1();
  var table;
  var table1;
  function initialiseTable() {
    table = $("#example").DataTable({
      "ajax": {
        "url": "data3.json",
      },
      responsive: true,
      "deferRender": true,
      "iDisplayLength": 10,
      "sScrollX": "100%",
      "sScrollXInner": "110%",
      searchDelay: 1000,
      colReorder: true,
      select: {
        style: 'multi'
      },
      dom: 'Bfrtip',
      buttons: [
        // 'colvis',
        {
          extend: 'collection',
          text: 'Export',
          buttons: [
            {
              extend: 'copy',
              exportOptions: {
                columns: [0, 1, 2, 3, 4, 5, 6]
              }
            },
            {
              extend: 'excel',
              exportOptions: {
                columns: [0, 1, 2, 3, 4, 5, 6]
              }
            },
            {
              extend: 'csv',
              exportOptions: {
                columns: [0, 1, 2, 3, 4, 5, 6]
              }
            },
            {
              extend: 'pdf',
              exportOptions: {
                columns: [0, 1, 2, 3, 4, 5, 6]
              }
            },
            {
              extend: 'print',
              exportOptions: {
                columns: [0, 1, 2, 3, 4, 5, 6]
              }
            },
          ]
        },
      ],
      columns: [
        { title: "ID", data: "_id" },
        { title: "Name", data: "name" },
        { title: "age", data: "age" },
        { title: "gender", data: "gender" },
        { title: "company", data: "company" },
        { title: "StartDate", data: "startDate", type: "startDate" },
        { title: "EndDate", data: "endDate", type: "endDate" },
        { title: "email", data: "email" },
        { title: "phone", data: "phone" },
        {
          title: "Action", data: null, render: function (data, type, row) {
            return '<button class="btn btn-danger" style="width:40px"><i class="fa fa-trash" id="delete" style="font-size:18px; color:white" aria-hidden="true"></i></button> <button class="btn btn-info" style="width:40px"><i class="fa fa-strikethrough" id="disable" style="font-size:18px; color:white" aria-hidden="true"></i></button>'
          }
        },
      ]

    });
  }
  // perform search after 3 secs after user stopped typing
  var typingTimer;
  var doneTypingInterval = 3000;
  $('#example_filter input').unbind();
  $('#example_filter input').bind('keyup', function (e) {
    console.log('keyup');
    clearTimeout(typingTimer);
    console.log('run function in 3 seconds');
    typingTimer = setTimeout(doneTyping, doneTypingInterval);         
  });
  $('#example_filter input').bind('keydown', function (e) {
    console.log('keydown');
    table.search($("#example_filter input").val()).draw();
    clearTimeout(typingTimer);
  });
  function doneTyping() {
    console.log('make call')
    table.search($("#example_filter input").val()).draw();
  }
  // Delete Button
  $(document).on("click", "#delete", function () {
    var row;
    if ($(this).closest('table').hasClass("collapsed")) {
      var child = $(this).parents("tr.child");
      row = $(child).prevAll(".parent");
    } else {
      row = $(this).parents('tr');
    }

    table.row(row).remove().draw();
  })

  //Text strike button
  $('table.display tbody').on("click", "#disable", function () {
    $(this).closest('tr').toggleClass("strike")
  })
  function initialiseTable1() {
    table1 = $("#example1").DataTable({
      "ajax": {
        "url": "data3.json",
      },
      "deferRender": true,
      "iDisplayLength": 10,
      "sScrollX": "100%",
      "sScrollXInner": "110%",
      responsive: true,
      colReorder: true,
      select: {
        style: 'multi'
      },
      dom: 'Bfrtip',
      buttons: [
        // 'colvis',
        {
          extend: 'collection',
          text: 'Export',
          buttons: [
            {
              extend: 'copy',
              exportOptions: {
                columns: [0, 1, 2, 3, 4, 5, 6]
              }
            },
            {
              extend: 'excel',
              exportOptions: {
                columns: [0, 1, 2, 3, 4, 5, 6]
              }
            },
            {
              extend: 'csv',
              exportOptions: {
                columns: [0, 1, 2, 3, 4, 5, 6]
              }
            },
            {
              extend: 'pdf',
              exportOptions: {
                columns: [0, 1, 2, 3, 4, 5, 6]
              }
            },
            {
              extend: 'print',
              exportOptions: {
                columns: [0, 1, 2, 3, 4, 5, 6]
              }
            },
          ]
        },
      ],

      columns: [
        { title: "ID", data: "_id" },
        { title: "Name", data: "name" },
        { title: "age", data: "age" },
        { title: "gender", data: "gender" },
        { title: "company", data: "company" },
        { title: "StartDate", data: "startDate", type: "startDate" },
        { title: "EndDate", data: "endDate", type: "endDate" },
        { title: "email", data: "email" },
        { title: "phone", data: "phone" },
        {
          title: "Action", data: null, render: function (data, type, row) {
            return '<button class="btn btn-danger" style="width:40px"><i class="fa fa-trash" id="delete1" style="font-size:18px; color:white" aria-hidden="true"></i></button> <button class="btn btn-info" style="width:40px"><i class="fa fa-strikethrough" id="disable1" style="font-size:18px; color:white" aria-hidden="true"></i></button>'
          }
        },
      ],
    });
  }
  var typingTimer1;
  var doneTypingInterval1 = 3000;
  $('#example1_filter input').unbind();
  $('#example1_filter input').bind('keyup', function (e) {
    console.log('keyup');
    clearTimeout(typingTimer1);
    console.log('run function in 3 seconds');
    typingTimer1 = setTimeout(doneTyping1, doneTypingInterval1);
  });

  $('#example1_filter input').bind('keydown', function (e) {
    console.log('keydown');
    table1.search($("#example1_filter input").val()).draw();
    clearTimeout(typingTimer1);
  });
  function doneTyping1() {
    console.log('make call')
    table1.search($("#example1_filter input").val()).draw();
  }
  $("#cols1").on("change", function () {
    var status = this.value;
    if (status == "Start Date") {
      $(".filter1").show()
      $(".filter1").addClass("set")
      filterStart1();
    }
    else {
      $(".filter1").show()
      $(".filter1").addClass("set")
      filterEnd1();
    }
  })
  $(document).on("click", "#delete1", function () {
    var row;
    if ($(this).closest('table').hasClass("collapsed")) {
      var child = $(this).parents("tr.child");
      row = $(child).prevAll(".parent");
    } else {
      row = $(this).parents('tr');
    }

    table1.row(row).remove().draw();
  })
  $('table.display1 tbody').on("click", "#disable1", function () {
    $(this).closest('tr').toggleClass("strike1")
  })
});