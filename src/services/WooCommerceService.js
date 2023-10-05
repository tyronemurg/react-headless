const WooCommerceService = {
    async getProducts() {
      const response = await fetch('http://localhost/webwarrior/wp-json/wc/v3/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('ck_xxx:cs_xxx')
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    },

    async getProduct(productId) {
      const response = await fetch(`http://localhost/webwarrior/wp-json/wc/v3/products/${productId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('ck_xxx:cs_xxx')
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    }
  };

  
  export default WooCommerceService;