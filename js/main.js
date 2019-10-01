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
}

initApp();