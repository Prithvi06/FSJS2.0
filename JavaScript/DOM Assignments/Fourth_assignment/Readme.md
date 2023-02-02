## **Task 1**

The user has to change the background color of clash cards

### **After Update**
![Output Image](./output_images/DOM%20P1%20SS.png)

### **Project Solution**
```
let goblin = document.querySelector(".clash-card__unit-stats--goblin")
goblin.style.background = "#4facff"
goblin.style.color = "white"
goblin.lastElementChild.style.color = "white"


let giant = document.querySelector(".clash-card__unit-stats--giant")
giant.style.background = "#f6901a"
giant.style.color = "white"
giant.lastElementChild.style.color = "white"

let archer = document.querySelector(".clash-card__unit-stats--archer")
archer.style.background = "#ee5487"
archer.style.color = "white"
archer.lastElementChild.style.color = "white"

let barbarian = document.querySelector(".clash-card__unit-stats--barbarian")
barbarian.style.background = "#ec9b3b"
barbarian.style.color = "white"
barbarian.lastElementChild.style.color = "white"

let wizard = document.querySelector(".clash-card__unit-stats--wizard")
wizard.style.background = "#ec9b3b"
wizard.style.color = "white"
wizard.lastElementChild.style.color = "white"
```