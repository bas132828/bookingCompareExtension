
 if(document.querySelectorAll(
    "#hotellist_inner > div.sr_item.sr_item_new.sr_item_default.sr_property_block"
  ).length
) {
    const nodesOnViewPort = Array.from(
      document.querySelectorAll(
        "#hotellist_inner > div.sr_item.sr_item_new.sr_item_default.sr_property_block"
      )
    );
      nodesOnViewPort.forEach((el, i)=> {
      const html = `
        <button class='compare-btn btn-${i}}' >Add to compare</button>
        `
      el.insertAdjacentHTML("afterbegin", html)
    })
    const hotelsPicked = []
    document.querySelectorAll('.compare-btn').forEach(el=>{
      el.addEventListener('click', function () {
        hotelsPicked.push(this.closest('.sr_item'))
        chrome.storage.sync.set({hotelsPicked});
        console.log(hotelsPicked)
        // console.log(chrome.storage.sync.get("hotel"))
     })
    })
      
  // const arrayToSend = firstFiveNodes.map((el, i) => {
  //   return {
  //     title: el.querySelector(".sr-hotel__name").textContent,
  //     img: el.querySelector("img").getAttribute("src"),
  //     price: el.querySelector("div.bui-price-display__value").textContent,
  //     link: `https://booking.com/${el.querySelector("a").getAttribute("href")}`,
  //     id: i,
  //   };
  // });

  // chrome.storage.sync.set({ arrayToSend });
}
