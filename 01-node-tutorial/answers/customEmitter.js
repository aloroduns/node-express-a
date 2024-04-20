const EventEmitter = require("events");

//Create a custom emitter
const customEmitter = new EventEmitter();

//Event handler for "newOrder" event
customEmitter .on("newOrder", (orderId, customerName) => {
    console.log(`New order received: Order ID ${orderId} from customer ${customerName}`);
    //simulate order processing by emitting a "processingStarted" event

    setTimeout(() => {
        customEmitter.emit("processingStarted", orderId);
    }, 1000);
});

//Event handler for "processing started event triggered by the newOrder"
customEmitter .on("processingStarted", (orderId) => {
    console.log(`Order processing started for order ID ${orderId}`);
});

//simulate order creation every 3 seconds using a timer
setInterval(() => {
    const orderId = Math.floor(Math.random() * 10000);
    const customerName = ["John doe", "Jane Smith", "Alice Walker"][Math.floor(Math.random() *3)];
    customEmitter .emit("newOrder", orderId, customerName);
}, 3000);

//Asynchronous waiting

function waitForProcessing (orderId) {
    return new Promise((resolve) => {
        customEmitter .on("processingStarted", (receivedOrderId) => {
            if (receivedOrderId === orderId)  {
                resolve(`Order processing completed for order ID ${orderId}`);
            }
        });
    });
}

(async () => {
    const orderId = 1234;
    const message = await waitForProcessing(orderId);
    console.log(message);
}) ();

console.log("Custom emitter is listening for events");