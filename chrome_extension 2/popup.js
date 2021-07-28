chrome.storage.sync.get(["hotels"], function (result) {
  if (!result.hotels.length) return;

  result.hotels.forEach((el) => {
    const html = `
      <ul class='ce_container container-${el.id}' data-id="${el.id}">
        <a class='cover-link' href="${el.link}" target="_blank" rel="noopener noreferrer">
        </a>
          <div class='drop-shadow'></div>
          <li class='ce_container--item'> 
            <button class='delete-btn'>&times;</button>
            <img class='popup_container--hotel-image' src='${el.img}' alt='hotel-img'>
              <h3 class='ce_container--item__title'>${el.title}</h3>
            <span class='popup_container--price'>${el.price}</span>
          </li>
      </ul>
      `;
    document
      .querySelector(".popup_container")
      .insertAdjacentHTML("afterbegin", html);
  });
});

setTimeout(() => {
  const closeButtons = document.querySelectorAll(".delete-btn");
  console.log(closeButtons);
  closeButtons.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();

      const idForDelete = this.closest(".ce_container").dataset.id;

      chrome.storage.sync.get(["hotels"], function (result) {
        const newHotels = result.hotels.filter((el) => {
          return el.id !== idForDelete;
        });
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            chrome.tabs.sendMessage(
              tabs[0].id,
              { hotels: newHotels },
              function (response) {
                console.log(response.farewell);
              }
            );
          }
        );
      });
      el.closest(".ce_container").remove();
    });
  });
}, 0);
