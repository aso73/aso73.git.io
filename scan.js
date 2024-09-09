function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    function onScanSuccess(decodeText, decodeResult) {
        const newPageUrl = `newPage.html?qrData=${encodeURIComponent(decodeText)}&result=${encodeURIComponent(decodeResult)}`;
        window.open(newPageUrl, '_blank');
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const qrData = urlParams.get('qrData');
    const result = urlParams.get('result');

    // Now you can display the QR data and result
    document.getElementById("qrDataDisplay").innerText = qrData;
    document.getElementById("resultDisplay").innerText = result;
};

