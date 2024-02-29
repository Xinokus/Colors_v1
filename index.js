function Memes(){
document.getElementById("colors").onpointerenter = () => {

    let y = Math.floor(Math.random() * 10 + 1)
    
    console.log(y)

        if(y == 1){
            document.getElementById("online-cinema").innerHTML = "get fucked"
        }
        else if(y == 2){
            document.getElementById("online-cinema").innerHTML = "bruh moment"
        }
        else if(y == 3){
            document.getElementById("online-cinema").innerHTML = "nice ass, boy"
        }
        else if(y == 4){
            document.getElementById("online-cinema").innerHTML = "i am stuck in the piss drawer"
        }
        else if(y == 5){
            document.getElementById("online-cinema").innerHTML = "its better to cum in the sink"
        }
        else if(y == 6){
            document.getElementById("online-cinema").innerHTML = "than sink in the cum"
        }
        else if(y == 7){
            document.getElementById("online-cinema").innerHTML = "what else can i come up with?"
        }
        else if(y == 8){
            document.getElementById("online-cinema").innerHTML = "*clap* *clap*"
        }
        else if(y == 9){
            document.getElementById("online-cinema").innerHTML = "your balls, they are gone"
        }
        else if(y == 10){
            document.getElementById("online-cinema").innerHTML = "online cinema"
        }

    }
}
Memes()