var thing = require("./ubiquitous-things/ubiquitous-things/thing.js")

thing.setAIListenerDone(open)

function open(appInfo){
    console.log("app info received "+JSON.stringify(appInfo))
}
