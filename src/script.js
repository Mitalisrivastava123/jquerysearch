$(document).ready(function () {
    var products = [{
        "id": "100",
        "name": "iPhone 4S",
        "brand": "Apple",
        "os": "iOS"
    },
    {
        "id": "101",
        "name": "Moto X",
        "brand": "Motorola",
        "os": "Android"
    },
    {
        "id": "102",
        "name": "iPhone 6",
        "brand": "Apple",
        "os": "iOS"
    },
    {
        "id": "103",
        "name": "Samsung Galaxy S",
        "brand": "Samsung",
        "os": "Android"
    },
    {
        "id": "104",
        "name": "Google Nexus",
        "brand": "ASUS",
        "os": "Android"
    },
    {
        "id": "105",
        "name": "Surface",
        "brand": "Microsoft",
        "os": "Windows"
    }];
    // display function arr1 
    function display(arr1) {

        var strnew1 = "<table><tr><th>Id</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";

        for (let y2 of arr1) {
            strnew1 += "<tr><td>" + y2['id'] + "</td><td>" + y2['name'] + "</td><td>" + y2['brand'] + "</td><td>" + y2['os'] + "</td><td><button type='button' class='remove1'>x</td></tr>";

        }
        strnew1 += "</table>";
        $("#table1").html(strnew1);
    }
// onclick function remove1
    $(document).on('click', '.remove1', function () {
        $(this).closest('tr').remove();
    });
    $(document).on('change', function () {
      
        var dropdown1 = $(".dropdown1").val();
        var dropdown2 = $(".dropdown2").val();
        const arr1 = products.filter(v => v.os == dropdown1 && v.brand == dropdown2);
        console.log(arr1);
        display(arr1);
    });

    $("#myInputtext").on("keyup", function() {
        var myInput = $("#myInputtext").val();
       
        const arr1 = products.filter(v => v.name == myInput || v.id == myInput);
        console.log(arr1);
        display(arr1);
        });
       
    });

      

