## **Task 1**

Remove the languages that have 2.0 in their
            name(Every alternative language)
### **After Update**
![Output Image](./output_images/ass7.1-after.png)

### **Project Solution**
```
    let toRemove = document.querySelectorAll(".main__languages a")
      console.log(toRemove)
      for(let i=1; i<toRemove.length; i+=2){
        toRemove[i].remove()
      }
```

## **Task 2**

Use JavaScript to write something in the input box
and submit the form. This should refresh the page and the languages
in the left card should come back.

### **After Update**
![Output Image](./output_images/ass7.2-after.png)

### **Project Solution**
```
    let formInput = document.querySelector("form input")
    formInput.removeAttribute("disabled")
    formInput.value = "Hello iNeuron"

    let submitButton = document.querySelector(".main__form-btn")
    submitButton.removeAttribute("disabled")
    submitButton.click()
```