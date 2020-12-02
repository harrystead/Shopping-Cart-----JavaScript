
   var addToCartButtons = document.getElementsByClassName('tour-btn')
   for (var i = 0; i < addToCartButtons.length; i++) {
       var button = addToCartButtons[i]
       button.addEventListener('click', addToCartClicked)
   }

function addToCartClicked(event) {
  var button = event.target

  var date = document.getElementsByClassName('tour-date')[0].innerText
  var city = document.getElementsByClassName('tour-city')[0].innerText
  var arena = document.getElementsByClassName('tour-arena')[0].innerText
  addItemToCart(date, city, arena);

}

function addItemToCart(date, city, arena) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${date}" width="100" height="100">
          <span class="cart-item-title">${city}</span>
      </div>
      <span class="cart-price cart-column">${arena}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}