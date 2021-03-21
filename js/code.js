function display_slider_text_start(index)
{
	name="";
	name="slider_li_div_0"+index.toString();
	document.getElementById(name).style.display = "block";
}
function display_slider_text_stop(index)
{
	name="";
	name="slider_li_div_0"+index.toString();
	document.getElementById(name).style.display = "none";
}