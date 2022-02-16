$("input[autocomplete='off']").each(function () {

    var input = $(this);
    var id = $(this).attr("id");
    var name = $(this).attr("name");

    input.removeAttr("name").removeAttr("id");

    setTimeout(function () {
        input.attr("name", name).attr("id", id);
    }, 6);

});
