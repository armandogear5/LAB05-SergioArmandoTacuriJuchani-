window.onload = function() {
    var root = document.getElementById("root");
  
    var h2 = document.createElement("h2");
    h2.textContent = "Manipulando en DOM";
    root.appendChild(h2);
  
    var a = document.createElement("a");
    a.href = "https://keybr.com";
    a.textContent = "Google";
    root.appendChild(a);
    var buyList = [
        "books",
        "bread",
        "eraser",
        "earphones",
        "collection-cards",
        "hdmi",
        "vga",
        "motherboard",
        "university-books",
      ];
    var ul = document.createElement("ul");
    buyList.forEach(function(item) {
      var li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    root.appendChild(ul);
  }
  