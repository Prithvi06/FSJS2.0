## **Task 1**

The user has to remove the **equalizer** text and add **iNeuron** Image.

### **After Update**
![Output Image](./output_images/DOM%20P3%20SS-1.png)

### **Project Solution**
```
    let headImg = document.querySelector("header img")
    headImg.setAttribute("src", "./assets/ineuron-logo.png")
```

## **Task 2**

The user has to change the Premium price.

### **After Update**
![Output Image](./output_images/DOM%20P3%20SS-2.png)

### **Project Solution**
```
    let appPrice = document.querySelector(".app_price span")
    appPrice.textContent = "$10" 
```