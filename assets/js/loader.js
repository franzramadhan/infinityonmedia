$( document ).ready(function() {
    $.getJSON("data.json", function(data){
	  $.each(data.dzikir, function(i,item){
		var content = "<div data-role='collapsible' data-theme='a'><h2>"+ item.judul +"</h2><p>"+ item.arabic +"</p><p>"+ item.terjemahan+"</p></div>";
		$("#set").append(content).collapsibleset("refresh");
	  });
	});
});