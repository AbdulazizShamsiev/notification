const NotificationBtn = document.querySelector('.notify')

const requestPermission = function(){
    if(!("Notification" in window));

    Notification.requestPermission().then((permission)=>{
        const notification = new Notification("Test",{
            body: "This is a test Notification",
            icon: "yt.png",
        });
    });
};

NotificationBtn.addEventListener('click',requestPermission)