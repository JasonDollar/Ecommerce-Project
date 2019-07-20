export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)
  if (existingCartItem) {
    return cartItems.map(item => (
      item.id === cartItemToAdd.id 
        ? { ...cartItems, quantity: item.quantity + 1 } : item
    ))
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}