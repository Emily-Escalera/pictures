import axios from 'axios'

const  searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=IdF57eU6LCCjAGQk6TA2qED8v2aQAYz_tuo04NhimZk'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })
    console.log(term)
    console.log(response)

    return response.data.results
}

export default searchImage