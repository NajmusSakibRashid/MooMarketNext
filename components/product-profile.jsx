import Image from "next/image";
import '../style/product-profile.css';

const ProductProfile = ({children}) => {
  return (
    <>
      <div class="informations">
        <h1>
          Product Id: {children.id}
        </h1>
        <div class="horizontal-line"></div>
        <h2>
          Specifications:
        </h2>
        <ul>
          {
            children.specifications.map(element=>{
              return(
                <li>{element}</li>
              )
            })
          }
        </ul>
        <div class="horizontal-line"></div>
        <div class="price">
          <h2>Base Price: {children["base price"]} <Image src="/Icons/bdtaka.png" height={15} width={15}/></h2>
        </div>
      </div>
    </>
  );
}
export default ProductProfile;