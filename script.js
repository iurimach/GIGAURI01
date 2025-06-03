const smallDivWrapper = document.querySelector('.small_div_wrapper');
  const seeMoreBtn = document.querySelector('.seeMoreBtn');
  const fullDescription = document.querySelector('.full_description');
  const buttonsWrapper = document.querySelector('.buttons_wrapper');




  // small thumbnails images
  const thumbnails = document.querySelectorAll('.small_thumbnails img');
document.addEventListener('DOMContentLoaded', () => {
  const seeMoreButtons = document.querySelectorAll('.seeMoreBtn');

  seeMoreButtons.forEach((seeMoreBtn) => {
    seeMoreBtn.addEventListener('click', () => {
      const wrapper = seeMoreBtn.closest('.small_div_wrapper');
      const fullDescription = wrapper.querySelector('.full_description');
      const buttonsWrapper = wrapper.querySelector('.buttons_wrapper');
      const smallThumbnails = wrapper.querySelector('.small_thumbnails');
      const iconWrapper = wrapper.querySelector('.icon_wrapper'); // შეცვლილია!

      const isExpanded = wrapper.classList.toggle('expanded');

      if (isExpanded) {
        fullDescription.style.display = 'block';
        buttonsWrapper.style.display = 'flex';
        smallThumbnails.style.display = 'flex';
        iconWrapper.style.display = 'flex'; // კონკრეტული დივის icon_wrapper
        seeMoreBtn.textContent = 'See Less';
      } else {
        fullDescription.style.display = 'none';
        buttonsWrapper.style.display = 'none';
        smallThumbnails.style.display = 'none';
        iconWrapper.style.display = 'none';
        seeMoreBtn.textContent = 'See More';
      }
    });
  });
   const allThumbnails = document.querySelectorAll('.small_thumbnails img');

  allThumbnails.forEach((thumb) => {
    thumb.addEventListener('click', (e) => {
      const wrapper = e.target.closest('.small_div_wrapper');
      const mainImg = wrapper.querySelector('.main_big_img img');
      mainImg.src = e.target.src;
    });
  });
});

  const whatsappBtn = document.querySelector('.whatsappBtn');
whatsappBtn.addEventListener('click', () => {
  const phoneNumber = '+995568800554';
  const url = `https://wa.me/${phoneNumber.replace(/\D/g,'')}`; // ფორმატირებული ნომერი მხოლოდ ციფრებით
  window.open(url, '_blank');
});

  // Change main image on thumbnail click
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainBigImg.src = thumb.src;
      mainBigImg.alt = thumb.alt;
    });
  });

  // Modal enlarge logic
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  mainBigImg.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = mainBigImg.src;
    modalImg.alt = mainBigImg.alt;
  });

  modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal on click outside image
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close modal on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });