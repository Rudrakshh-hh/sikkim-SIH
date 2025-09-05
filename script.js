const faders = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    faders.forEach(fader => {
      observer.observe(fader);
    });

// Open modal
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

// Close modal
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close when clicking outside modal
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

const festivalInfo = {
  "Losar": "Losar (Tibetan New Year) – celebrated in Rumtek, Enchey, and other monasteries in Feb/March with rituals, Cham dances, and feasts.",
  "Bumchu": "Bumchu – held at Tashiding Monastery in Feb. The sacred vase is opened to predict Sikkim’s future.",
  "Saga Dawa": "Saga Dawa – at Rumtek & Pemayangtse in May/June, commemorating Buddha’s birth, enlightenment, and nirvana.",
  "Drupka Teshi": "Drupka Teshi – celebrated at Phodong Monastery in July/August, marking Buddha’s first sermon.",
  "Tendong Lho Rum Faat": "Tendong Lho Rum Faat – celebrated in August, honoring Mount Tendong with rituals and prayers.",
  "Pang Lhabsol": "Pang Lhabsol – celebrated in Sept, honoring Mount Kanchenjunga with vibrant dances.",
  "Cham Dance": "Cham Dance – ritual masked dance in Enchey, Rumtek & Pemayangtse, usually in Dec/Jan.",
  "Kagyed Dance": "Kagyed Dance – held in Dec at Enchey & Rumtek monasteries to drive away evil spirits."
};

document.querySelectorAll('.festival-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.festival-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const festival = item.getAttribute('data-festival');
    const detailsBox = document.getElementById('festival-details');
    detailsBox.innerText = festivalInfo[festival] || "Details coming soon!";
    detailsBox.style.display = 'block';
  });
});
function expandMonastery(card) {
  // Close all other open cards
  document.querySelectorAll(".monastery-card").forEach(c => {
    if (c !== card) {
      c.classList.remove("expanded");
    }
  });

  // Toggle clicked card
  card.classList.toggle("expanded");
}
