function Spremi()
{
    var naziv = $('#inpt1').val();
    var godina = $('#inpt2').val();
    var ects = $('#inpt3').val();

    var data = '<tr><td>' +naziv+ '</td><td>' +godina+ '</td>' + '<td>' +ects+'</td><td><button id="btn1" type="button">Obriši</button></td><td><input id="btn2" type="checkbox"></td></tr>';
    $("#table").append(data);
    console.log(data);
}

$('#predmeti').on('click', '#btn1', function(){
    $(this).closest('tr').remove();
});

$('#predmeti').on('change', '#btn2', function(){
    if($(this).is(":checked"))
    {
        $(this).closest('tr').css("background-color", "green");
    }
    else
    {
        $(this).closest('tr').css("background-color", "white");
    }
});

$("#search").on("keyup", function() {
    var value = $(this).val();   

    $("table tr").each(function(index) {
        if (index !== 0) {
            $row = $(this);            
            
            var id = $.map($row.find('td'), function(element){
                return $(element).text();
            }).join(' ');
            
            
            if (id.toLowerCase().indexOf(value.toLowerCase()) < 0) {
                $row.hide();
            }
            else {                
                $row.show();
            }
        }
    });
});