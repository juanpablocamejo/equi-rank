initApp = () => {     
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js').then(function(registration){
                console.log('Service worker successfully registered on scope', registration.scope);
            }).catch(function (error) {
                console.log('Service worker failed to register');
            });
        });        
    }    

    window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "\o/";
      
        (e || window.event).returnValue = confirmationMessage;     //Gecko + IE
        return confirmationMessage;                                //Webkit, Safari, Chrome etc.
      });
}

initApp();