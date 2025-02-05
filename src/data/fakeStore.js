const getProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      
      if (!res.ok) {
        throw new Error(`${res.status} - Failed to fetch products`);
      }
      
      const data = await res.json();
      return data;
  
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;  
    }
  };
  
  export default getProducts