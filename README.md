# Multi-step form

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshots

![](./screenshots/Screenshot%201.png)
![](./screenshots/Screenshot%202.png)
![](./screenshots/Screenshot%203.png)
![](./screenshots/Screenshot%204.png)
![](./screenshots/Screenshot%205.png)
![](./screenshots/Screenshot%206.png)
![](./screenshots/Screenshot%207.png)

### Links

- My Solution: [Multi-step Form](https://multi-step-form-henna.vercel.app/)

## My process

### Built with

- HTML
- CSS
- Javascript
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- How to make a cool switch with CSS
- Changing the DOM with a switch

```css
.switch {
    position: relative;
    display: inline-block;
    width: 2.5rem;
    height: 1.3rem;
    margin: 0 5%;
}  

.switch input {
    display: none;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsl(213, 96%, 18%);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: .7rem;
    width: .7rem;
    left: .3rem;
    bottom: 25%;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: hsl(213, 96%, 18%);
}

input:focus + .slider {
    box-shadow: 0 0 1px hsl(213, 96%, 18%);
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(1.2rem);
}
```
```js
switchBtn.onclick = () => {
    const planRates = document.querySelectorAll('.plan-rate')
    const arcadeRate = document.getElementById('arcade-rate')
    const advancedRate = document.getElementById('advanced-rate')
    const proRate = document.getElementById('pro-rate')
    if (switchBtn.checked) {
        monthlyText.style.color = 'hsl(231, 11%, 63%)'
        yearlyText.style.color = 'hsl(213, 96%, 18%)'
        arcadeRate.innerText = '$90/yr'
        advancedRate.innerText = '$120/yr'
        proRate.innerText = '$150/yr'
        const twoMonths = `<p class="two-months">2 months free</p>`
        planRates.forEach(element => {
            element.parentNode.innerHTML += twoMonths
        });

        onlineRate.innerText = '+$10/yr'
        storageRate.innerText = '+$20/yr'
        customizeRate.innerText = '+$20/yr'

        interval = 'Yearly'

    }
    else {
        yearlyText.style.color = 'hsl(231, 11%, 63%)'
        monthlyText.style.color = 'hsl(213, 96%, 18%)'
        arcadeRate.innerText = '$9/mo'
        advancedRate.innerText = '$12/mo'
        proRate.innerText = '$15/mo'
        planRates.forEach(element => {
            if (element.nextElementSibling.className == 'two-months') {
                element.nextElementSibling.remove()
            }
        });
        arcadeRate.innerText = '$9/mo'
        advancedRate.innerText = '$12/mo'
        proRate.innerText = '$15/mo'

        
        onlineRate.innerText = '+$1/mo'
        storageRate.innerText = '+$2/mo'
        customizeRate.innerText = '+$2/mo'

        interval = 'Monthly'
    }    
}
```


### Continued development

- CSS Positions
- Responsive design

### Useful resources

- [Conquering Responsive Layouts](https://courses.kevinpowell.co/view/courses/conquering-responsive-layouts) - This is the course that helped me with making the site responsive.

## Author

- GitHub - [@Oluwadt](https://github.com/Oluwadt)
- Twitter - [@oluwadt](https://www.twitter.com/oluwadt)

## Acknowledgments

- [Chat GPT](https://chat.openai.com/)
- [Kevin Powell](https://www.youtube.com/@KevinPowell)
