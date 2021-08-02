function PrintService(message,callback){
    let timeout= Math.floor(Math.random()*1000)
    setTimeout(function(){
        console.log(message)
        console.log("millisecond:",timeout)
        callback();
    },timeout)
} //if data delay what happen to our application

PrintService('first task',function(){
    PrintService('second task',function(){
        console.log("its done!")
    })
})
getUser(function(user){
    getProfile(user,function(profile){
        getFriends(profile,function(friends){
            getProfileofFriends(friends,function(allaccounts){
                console.log(allaccounts)
            })
        })
    })
})
//promise chain in ES6

getUser();
.then getProfile();
.then getFriends();
.then getProfileofFriends();
.then 