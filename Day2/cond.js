let browser = "firefox";
function getVersion() {

    switch(browser){
        case 'Chrome':
            console.log("131");
            break;
        case 'edge':
            console.log("132");
            break;
        case 'firefox':
            console.log("133");
            break;
        default:
        console.log("Unsuported Browser");
        break;      
            
   }
    
}

getVersion()