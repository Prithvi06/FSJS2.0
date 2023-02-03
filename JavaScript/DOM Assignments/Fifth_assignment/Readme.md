## **Task 1**

The user has to add **Pro subscription** button on navbar and 
change the color of card and also add **6th card** after **Hakka Noodles** card.

### **After Update**
![Output Image](./output_images/DOM%20P2%20SS.png)

### **Project Solution**
```
        let navDiv = document.querySelector(".nav-center div:last-child")
        let subsButton = document.createElement('a')
        subsButton.setAttribute("href", "index.html")
        subsButton.setAttribute("class", "btn")
        subsButton.textContent = "Pro Subscription"
        subsButton.textContent = "Pro Subscription"
        navDiv.append(subsButton)

        let tagContainer = document.querySelector(".tags-container div")
        let chinese = document.createElement("a")
        chinese.setAttribute("href", "#")
        chinese.textContent = "Chinese (7)"
        tagContainer.append(chinese)

        let recipeText = document.querySelectorAll(".recipe-text")
        recipeText.forEach((ele) => {
            ele.style.color = "blueviolet"
        })

        let recipeGallery = document.querySelector(".recipe-gallery")
        let card = document.createElement("div")
        card.setAttribute("class", "card")
        let heading = document.createElement("h5")
        heading.setAttribute("class", "recipe-name")
        heading.textContent = "Add 6th card here"
        card.append(heading) 
        recipeGallery.append(card)
```