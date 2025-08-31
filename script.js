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
