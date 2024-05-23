import Nav from './Nav'
import ProductCard from './ProductCard'
function Home() {
    const arr =[1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <>
    <Nav/>
    <div className='container'>
    {arr.map((item,index)=>{
        return(
            <ProductCard key={index}/>
        )
    })
    }
    </div>
    </>
  )
}

export default Home
