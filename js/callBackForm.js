$("#sendMail").on("click", function(){
let email = $("#email").val().trim();
let name = $("#name").val().trim();
let phone = $("#phone").val().trim();
let message = $("#message").val().trim();

    if(email == ""){
        $("#errorMess").text("Введие Адрес Электронной почты")
        return false;
    } else if (name == ""){
    $("#errorMess").text("Введите имя")
    return false;
    }else if (phone == ""){
     $("#errorMess").text("Введите номер телефона")
     return false;
    }else if (message == ""){
    $("#errorMess").text("Введите текст сообщения")
     return false;
            }
$("#errorMess").text("");

$.ajax({
    url: 'mail.php',
    type: 'POST',
    chace: false,
    data: { 'name':name, 'email':email, 'phone':phone,  'message':message},
    dataType: 'html',
    beforeSend: function(){
        $("#sendMail").prop("disabled", true);
    },
    success:function(data){
        if(!data)
        alert("ошибка на сервере запрос не отправлен , попробуйте еще раз, либо обратитесь к админимстору сайта.");
        else
        $('#modals').trigger("reset");

        $("#sendMail").prop("disabled", false)
    }
});
        
});