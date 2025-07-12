document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const avatar = document.getElementById('avatar');
  const genders = document.querySelector('#genders span');
  const names = document.querySelector('#names span');
  const locations = document.querySelector('#locations span');
  const emails = document.querySelector('#emails span');
  const phones = document.querySelector('#phones span');
  const ages = document.querySelector('#ages span');

  // Create loading element
  const loading = document.createElement('div');
  loading.className = 'loading';
  loading.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(loading);

  // Function to fetch random user
  const fetchRandomUser = async () => {
    try {
      // Show loading
      loading.classList.add('active');

      const response = await fetch('https://randomuser.me/api/');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const user = data.results[0];

      // Update UI
      avatar.src = user.picture.large;
      avatar.alt = `${user.name.first}'s profile picture`;
      genders.textContent = user.gender;
      names.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
      locations.textContent = `${user.location.city}, ${user.location.country}`;
      emails.textContent = user.email;
      phones.textContent = user.phone;
      ages.textContent = user.dob.age;

      // Hide loading
      loading.classList.remove('active');

    } catch (error) {
      console.error('Error fetching user data:', error);
      loading.classList.remove('active');
      alert('Failed to fetch user data. Please try again.');
    }
  };

  // Initial fetch
  fetchRandomUser();

  // Button click event
  btn.addEventListener('click', fetchRandomUser);

  // Add animation to button on hover
  btn.addEventListener('mouseenter', () => {
    btn.querySelector('.moveObj').style.width = '100%';
  });

  btn.addEventListener('mouseleave', () => {
    btn.querySelector('.moveObj').style.width = '0%';
  });
});