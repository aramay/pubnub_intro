 // PubNub with the UUID of user_111.

 // left browser: init
var pubnub = PUBNUB({
    publish_key: 'pub-c-f68df8c7-58f9-4048-a493-f918c25cae00',
    subscribe_key: 'sub-c-74ae7396-b13e-11e6-8319-02ee2ddab7fe',
    uuid: 'user_111'
});

// left browser: publish to ch1
pubnub.publish({
    channel: 'ch1',
    message: 'Send a message on ch1!',
    success: function(m){console.log(m)},
    error: function(m){console.log(m)}
});

// right browser
// uuid: user_112


// right browser: subscribe to two channels
PUBNUB_demo.subscribe({
    channel: 'ch1,ch2',
    message: function(m,e,c){console.log("Message: " + m + ", channel: " + c)}
});
