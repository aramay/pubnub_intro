// Publish a simple message to the demo_tutorial channel
PUBNUB_demo.publish({
    channel: 'demo_tutorial',
    message: {"color":"blue"}
 });