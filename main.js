const app = Vue.createApp({
    // data: function() {
        data() { //es6 shorthand
        return {
            cart: 0,
            product: 'Socks',
            description: 'White socks small',
            image: './assets/images/socks_green.jpg',
            url: 'https://google.com',
            // inStock: true
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 1234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 1235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
            sizes: ['Small', 'Medium', 'Large'],
        }
    },
    methods: {
        addToCart() {
            this.cart +=1
        },
        removeToCart() {
            this.cart -=1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})

