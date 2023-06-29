import '../style/bid-section.css'
import Image from "next/image"

const BidSection = () => {
  return (
    <>
      <div className="bid-section">
        <h1>
          Bid Section
        </h1>
        <div className="bid-list">
          <table>
            <tr>
              <th>
                Position
              </th>
              <th>
                Bidder
              </th>
              <th>
                Bid <Image src="/Icons/bdtaka.png" width={15} height={15} />
              </th>
              <th>
                Postion Update
              </th>
            </tr>
            <tr>
              <td>1</td><td>Peter</td><td>80,000</td><td><Image src="/Icons/upTriangle.png" width={20} height={20} /></td>
            </tr>
            <tr>
              <td>2</td><td>Pan</td><td>70,000</td><td><Image src="/Icons/downTriangle.png" width={20} height={20} /></td>
            </tr>
            <tr>
              <td>3</td><td>John</td><td>60,000</td><td><Image src="/Icons/upTriangle.png" width={20} height={20} /></td>
            </tr>
            <tr>
              <td>4</td><td>Henry</td><td>50,000</td><td><Image src="/Icons/downTriangle.png" width={20} height={20} /></td>
            </tr>
            <tr>
              <td>5</td><td>Li</td><td>40,000</td><td><Image src="/Icons/upTriangle.png" width={20} height={20} /></td>
            </tr>
          </table>
        </div>
        <div className="user-bid-section">
          <form>
            Enter your bid here:<br />
            <input placeholder="Your bid" type="number" /><br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}
export default BidSection;