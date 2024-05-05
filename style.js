const locationInput = document.getElementById('cartoon-search');
const genreResult = document.getElementById('genre-result');

function findLocation() {
  const location = locationInput.value.trim();
  if (!location) {
    locationResult.textContent = 'Please enter location.';
    return;
  }
  

  
  const locationMe = {
    'Ngong':  ['rotary club kenya',       'moi girls nairobi = near toi market',        'lenana school = 50 metres from lenana stage',],
    

    'Syokimau': ['gateway mall', 'inua mama foundation',],
    'Imara': ['icc church', 'imara mall', 'mukuru kwa njenga primary'],
    'Thika road': ['military barracks'],
    'Kabete' : ['mary leaky girls high school']

    
  };

  const genre = locationMe[location];
  if (genre) {
    
    genreResult.textContent = ` ${genre} .`;
  }else {
    genreResult.textContent = `invalid location for ${location}.`;
  }
}
