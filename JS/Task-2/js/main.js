const inputDOM = document.querySelector('#task')
const btnDOM = document.querySelector('#liveToastBtn')
const ulDOM = document.querySelector('#list')
const toastSuccess = document.querySelector('#toastSuccess')
const toastFailed = document.querySelector('#toastFailed')
const toastlistDelete = document.querySelector('#toastListDelete')

function blockSpace() {
    if(event.keyCode == 32) {
        return false
    }
}

btnDOM.addEventListener('click', function () {
    const liDOM = document.createElement('li')
    ulDOM.appendChild(liDOM)

    if (inputDOM.value) {
        liDOM.innerHTML = `${inputDOM.value}`
        inputDOM.value = "";
        $('#toastSuccess').toast('show')
        toastSuccess.classList.add('bg-success')
    } else {
        console.log("Hata");
        inputDOM.value = "";
        $('#toastFailed').toast('show')
        toastFailed.classList.add('bg-danger')
    }

    liDOM.addEventListener('click', function () {
        liDOM.classList.add('checked')

        liDOM.addEventListener('click', function () {
            liDOM.remove()
            $('#toastListDelete').toast('show')
            toastlistDelete.classList.add('bg-primary')
        })
    })
})

// EKSİKLİKLER

// x button yapamadım onun yerine çift tıklayınca siliyor.
// LocalStorage yapamadım.
// list seçince arka plan rengini degistiremedim.