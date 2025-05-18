// Form Submission Handling
document.getElementById('complainForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the default way
  
  // Collect form data
  const formData = new FormData(this);
  
  // Send data to your email using Formspree
  fetch('https://formspree.io/f/xjvqjqjq', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        // Show confirmation message
        document.getElementById('confirmation-message').style.display = 'block';
        // Scroll to confirmation message
        document.getElementById('confirmation-message').scrollIntoView({
          behavior: 'smooth'
        });
        // Reset the form
        document.getElementById('complainForm').reset();
      } else {
        alert('शिकायत दर्ज करने में समस्या हुई। कृपया पुनः प्रयास करें।');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('शिकायत दर्ज करने में समस्या हुई। कृपया पुनः प्रयास करें।');
    });
});