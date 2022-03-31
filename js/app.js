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
    $(this).closest('tr').css("background-color", "green");
});