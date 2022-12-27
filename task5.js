const dem=document.getElementsByClassName('list-group-item');
console.log(dem);
for(var i=0;i<dem.length;i++){
    dem[i].style.color='green';
}


const li=document.getElementsByTagName('li');
console.log(li);

for(var i=0;i<li.length;i++)
{
    li[i].style.background='#cfcfcf';
}