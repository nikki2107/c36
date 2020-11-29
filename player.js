class Player{
    constructor(){

    }

    getCount(){
        var playercountRef = databease.ref('playercount')
        playercountRef.on= ("value",function(data){playercount=data.val()
        })
    }
    updateCount(count){
database.ref('/').update({playercount : count})

    }

    update(name){
       var playerIndex ="player"+playerCount
       database.ref(playerIndex).set({
           name : name
       })
    }
}