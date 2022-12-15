const hexToDecimal = hex => parseInt(hex, 16);

function updateCSS(){
    const ui = document.getElementById("events");

    ui.style.listStyle = "none";
    ui.style.color = "white";
    
    var childNodes = ui.childNodes;
    for(var i=0;i<childNodes.length;i++)
    {
        childNodes[i].style.background = "rgba(0, 0, 0, 0.673)";
        childNodes[i].style.width= "90%";
    }
}

function initiateUI(eventsOutput){
    const ui = document.getElementById("events");
    const container = document.getElementsByClassName("event-container");
    var latest = eventsOutput.slice(-10)

    ui.innerHTML=``;
    
    for(var i=0;i<10;i++)
    {
        if(latest != undefined)
        {
            let li = `<li>
                    <div class="event-container">
                        <h4 class="from-addr">From:${latest[i].event.from}</h4>
                        <h4 class="to-addr">To: ${latest[i].event.to}</h4>
                        <h4 class="message">Value:${(hexToDecimal(latest[i].log.data))/Math.pow(10,18)}</h4>   
                        <h4 class="txn">Transaction: ${latest[i].log.transactionHash} </h4>                 
                    </div>
                </li>`
        
        ui.innerHTML = li + ui.innerHTML
        }           
        
    }; 
    
    
    updateCSS()

    
}




function updateUI(eventsOutput){
    console.log("hi")
    const ui = document.getElementById("events");
    
    console.log(eventsOutput);
    if(eventsOutput.length!=0)
    {
        for(var i=0;i<eventsOutput.length;i++)
        {
            ui.removeChild(ui.lastChild);
            if(eventsOutput[i] != undefined)
            {
                let li = `<li>
                        <div class="event-container">
                            <h4 class="from-addr">From:${eventsOutput[i].event.from}</h4>
                            <h4 class="to-addr">To: ${eventsOutput[i].event.to}</h4>
                            <h4 class="message">Value:${(hexToDecimal(eventsOutput[i].log.data))/Math.pow(10,18)}</h4> 
                            <h4 class="txn">Transaction: ${eventsOutput[i].log.transactionHash} </h4>                  
                        </div>
                    </li>`
            
            ui.innerHTML = li + ui.innerHTML
            }
        }        
    }
    updateCSS()

}


// #events > li{
//     list-style-type: none;
//     font-size: 1.5em;
//     color: white;
// }

// .event-container{
//     display: block;
//     width: 90%;
//     background-color: rgba(0, 0, 0, 0.673);
// }

// .event-container > h4{
//     font-size: 0.8em;
//     padding: 5px 10px;
//     margin: 0;
// }