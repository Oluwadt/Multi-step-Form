// if (window.innerWidth < 650) {
//     const mobileFooter = document.querySelector('.footer')
//     mobileFooter.innerHTML = `
//     <p>
//     <span id="remaining">0 items left</span>
//     <span class="clear">Clear Completed</span>
//   </p>`;
//     mobileFooter.insertAdjacentHTML('afterend', `<div class="mobile-cat">
//     <span class="footer-btns">
//       <button id="all" class="footer-btn">All</button>
//       <button id="active" class="footer-btn">Active</button>
//       <button id="completed" class="footer-btn">Completed</button>
//     </span>
//   </div>`)
 
// }

const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const phoneRegex = /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{3,4}[-.\s]?\d{4}$/
const stepOneForm = document.getElementById('step-one')

const stepOneDiv = document.getElementById('step-one-div')
const stepTwoDiv = document.getElementById('step-two-div')
const stepThreeDiv = document.getElementById('step-three-div')
const stepFourDiv = document.getElementById('step-four-div')
const stepFive = document.getElementById('step-five')

const monthlyText = document.getElementById('monthly')
const yearlyText = document.getElementById('yearly')
const switchBtn = document.getElementById('checkbox')

const userName = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')

const stepOneButton = document.querySelectorAll('.step-btn')[0]
const stepTwoButton = document.querySelectorAll('.step-btn')[1]
const stepThreeButton = document.querySelectorAll('.step-btn')[2]
const stepFourButton = document.querySelectorAll('.step-btn')[3]


const addOns = document.querySelectorAll('.add-on')
const storageRate = document.getElementById('storage-rate')
const onlineRate = document.getElementById('online-rate')
const customizeRate = document.getElementById('customize-rate')

let selectedPlan = {
    name: '',
    rate: ''
}
let selectedAddOns = []
const planName = document.getElementById('plan-name')
const planRate = document.getElementById('plan-rate')
const addOnSummary = document.getElementById('add-on-summary')

const changePlan = document.getElementById('change-plan')

const totalText = document.getElementById('total-text')
const totalFig = document.getElementById('total-fig')


const submitDiv = document.querySelectorAll('.submit-div')[0]
const nextDiv = document.querySelectorAll('.next-div')[0]
const nextBtn = document.querySelectorAll('.next-btn')[0]
const backBtn = document.querySelectorAll('.back-btn')[0]
const submitBtn = document.getElementById('submit-btn')

const footer = document.querySelectorAll('.footer')[0]

let interval = 'Monthly'

stepOneButton.classList.add('current-step-btn')
monthlyText.style.color = 'hsl(213, 96%, 18%)'

let formElements = document.forms['step-one'].elements
formElements = Array.from(formElements)
formElements = formElements.filter(field => field.className === 'input-field')
formElements.forEach(element => {
    const field = document.getElementById(element.id)
    field.onchange = () => {
        field.classList.remove('error-field')
        if (field.previousElementSibling.className == 'error') {
            field.previousElementSibling.style.display = 'none'
        }
    }
});

const planOptions = document.querySelectorAll('.plan-option')
const arcadeBtn = document.getElementById('arcade-plan')
const advancedBtn = document.getElementById('advanced-plan')
const proBtn = document.getElementById('pro-plan')

arcadeBtn.onclick = () => {
    arcadeBtn.classList.add('current-plan')
    advancedBtn.classList.remove('current-plan')
    proBtn.classList.remove('current-plan')
}

advancedBtn.onclick = () => {
    arcadeBtn.classList.remove('current-plan')
    advancedBtn.classList.add('current-plan')
    proBtn.classList.remove('current-plan')
}

proBtn.onclick = () => {
    arcadeBtn.classList.remove('current-plan')
    advancedBtn.classList.remove('current-plan')
    proBtn.classList.add('current-plan')
}

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

nextBtn.onclick = () => {
    if (window.getComputedStyle(stepOneDiv).getPropertyValue('display') != 'none') {
        let hasErrors = false
    
        if (!userName.value) {
            hasErrors = true
            const message = `<p class='error' id="name-error">This field is required</p>`
            userName.previousElementSibling.outerHTML = message
            userName.classList.add('error-field')
        }

        if (!email.value.match(validRegex)) {
            hasErrors = true
            const message = `<p class='error' id="email-error">This isn't a valid email</p>`
            email.previousElementSibling.outerHTML = message
            email.classList.add('error-field')
        }

        if (!number.value.match(phoneRegex)) {
            hasErrors = true
            const message = `<p class='error' id="phone-error">This isn't a valid phone number</p>`
            number.previousElementSibling.outerHTML = message
            number.classList.add('error-field')
        }
    
        if (!hasErrors) {
            stepOneDiv.style.display = 'none'
            stepTwoDiv.style.display = 'block'
            backBtn.style.visibility = 'visible'
            stepOneButton.classList.remove('current-step-btn')
            stepTwoButton.classList.add('current-step-btn')
        }
    }

    else if (window.getComputedStyle(stepTwoDiv).getPropertyValue('display') != 'none') {
        planOptions.forEach(planOption => {
            if (planOption.classList.contains('current-plan')) {
                stepTwoDiv.style.display = 'none'
                stepThreeDiv.style.display = 'block'
                stepTwoButton.classList.remove('current-step-btn')
                stepThreeButton.classList.add('current-step-btn')
    
                selectedPlan = {
                    name: planOption.children[2].children[0].innerHTML,
                    rate: planOption.children[2].children[1].innerHTML
                }
            } else {
                null
            }
        });
    }

    else if (window.getComputedStyle(stepThreeDiv).getPropertyValue('display') != 'none') {
        stepThreeDiv.style.display = 'none'
        stepFourDiv.style.display = 'block'
        stepThreeButton.classList.remove('current-step-btn')
        stepFourButton.classList.add('current-step-btn')

        planName.innerText = `${selectedPlan.name}(${interval})`
        planRate.innerText = selectedPlan.rate

        selectedAddOns = []
        
        addOns.forEach(addOn => {
            const checkbox = addOn.children[0]

            const name = addOn.children[1].children[0].innerHTML
            const rate = addOn.children[2].innerHTML
            const newAddOn = {
                name,
                rate
            }
            
            if (checkbox.checked == true) {
                selectedAddOns.push(newAddOn)
            }
        })

        selectedAddOns = selectedAddOns.filter((obj, index, self) =>
            index === self.findIndex((el) => el.name === obj.name)
        );

        let tempSelected = ''

        selectedAddOns.forEach(selected => {
            const addOnDiv = `<div class="selected-add-on">
            <p class="add-on-name">${selected.name}</p>
            <p class="summary-add-on-rate">${selected.rate}</p>
            </div>`
            tempSelected += addOnDiv
        });
        addOnSummary.innerHTML = tempSelected

        totalText.innerHTML = `Total(${interval.toLowerCase()})`

        let totalCost = Number(selectedPlan.rate.slice(1, -3))
        selectedAddOns.forEach(addOn => {
            totalCost += Number(addOn.rate.slice(2, -3))
        })
        
        switch (interval) {
            case 'Monthly':
                totalFig.innerHTML = `$${totalCost}/mo`
                break;
            
            case 'Yearly':
                totalFig.innerHTML = `$${totalCost}/yr`
                break;
        
            default:
                break;
        }

        nextDiv.style.display = 'none'
        submitDiv.style.display = 'block'
    }
}

backBtn.onclick = () => {
    if (window.getComputedStyle(stepTwoDiv).getPropertyValue('display') != 'none') {
        stepOneDiv.style.display = 'block'
        stepTwoDiv.style.display = 'none'
        backBtn.style.visibility = 'hidden'
        stepTwoButton.classList.remove('current-step-btn')
        stepOneButton.classList.add('current-step-btn')
    }
    else if (window.getComputedStyle(stepThreeDiv).getPropertyValue('display') != 'none') {
        stepTwoDiv.style.display = 'block'
        stepThreeDiv.style.display = 'none'
        stepThreeButton.classList.remove('current-step-btn')
        stepTwoButton.classList.add('current-step-btn')
    }
    else if (window.getComputedStyle(stepFourDiv).getPropertyValue('display') != 'none') {
        stepFourDiv.style.display = 'none'
        stepThreeDiv.style.display = 'block'
        stepFourButton.classList.remove('current-step-btn')
        stepThreeButton.classList.add('current-step-btn')
        nextDiv.style.display = 'block'
        submitDiv.style.display = 'none'
    }
}

changePlan.onclick = () => {
    stepTwoDiv.style.display = 'block'
    stepFourDiv.style.display = 'none'
    stepFourButton.classList.remove('current-step-btn')
    stepTwoButton.classList.add('current-step-btn')
    nextDiv.style.display = 'block'
    submitDiv.style.display = 'none'
}

submitBtn.onclick = () => {
    stepFive.style.display = 'block'
    stepFourDiv.style.display = 'none'
    footer.style.display = 'none'
}

addOns.forEach(addOn => {
    const checkbox = addOn.children[0]

    addOn.onclick = () => {
        if (checkbox.checked == true) {
            checkbox.checked = false
            addOn.classList.remove('current-plan')
        } else {
            checkbox.checked = true
            addOn.classList.add('current-plan')
        }
    }
});

