var siteWidth = 400;
var scale = screen.width /siteWidth;


document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

function AncientChina () {
	document.getElementById('2').style.display = 'none';
	document.getElementById('3').style.display = 'none';
	document.getElementById('4').style.display = 'none';
    if (document.getElementById('1').style.display == 'none') {
        document.getElementById('1').style.display = 'block';
    } else {
        document.getElementById('1').style.display = 'none';
    }
}
function ImperialChina () {
	document.getElementById('1').style.display = 'none';
	document.getElementById('3').style.display = 'none';
	document.getElementById('4').style.display = 'none';
    if (document.getElementById('2').style.display == 'none') {
        document.getElementById('2').style.display = 'block';
    } else {
        document.getElementById('2').style.display = 'none';
    }
}
function RepublicofChina () {
	document.getElementById('1').style.display = 'none';
	document.getElementById('2').style.display = 'none';
	document.getElementById('4').style.display = 'none';
    if (document.getElementById('3').style.display == 'none') {
        document.getElementById('3').style.display = 'block';
    } else {
        document.getElementById('3').style.display = 'none';
    }
}
function ModernChina () {
	document.getElementById('1').style.display = 'none';
	document.getElementById('2').style.display = 'none';
	document.getElementById('3').style.display = 'none';
    if (document.getElementById('4').style.display == 'none') {
        document.getElementById('4').style.display = 'block';
    } else {
        document.getElementById('4').style.display = 'none';
    }
}