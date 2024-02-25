document.querySelector('.pre-btn').addEventListener('click', scrollLeft);
    document.querySelector('.nxt-btn').addEventListener('click', scrollRight);

    // Function to scroll left
    function scrollLeft() {
      const brandContainer = document.querySelector('.brand-container');
      brandContainer.scrollLeft -= 200;
    }

    // Function to scroll right
    function scrollRight() {
      const brandContainer = document.querySelector('.brand-container');
      brandContainer.scrollLeft += 200;
    }