function shortenUrl() {
    const input = document.getElementById('url-input');
    const url = input.value.trim();
    
    if (!url) {
      alert('Please enter a valid URL');
      return;
    }
  
    const endpoint = 'https://api.shrtco.de/v2/shorten?url=' + encodeURIComponent(url);
  
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const result = data.result;
        if (!result) {
          alert('Error shortening URL');
          return;
        }
        const shortUrl = result.short_link;
        alert('Shortened URL: ' + shortUrl);
        input.value = '';
      })
      .catch(error => {
        console.log(error);
        alert('Error shortening URL');
      });
  }
  
  const form = document.getElementById('shorten-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    shortenUrl();
  });
