## **Task 1**

The user has to change the placeholder value of both forms

### **After Update**
![Output Image](./output_images/task1Output.png)

### **Project Solution**
```
let name1 = document.querySelector(".enterName")
name1.setAttribute("placeholder", "FS JS 2.0")
let mail1 = document.querySelector(".enterMail")
mail1.setAttribute("placeholder", "fsjs@ineuron.com")
let msg1 = document.querySelector(".enterMessage")
msg1.setAttribute("placeholder", "Hello World")
let name2 = document.querySelector(".userName")
name2.setAttribute("placeholder", "FS JS 2.0")
let mail2 = document.querySelector(".userEmail")
mail2.setAttribute("placeholder", "fsjs@ineuron.com")
let msg2 = document.querySelector(".userMessage")
msg2.setAttribute("placeholder", "Hello World")
```