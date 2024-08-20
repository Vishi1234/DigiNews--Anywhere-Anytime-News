handleSportsSec = async () => {
    let url= `https://api.thenewsapi.com/v1/news/top?api_token=It7aWNVazDYOFWSGVdqOmADjYt3Oyz0U3k3ewUWl&category=sports&locale=in&limit=3`
    let data =await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.data || [], loading: false });
}