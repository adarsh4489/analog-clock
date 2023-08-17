function showclock()
{
    var hrs=document.getElementsByClassName('hr')[0];
    var min=document.getElementsByClassName('mn')[0];
    var sec=document.getElementsByClassName('ss')[0];

    var date =new Date()

    var hours=date.getHours()
    var minutes=date.getMinutes()
    var seconds=date.getSeconds()

    hrs.style.transform=`rotate(${30*hours+minutes/2}deg)`
    min.style.transform=`rotate(${6*minutes}deg)`
    sec.style.transform=`rotate(${6*seconds}deg)`
}
setInterval(showclock,1000);