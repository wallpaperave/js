<script type="text/javascript">
//<![CDATA[
function DOWNLOAD(){
   $(document).ready(function(){
    $('img.downloadable').each(function(){
        var $this = $(this);
        $this.wrap('<a href="' + $this.attr('src') + '" download />')
    });
}
//]]>
</script>