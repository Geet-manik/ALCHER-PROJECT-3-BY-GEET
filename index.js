console.log("hello");
const qoqoq = () => {

    const geet = document.getElementById('qoqo');
    const success = (position) => {
        
                const latitude =position.coords.latitude;
                const longitude =position.coords.longitude;
      
                const api= `https://us1.locationiq.com/v1/reverse?key=pk.3610a861203f0bd27edd5b76abebc93a&lat=${latitude}&lon=${longitude}&format=json`
              
                fetch(api)
                .then(res => res.json())
                .then(data => {
                    
                geet.innerText=data.display_name;
                })
    }
    const error = () => {
        geet.textContent = 'Give Location Permissions';
    }
    navigator.geolocation.getCurrentPosition(success, error);
}

document.getElementById('qq').addEventListener('click', qoqoq);