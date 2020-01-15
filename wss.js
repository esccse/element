import bus from '@/assets/eventBus';

const home1Wss = {};
const wssUrl = "wss://dwqdwqdwqwqdqw";
let ws = null;
let timer = null;
function init() {
    ws = home1Wss.obj = new WebSocket(wssUrl);
    ws.onopen = function() {
        console.log('opopen readyState = ', ws.readyState)
        clearInterval(timer);
        timer = setInterval(() => {
            if (ws.readyState === 1) {
                ws.send('heartbeat');
            } else {
                init();
            }
        }, 20000)
    }
    ws.onmessage = function(e) {
        console.log('onmessage ', e)
        bus.$emit(e)
    }
    ws.onerror = function(e) {
        console.log('onerror ', e);
        // init();
    }
}
init();


export default home1Wss
