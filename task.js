var ans=document.getElementsByClassName('list-group-item');
console.log(ans);

ans[2].style.background='green';

for(var i=0;i<ans.length;i++){
    ans[i].style.fontWeight='bold';
    ans[i].style.color='red';
}