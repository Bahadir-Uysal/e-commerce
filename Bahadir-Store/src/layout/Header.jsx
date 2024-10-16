function Header() {
  return (
    <>
      <div className="">
        <div className="flex justify-around">
          <h1>Bahadır Store</h1>
          <div className="flex gap-4">
            <i className="fa fa-user"></i>
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-cart"></i>
            <i className="fa fa-bars"></i>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <a href="">Home</a>
          <a href="">Product</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Header;
