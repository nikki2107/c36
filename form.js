class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2')
        title.html("Car Racing")
        title.position(130,0)

        var input=createInput("name")
        var button=createButton('play')

        input.position(130,160)
        button.position(250,200)

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name =input.value()
            var greeting=createElement('h4')
            playercount+=1
            player.update(name)
            player.updateCount(playercount)
            greeting.html("Hi"+name)
            greeting.position(130,160)
        }) 
        
    }
}