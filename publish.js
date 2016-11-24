// Publish a simple message to the demo_tutorial channel
PUBNUB_demo.publish({
    channel: 'demo_tutorial',
    message: {"color":"blue"}
 });


function pub() {

    for (var i = 0; i < 10; i++) {
        //publish message i times
        PUBNUB_demo.publish({
            channel: 'demo_tutorial',
            message: "message " + i
        });
    }
}


// simple history call with only the two required parameters: the channel (“up103_demo”) and a callback function.
PUBNUB_demo.history({
    channel: 'demo_tutorial',
    callback: function(m){console.log(JSON.stringify(m))}
});

// add some parameters to narrow down the number of messages we receive. Let’s use the count parameter to return 5 messages as opposed to the default 100.

// count param
PUBNUB_demo.history({
    channel: 'up103_demo',
    callback: function(m){console.log(JSON.stringify(m))},
    count: 5
});
