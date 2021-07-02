
status="Mr.Cảnh"
var a=new Array(),n=""
a[1]='A';
a[2]='n';
a[3]='h';
a[4]=' ';
a[5]='C';
a[6]='ả';
a[7]='n';
a[8]='h';
a[9]=' ';
a[10]='t';
a[11]='ố';
a[12]='t';
a[13]=' ';
a[14]='n';
a[15]='h';
a[16]='ấ';
a[17]='t';
a[18]=' ';
a[19]='t';
a[20]='h';
a[21]='ế';
a[22]=' ';
a[23]='g';
a[24]='i';
a[25]='a';
a[26]='n';
a[27]=' ';
a[28]='♥';
a[29]=' ';
a[30]='Y';
a[31]='ê';
a[32]='u';
a[33]=' ';
a[34]='A';
a[35]='n';
a[36]='h';
a[37]=' ';
a[38]='3';
a[39]='0';
a[40]='0';
a[41]='0';
a[42]=' ';
a[43]='l';
a[44]='ầ';
a[45]='n';
a[46]=' ';
a[47]='♥';
function one()
{
	t=document.f.txt.value
	j=t.length
	if(j>0)
	{
		for(var i=1;i<=j;i++)
		{
			n=n+a[i]
			if(i==48)
			{
				document.f.txt.value= "";
				n="";
				Yeu();
			}
		}
	}
	document.f.txt.value=n
	n=""
	setTimeout("one()",1)
}
function s()
{
}
function on()
{
	one()
}

$(document).ready(function() {
	$('#k').hide();
	$('h1').click(function() {
		$('.active').removeClass('active');
		$('#k').slideUp('fast');
		if($(this).next('#k').is(':hidden') == true) {
			$(this).addClass('active');
			$(this).next('#k').slideDown('fast');
		}
	});
});
function Yeu()
{
	$("#divResult").fadeOut(0);
	$("#divResult").html("</br><h2>Ủ ÔI! AI CŨNG NÓI VẬY ĐÓ</h2>");
	$("#divResult").fadeIn(2000,function()
	{
		$("#divResult2").fadeOut(0);
		$("#divResult2").html("<p>Mặc kệ người ta nói, Anh vẫn chỉ yêu mình Jun hoy!</p></br>");
		$("#divResult2").fadeIn(2000,function()
		{
			$("#divResult3").fadeOut(0);
			$("#divResult3").html("<p>♥ Yêu Jun 3000 lần! ♥</p></br>");
			$("#divResult3").fadeIn(2000);
		}
		);
	}
	);
}
