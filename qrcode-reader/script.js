const qrInput = document.getElementsByTagName("input");
const qrButton = document.getElementsById("btn");
const qrImg = document.getElementsByTagName("img");

qrButton.addEventListner("click", () => {
    const getInput = qrInput.value;

    if ( getInput === ""){                 //another way todo same is -->  if( !getInput ){} ,i.e no input is given.
        alert("Enter a valid URL.");
        return;
    }else{
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${getInput.value}`;
        qrImg.alt = `QR Code for ${getInput}`;
    }

})

