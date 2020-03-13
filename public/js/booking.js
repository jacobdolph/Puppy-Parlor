$(document).ready(function () {

    $.ajax({
        url: "/api/rooms",
        method: "GET"
    }).then(function (pageInfo) {
        console.log(pageInfo);
        for (i = 0; i < pageInfo.length; i++) {
            $('#rooms').append($('<div/>', { id: i, 'class': 'card' }))
        };
    });
    if (this.room_empty === true)
        alert("Booking was successful!")

    else {
        alert("Room is full, please pick a different one")
    };

});