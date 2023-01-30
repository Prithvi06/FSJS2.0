## **Task 1**

The user has to append new element **Projects** and **Hire Me** after about and remove social icons from footer.

### **After Update**
![Output Image](./output_images/project1.png)

### **Project Solution**
```
let element1 = document.querySelector("header nav ul li:last-child")
element1.innerHTML = "<a>Projects</a>"

let element2  = document.createElement("li")
element2.innerHTML = "<a>Hire Me</a>"

let element3 = document.querySelector("header nav ul")
element3.appendChild(element2)

let footer = document.querySelector("footer ul")
footer.remove()
```

## **Task 2**

The user has to append new element **Projects** after about and add "search my project" placeholder inside search.

### **After Update**
![Output Image](./output_images/project2.png)

### **Project Solution**
```
let element1 = document.querySelector("header nav ul li:last-child")
element1.innerHTML = "<a>Projects</a>"

let element2 = document.querySelector(".search-field input")
element2.placeholder = "Search My Project"

let footer = document.querySelector("footer ul")
footer.innerHTML = ""
```
