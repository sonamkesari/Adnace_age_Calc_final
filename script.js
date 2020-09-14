function age_calc1()
{
	var birthyear= prompt("What year were you born?");
	var t=new Date();
	var current_year= t.getFullYear();
	var res=(current_year-birthyear)*365;
	//window.alert(res);
	var h1= document.createElement('h1');
	var textAnswer=document.createTextNode("You are "+res+" days old.");
	h1.setAttribute('id','hid');
	h1.appendChild(textAnswer);
	document.getElementById('flex-box-result').appendChild(h1);

}
function age_calc2()
{
	var DOB= prompt("Plz enter ur DOB in DD/MM/YYYY");
	var year= DOB.split('/')[2];
	var month=DOB.split('/')[1];
	var day=DOB.split('/')[0];

		var today = new Date();
		var nowyear = today.getFullYear();
		var nowmonth = today.getMonth() + 1;
		console.log(nowmonth);
		var nowday = today.getDate();

	var birthyear = year;
		var birthmonth = month;
		var birthday = day;
	if (birthday > nowday) {
			nowday = nowday + 30;
			nowmonth = nowmonth - 1;
		
		}
    	if (birthmonth > nowmonth) {
				nowmonth = nowmonth + 12;
				nowyear = nowyear - 1;
			}
		var age_year = nowyear - birthyear;
		var age_month = nowmonth - birthmonth;
		var age_day = nowday - birthday;

		var h1= document.createElement('h1');
	var textAnswer=document.createTextNode("You are " + age_year + " years " + age_month + " months " + age_day + " days old.");

	h1.setAttribute('id','hid');
	h1.appendChild(textAnswer);
	document.getElementById('flex-box-result').appendChild(h1);
}

function reset()
{
	document.getElementById('hid').remove();
}