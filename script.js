var siteWidth = 600;
var scale = screen.width /siteWidth;


document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

function AncientChina () {
    if (document.getElementById('1').style.display == 'none') {
        document.getElementById('1').style.display = 'block';
    } else {
        document.getElementById('1').style.display = 'none';
    }
}
function ImperialChina () {
    if (document.getElementById('2').style.display == 'none') {
        document.getElementById('2').style.display = 'block';
    } else {
        document.getElementById('2').style.display = 'none';
    }
}
function RepublicofChina () {
    if (document.getElementById('3').style.display == 'none') {
        document.getElementById('3').style.display = 'block';
    } else {
        document.getElementById('3').style.display = 'none';
    }
}
function ModernChina () {
    if (document.getElementById('4').style.display == 'none') {
        document.getElementById('4').style.display = 'block';
    } else {
        document.getElementById('4').style.display = 'none';
    }
}
