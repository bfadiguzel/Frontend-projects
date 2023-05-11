const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const final = document.querySelector('.final')
const replay = document.getElementById('replay')
const nexToLast = nums.length - 1

const resetDOM = () => {

    counter.classList.remove('hide')
    final.classList.remove('show')

    nums.forEach(num => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')

}

const runAnimation = () => {
    nums.forEach((num, index) => {

        num.addEventListener('animationend', (e) => {

            if (e.animationName == 'goIn' && index != nexToLast) {
                num.classList.remove('in')
                num.classList.add('out')

            } else if (e.animationName == 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                final.classList.add('show')
            }

        })


    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})

runAnimation()