import React from 'react'
import '../sections/Jobcategory.css'


const Jobcategory = () => {
    const categories = [
        {
            id:9,
            icon:"䷴",
            title:"Business Development",
            positions:"3 Positions"
        },
        {
            id:8,
            icon:"👨🏻‍🏫",
            title:"Customer Service",
            positions:"3 Positions"
        },
        {
            id:7,
            icon:"🩺",
            title:"Health Care",
            positions:"3 Positions"
        },
        {
            id:6,
            icon:"🏦",
            title:"Finance",
            positions:"3 Positions"
        },
        {
            id:5,
            icon:"䷴",
            title:"Business Development",
            positions:"3 Positions"
        },
        
    ];
  return (
    <section className='jobcategory-section'>
    <div className='jobcategory-inner'>
    
        <div className='jobcategory-header'>
        <h2 className='jobcategory-title'>Search By Category</h2>
        
        <div className='jobcategory-header-bottom'>
            <p>Search your career opportunity with our categories</p>
            <div className='all-category-search-button'>
            <p>All Categories →</p>
            </div>
        </div>
        </div>

            
            
         <div className="slider-container">
            <div className='category-cards'>
                {categories.map((categories)=>(
                    <div key={categories.id} className='category-card'>
                        <div className='catrgory-icon'>{categories.icon}</div>
                        <h3>{categories.title}</h3>
                        <p className='category-positions'>{categories.positions}</p>
                    </div>
                ))}
            </div>
         </div>
            
     </div>

    </section>
  )
}

export default Jobcategory
