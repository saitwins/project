var count=0;
function movef()
{ 
 var pic=document.getElementsByTagName('img');
var en=document.getElementById('end');
var siz=document.getElementsByTagName('img').length;
if(count!=siz-1)
{
	pic[count].style.display="none";
	count++;
	pic[count].style.display="block";

}
else{
	var last=pic[siz-1];
	last.style.display="none";
	en.style.display="block";

}

 
}
function prevs(){

	var pic=document.getElementsByTagName('img');
	var en=document.getElementById('end');
	 var siz=document.getElementsByTagName('img').length;

if(count==0)
{

  pic[0].style.display="block";
  pic[1].style.display="none";
}

if(count<=siz-1 && count!=0)
{
	en.style.display="none";
	if(count==siz-1){
		en.style.display="none";
	 	pic[siz-1].style.display="block";
	}
	pic[count].style.display="none";
	count--;
	pic[count].style.display="block";
}
}