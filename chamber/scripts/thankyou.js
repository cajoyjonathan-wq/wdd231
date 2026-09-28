document.addEventListener("DOMContentLoaded", () => {
    
    const params = new URLSearchParams(window.location.search);
    const firstName = params.get('firstname');
    const lastName = params.get('lastname');
    const email = params.get('email');
    const phone = params.get('phonenumber');
    const businessName = params.get('orgname');
    const timeStamp = params.get('timestamp');

    if (document.querySelector('#res-firstname')) {
        document.querySelector('#res-firstname').textContent = firstName || '';
        document.querySelector('#res-lastname').textContent = lastName || '';
        document.querySelector('#res-email').textContent = email || '';
        document.querySelector('#res-phonenumber').textContent = phone || '';
        document.querySelector('#res-businessname').textContent = businessName || '';

        if (timeStamp) {
            document.querySelector('#res-timestamp').textContent = new Date(timeStamp).toLocaleString();
        } else {
            document.querySelector('#res-timestamp').textContent = 'N/A';
        }
        
    }
});