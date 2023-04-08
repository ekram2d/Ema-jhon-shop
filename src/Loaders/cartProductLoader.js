const cartProductLoader = async () => {
      const loadedProducts = await fetch("products.json");
      const products = await loadedProducts.json();
      // console.log(products);
      const storcart = JSON.parse(localStorage.getItem("store"));

      let newarray = [];
      for (let id in storcart) {
            let savedproduct = products.find((data) => data.id === id);
            if (savedproduct) {
                  savedproduct.quantity = storcart[id];
                  newarray.push(savedproduct);
            }


      }













      return newarray;

}

export default cartProductLoader;