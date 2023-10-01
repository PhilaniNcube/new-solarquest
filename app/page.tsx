import Hero from "./(home)/_components/Hero"
import Financing from "./(home)/_components/financing"
import Installations from "./(home)/_components/installations"
import ProductsGrid from "./(home)/_components/products-grid"
import Reasons from "./(home)/_components/reasons"


export const dynamic = 'force-dynamic'



export default async function Index() {


  return (
     <main className="">
      <Hero />
      <ProductsGrid />
      <Installations />
      <Reasons />
      <Financing />
     </main>
  )
}
