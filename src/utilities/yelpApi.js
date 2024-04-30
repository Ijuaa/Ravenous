const apiKey = "Lc-l-JuS9fSVO1AsxrfSSJ75aGCiabXT3Z2xBE13VWMqPm_IvRaFBO0DX1_-kaGJuU-9k-ylR6Qs399tIv2WpTfH9rs4n3LD-kqJo-6p12iybeNyoQ0ZrduO5RcxZnYx"
const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"

async function searchYelp(searchTerm, location, sortBy) {
    const url = `${baseUrl}?term=${searchTerm}&location=${location}&sort_by=${sortBy}`;
  
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
  
      const json = await response.json();
      if (response.ok) {
        return json.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          url: business.url
        }));
      } else {
        throw new Error('Failed to fetch businesses');
      }
    } catch (error) {
      console.error('Error fetching data from Yelp:', error);
      throw error;
    }
  }
  
  export default searchYelp;
