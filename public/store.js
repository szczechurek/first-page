const productsWrapper = document.querySelector('.products');

const dunksArray = [
  {
    image:
      'https://static.nike.com/a/images/t_default/69bafbdc-54af-4fa1-9538-ed476e8e09fd/custom-nike-dunk-high-by-you.png',
    name: 'Nike dunks slime',
    price: 170,
  },
  {
    image:
      'https://static.nike.com/a/images/t_default/db6b18de-ab89-4dc8-8aea-aedd3e9adbb6/custom-nike-dunk-high-by-you.png',
    name: 'Nike dunks violet',
    price: 150,
  },
  {
    image:
      'https://i0.wp.com/onsetshoes.com/wp-content/uploads/2021/03/wethenew-sneakers-france-nike-dunk-high-team-red-dd1869-101-1_2000x.png?fit=700%2C420&ssl=1',
    name: 'Nike dunks spider',
    price: 130,
  },
];

dunksArray.map(({ image, name, price }) => {
  const nikeDunk = `
<div class="products__card">
<img
  src=${image}
  alt=${name}
  class="products__card__image"
/>
<div class="products__card__texts__wrapper">
  <h3
    class="products__card__texts__wrapper__header"
  >
    ${name}
  </h3>
  <p
    class="products__card__texts__wrapper__price"
  >
    ${price}$
  </p>
</div>
</div>
`;
  productsWrapper.innerHTML += nikeDunk;
});

//for (let i = 0; i < products.length; i++) {
//  productsWrapper.innerHTML += products[i];
//}
