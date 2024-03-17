
$(document).ready(function(){
    $('button').click(function(){
        let catContainer = $('.cat-container')
        let lastcat = $('.cat-box:last').attr('cat-num');
        let newcat = +lastcat + 1;
        let inputField = '<div class="cat-box" cat-num="' + newcat + '"> \
                        <input type="text" name="category" class="form-cat" > \
                        <div class="closebtn" remove-num = "' + newcat + '"><i class="bi bi-x-square-fill"></i></div> \
                        </div>';
        $('.cat-container form').append(inputField)
    });
    $('.cat-container').on('click', '.closebtn', function() {
       $(this).parent('.cat-box').remove();

    });
});