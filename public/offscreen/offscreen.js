window.onload = () => {
    const iframe = document.getElementById("my-iframe");
    console.log("sdadadasdas")

    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    console.log(iframeDocument)

};
