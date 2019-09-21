function email()
{
	var name=document.getElementById("name").value;
	var t = name.endsWith("@gmail.com");
	var p = name.endsWith("@outlook.com");
	var h = name.endsWith("@yahoo.com");
	if(t == true|p == true|h == true)
		alert("Valide email id ");
	else
		alert("Invalid email id");
}

function phone()
{
	var no=document.getElementById("nt").value;
	var a= parseInt(no);
	var i=0;
	while(a >> 0)
	{
		a /= 10;
		i = i+1;
	}
	if(i===10)
		alert("Valide phone no. ");
	else
		alert("Invalide phone no. ");
}