function Memes(){
document.getElementById("colors").onpointerenter = () => {

    let y = Math.floor(Math.random() * 10 + 1)
    let x = document.getElementById("online-cinema")
    
    console.log(y)

        if(y == 1){
            x.innerHTML = "get fucked"
        }
        else if(y == 2){
            x.innerHTML = "bruh moment"
        }
        else if(y == 3){
            x.innerHTML = "nice ass, boy"
        }
        else if(y == 4){
            x.innerHTML = "i am stuck in the piss drawer"
        }
        else if(y == 5){
            x.innerHTML = "its better to cum in the sink"
        }
        else if(y == 6){
            x.innerHTML = "than sink in the cum"
        }
        else if(y == 7){
            x.innerHTML = "what else can i come up with?"
        }
        else if(y == 8){
           x.innerHTML = "*clap* *clap*"
        }
        else if(y == 9){
            x.innerHTML = "your balls, they are gone"
        }
        else if(y == 10){
            x.innerHTML = "online cinema"
        }

    }
}
Memes()