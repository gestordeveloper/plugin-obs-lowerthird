var bc = new BroadcastChannel('obs-lower-thirds-channel');

bc.onmessage = function (ev) {
    received_data=ev.data.split("|");

    document.getElementById("name").innerHTML = received_data[0];
    document.getElementById("function").innerHTML = received_data[1];

    animation = received_data[2];

    if (animation == 'animateIn') {
        document.getElementById("function").classList.add("show");
        document.getElementById("name").classList.add("show");

        window.setTimeout(function(){
            document.getElementById("function").classList.remove("show");
            document.getElementById("name").classList.remove("show");
        }, 10000);
    };

    if (animation == 'animateOut') {
        document.getElementById("function").classList.remove("show");
        document.getElementById("name").classList.remove("show");
    };

}

