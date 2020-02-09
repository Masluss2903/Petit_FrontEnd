const fetchDoggoBreeds = async () => {
    const response = await fetch('https://api.thedogapi.com/v1/breeds');
    const dogBreeds = await response.json();
    populateDoggoSelect(dogBreeds);
  }

  const populateDoggoSelect = (breeds) => {
      const select = document.querySelector('.pet_breed');
      const breedOptions = breeds.map(breed => {
          const option = document.createElement('option'); 
          option.text = breed.name;
          option.value = breed.name;
          return option;
      })

      breedOptions.forEach(breedOption => {
          select.appendChild(breedOption);
      });
  }

  const changeDoggo = () => {
      console.log(event);
  }
  
  fetchDoggoBreeds();