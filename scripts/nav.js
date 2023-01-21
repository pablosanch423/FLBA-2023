var btn = document.getElementById('btn-nav');
var body = document.getElementById('nav');
var p = 2

btn.addEventListener('click', () => {
   
    if(p === 2){   
    
    var btnparent = document.createElement('div');
    btnparent.setAttribute('id', 'mobile')

    var number = document.createElement('p');
    number.setAttribute('id', "num")
    number.innerHTML = "Call Us: <a>+1(800)-325-3535<a>"

    var book = document.createElement('a');
    book.setAttribute('href', './pages/booking.html')
    book.setAttribute('id', 'book-btn-mobile')
    book.innerHTML = "Book Now"

    btnparent.appendChild(number)
    btnparent.appendChild(book)
    body.appendChild(btnparent)

    p = 1
    console.log(p)
    
    }

    else if(p === 1){
        document.getElementById('num').remove()
        document.getElementById('book-btn-mobile').remove()
        document.getElementById('mobile').remove()

        p = 2
        console.log(p)  
    }
});

