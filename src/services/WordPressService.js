const WordPressService = {
    async getPosts() {
      try {
        const response = await fetch('http://localhost/webwarrior/wp-json/wp/v2/posts?_embed');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },

    async getPostById(postId) {
        try {
          const response = await fetch(`http://localhost/webwarrior/wp-json/wp/v2/posts/${postId}?_embed`);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
      }

  };
  
  export default WordPressService;
  