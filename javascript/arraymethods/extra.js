user.sort(function getSortedUsersByName(a,b) {
    var nameA=a.name;
 var nameB=b.name;
 if(nameA<nameB){
     return -1;
 }
if(nameA>nameB){
    return 1;
}

})