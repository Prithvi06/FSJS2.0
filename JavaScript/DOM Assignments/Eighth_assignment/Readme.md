## **Task 1**

The User has to make a scrollable sidebar and make a red border around sidebar

### **After Update**
![Output Image](./output_images/ass8.1-after.png)

### **Project Solution**
```
  let aSide = document.querySelector("aside")
  aSide.style.overflowY = "scroll"
  let hrLine = document.createElement('hr')
  hrLine.setAttribute("class", "hr-line")
  let newH2 = document.createElement('h2')
  newH2.setAttribute("class", "new-head")
  newH2.textContent = "This is my custom Heading"
  let newP2 = document.createElement('p')
  newP2.setAttribute("class", "new-p")
  newP2.textContent = "Private funding by VC firms is down 50% YOY. We take a look at what that means."
  aSide.append(hrLine,newH2,newP2)
  let asideParent = aSide.parentNode
  let div = document.createElement("div")
  asideParent.replaceChild(div, aSide)
  div.appendChild(aSide)
  div.setAttribute("class", "col-lg-4")
  aSide.removeAttribute("class")
  aSide.setAttribute("class", "new")
  div.style.border = "4px solid red"
  div.style.padding = "10px 5px"
  div.style.height = "490px"
```

## **Task 2**

The User has to remove the background image.

### **After Update**
![Output Image](./output_images/ass8.2-after.png)

### **Project Solution**
```
let body = document.querySelector("body")
body.style.backgroundImage = "none"
```

## **Task 3**

The User has to open the hamburger menu.

### **After Update**
![Output Image](./output_images/ass8.3-after.png)

### **Project Solution**
```
let hamburger = document.querySelector(".navbar-toggler")
hamburger.removeAttribute("data-toggle")
hamburger.setAttribute("data-bs-toggle", "collapse")
hamburger.setAttribute("data-bs-target", "#navbarSupportedContent")
```