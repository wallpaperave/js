$(document).ready(function(){
    $('img.downloadable').each(function(){
        var $this = $(this);
        $this.wrap('<a download />')
    });
});
