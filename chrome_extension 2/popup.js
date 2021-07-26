// chrome.storage.sync.get(["arrayToSend"], function (result) {
//   console.log(result);
// });

chrome.storage.sync.get(["arrayToSend"], function (result) {
  result.arrayToSend.forEach((el) => {
    const html = `
      <ul class='ce_container'>
        <a class='cover-link' href="${el.link}" target="_blank" rel="noopener noreferrer">
        </a>
          <div class='drop-shadow'></div>
        
          <li class='ce_container--item'> 
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
