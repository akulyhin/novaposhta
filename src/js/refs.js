const refs = {
    search: document.getElementById('searchInput'),
    result: document.querySelector('.countries'),
}

function selectDetect () {
    const select = document.querySelector('.select2-selection--single')
    console.log(select)
}

setTimeout(selectDetect, 50);


export default refs;