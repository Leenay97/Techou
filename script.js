let search = document.querySelector('.search');

let filter = function () {
    console.log('sda');
    let words = document.querySelectorAll('.lesson__transcription');
    words.forEach((item) => {
        if (!item.innerHTML[0] == search.value[0]) item.parentElement.classList.add('hidden');
    })
}

search.addEventListener('input', () => {
    console.log('sda');
    let words = document.querySelectorAll('.lesson__transcription');
    
    words.forEach((item) => {

        console.log(item.nextElementSibling)
        if (item.innerHTML.indexOf(search.value) > -1 || item.nextElementSibling.innerHTML.toLowerCase().indexOf(search.value) > -1　|| item.previousElementSibling.innerHTML.indexOf(search.value) > -1) {
            item.parentNode.classList.remove('hidden');
        } else {
            item.parentNode.classList.add('hidden');
        }
        if (search.value == '') {
            item.parentNode.classList.remove('hidden');
        }

    })

    // words.forEach((item) => {

    //     if (item.innerHTML[0] == search.value[0]) {
    //         item.parentNode.classList.remove('hidden');
    //     } else {
    //         item.parentNode.classList.add('hidden');
    //     }
    //     if (search.value == '') {
    //         item.parentNode.classList.remove('hidden');
    //     }

    // })


});