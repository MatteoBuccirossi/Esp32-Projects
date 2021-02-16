import Wifi from 'wifi';
const config = require('./wifiConfig');
//scanning for wifi signals

Wifi.scan({}, access=>{
    if(!access){
        trace('No access point' + '\n');
        return;
    }
    let name = access.ssid;
    let open = 'none' === access.authentication;
    let signal = access.rssi;
    trace(`name: ${name}, open: ${open}, signal: ${signal} \n`);
});

let wifiHandler = new Wifi(config, function(msg){
    switch(msg){
        case Wifi.gotIP:
            trace('network ready: ', msg);
            break;
        case Wifi.connected:
            trace('connect:', msg);
            break;
        case Wifi.disconnected:
            trace('disconnect:', msg);
            break;
    }
});

