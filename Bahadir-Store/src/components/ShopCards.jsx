function ShopCards() {
    return (
      <>
        <div className="container mx-auto px-4 py-4 md:px-24">
            <div>
                <h3>EDITOR’S PICK</h3>
                <p>Problems trying to resolve 
                the conflict between </p>
            </div>
            <div>
                <div>
                    <img src="../../public/erkek-sarımont.jpeg" alt="" />
                    <h2>MEN</h2>
                </div>
                <div>
                    <img src="../../public/kadın-kazak.jpeg" alt="" />
                    <h2>WOMEN</h2>
                </div>
                <div>
                    <img src="../../public/kadın-klasik.jpeg" alt="" />
                    <h2>ACCESSORIES</h2>
                </div>
                <div>
                    <img src="../../public/erkek-gölek.jpeg" alt="" />
                    <h2>KIDS</h2>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default ShopCards;