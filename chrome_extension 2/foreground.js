if (
  document.querySelector(
    "#hotellist_inner > div.sr_item.sr_item_new.sr_item_default.sr_property_block"
  )
) {
  const nodesOnViewPort = Array.from(
    document.querySelectorAll(
      "#hotellist_inner > div.sr_item.sr_item_new.sr_item_default.sr_property_block"
    )
  );
  const firstFiveNodes = nodesOnViewPort.slice(0, 5);
  console.log(firstFiveNodes);
  const arrayToSend = firstFiveNodes.map((el, i) => {
    return {
      title: el.querySelector(".sr-hotel__name").textContent,
      img: el.querySelector("img").getAttribute("src"),
      price: el.querySelector("div.bui-price-display__value").textContent,
      link: `https://booking.com/${el.querySelector("a").getAttribute("href")}`,
      id: i,
    };
  });

  chrome.storage.sync.set({ arrayToSend });
}
