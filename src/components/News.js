import React, { Component } from 'react'
import Newsitem from './Newsitem'
import defaultImg from '../assests/image.png'
import PropTypes from 'prop-types'



export default class News extends Component {
    static  defaultProps = {
        locale :'in',
        categories: 'general',
        
    }

    static propTypes = {
        locale: PropTypes.string,
        categories: PropTypes.string,
        
    }
    
    
   constructor() {
    super();
    this.state = {
        articles: [],
        loading: true,
        page: 1
    }
   }


   async fetchNews() {
    let url= `https://api.thenewsapi.com/v1/news/top?api_token=sTW9lFGDaZYn5YrjJ4YmVXJeFJoQPtJd0t4WJn9V&categories=${this.props.categories}&locale=${this.props.locale}&limit=3`
    let data =await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.data || [], loading: false });
   }

async componentDidMount(){
       this.fetchNews();
}


async componentDidUpdate(prevProps) {
  // Check if the category or locale has changed
  if (prevProps.categories !== this.props.categories || prevProps.locale !== this.props.locale) {
      this.setState({ page: 1 }, () => this.fetchNews());
  }
}

handlePrevClick = async () => {
   console.log("previous")

   let url= `https://api.thenewsapi.com/v1/news/top?api_token=sTW9lFGDaZYn5YrjJ4YmVXJeFJoQPtJd0t4WJn9V&categories=${this.props.categories}&locale=${this.props.locale}&page=${this.state.page}&limit=3`
  let data =await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData)
  this.setState({ articles: parsedData.data || [], loading: false,
                  page: this.state.page - 1
  })
}

handleNextClick = async () => {
  console.log("next")

  let url= `https://api.thenewsapi.com/v1/news/top?api_token=sTW9lFGDaZYn5YrjJ4YmVXJeFJoQPtJd0t4WJn9V&categories=${this.props.categories}&locale=${this.props.locale}&page=${this.state.page +1}&limit=3`
  let data =await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData)
  this.setState({ articles: parsedData.data || [], loading: false,
                  page: this.state.page + 1
  })
}  

  render() {
    
    return (
    <>
      <div className='container my-6' >
         <div className='row '>
        
        {this.state.articles.map((element) => {
            return <div className='col my-3' key={element.url}><center><Newsitem title={element.title?element.title.slice(0,38):""} description={element.description?element.description.slice(0,83):"No description available"} imageurl={element.image_url?element.image_url:defaultImg} newsUrl={element.url} /></center></div>
            
       
        })}
       
         </div>
      </div>

      <div className='btn-container d-flex justify-content-between'>
      <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-dark mx-4 text-center"> &larr; Previous</button>

      <button type="button" onClick={this.handleNextClick} className="btn btn-dark mx-4 text-center">Next &rarr;</button>
      </div>
        
       
    </>
    )
  }
}
