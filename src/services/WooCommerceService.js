const WooCommerceService = {
    async getProducts() {
      const response = await fetch('https://client-apps.co.za/flint-components/wp-json/wc/v3/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('ck_a8715706b00dbc8146e3603088bf641aff6c0b4f:cs_84368d812e14b9669339f5576f3d35692f9091a5')
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