## **Task 1**

The user has to change the backgound color of "accordian" heading

### **After Update**
![Output Image](./output_images/task1Output.png)

### **Project Solution**
```
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.style.background = "#d3deff"
})
```

## **Task 2**

The user has to append a new **"Skills"** **Accordian** below the hobbies accordian.

### **After Update**
![Output Image](./output_images/task2Output.png)

### **Project Solution**
```
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.style.background = "#d3deff"
})

let skill = document.querySelector(".accordian:last-child")
let div = document.createElement("div")
div.setAttribute("class", "accordian")
let h3 = document.createElement("h3")
h3.style.background = "#d3deff"
h3.append("Skills")
let p = document.createElement("p")
p.append("I posses a very good command over the Full stack webdevelopment technologies like Mern which can be seen in my work over the Github")
div.append(h3,p)
p.style.display = "block";
skill.parentNode.insertBefore(div, skill.nextSibling)

```
