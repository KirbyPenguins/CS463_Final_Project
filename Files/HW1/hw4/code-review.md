## Code Review Exercise

Write your code review here in markdown format. 

### Issue #1 Form Issue

It seems that the buttons are not correctly placed in the form. What this means that if 
you needed to update the form (i.e move it around or anything) You would have to move it 
separately. Therefore it is easier just to place it inside of the form. 

<image src = "../Form_issue.png" height = 200 alt= "form issue where the button is not placed properly">

```html
      </form>
      <div
        class="form space-evenly-distributed-row-container form-buttons-container">
        <input class="form-button" type="submit" value="submit" />
        <input class="form-button" type="reset" value="reset" />
      </div>
    </div>
```

corrected code
```html
      <div
        class="form space-evenly-distributed-row-container form-buttons-container">
        <input class="form-button" type="submit" value="submit" />
        <input class="form-button" type="reset" value="reset" />
      </div>
    </div>
    </form>
```

## Issue #2 Button Issue

It seems that when I wave this website the button it stated that 
the button is empty and has no value to the text. What you can 
do is below is the code.

<image src = "../ButtonIssue.png" height = 200 alt= "where the button should be updated">

```html
    <button class="close-popup-button">
        <i class="fa-solid fa-xmark"></i>
    </button>
```

corrected code:
```html
    <button class="close-popup-button" aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
    </button>
```

# Issue #3 Javascript Issue

It seems that the Javascript needs to be edited.
rather than handling an event event delegation to add
a single event listener to a parent element. Make sure that 
your buttons have the appropriate aria attributes for accessibility

<image src = "../JavaScript_Issue.png" height = 200 alt = "The java script event listener needs
to be worked on">

```javascript
const moreInfoButtons = document.querySelectorAll(".more-info-button");

for (const moreInfoButton of moreInfoButtons) {
  moreInfoButton.addEventListener("click", (event) => {
    const popupSection = event.currentTarget.parentElement.nextElementSibling;
    popupSection.style.display = "block";
  });
}

const closePopupButtons = document.querySelectorAll(".close-popup-button");

for (const closePopupButton of closePopupButtons) {
  closePopupButton.addEventListener("click", (event) => {
    console.log(event.target);
    const popupSection = event.currentTarget.parentElement.parentElement.parentElement;
    popupSection.style.display = "none";
  });
}
```

corrected code:
```javascript

document.addEventListener("click", (event) => {
  if (event.target.matches(".more-info-button")) {
    const popupSection = event.target.closest(".card").nextElementSibling;
    popupSection.style.display = "block";
  }

  if (event.target.matches(".close-popup-button")) {
    const popupSection = event.target.closest(".popup-section-container");
    popupSection.style.display = "none";
  }
});

```