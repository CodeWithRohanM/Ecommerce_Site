const cartNumber = (updatedCartNumber) => {
    return {
        type: "CART_NUMBER",
        payLoad: updatedCartNumber,
    };
};

const showCartNumber = (cartNumberStatus) =>{
    return {
        type: "SHOW_CART_NUMBER",
        payLoad: cartNumberStatus,
    };
}

export {cartNumber, showCartNumber};