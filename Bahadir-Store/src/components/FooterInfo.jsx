/* eslint-disable react/prop-types */
const Features = ({ title, goods }) => (
    <div className='text-[#737373] text-xs font-bold'>
      <h5 className="font-bold text-lg mb-4 text-[#252B42]">{title}</h5>
      <ul className="space-y-2">
        {goods.map((good, index) => (
          <li key={index}>{good}</li>
        ))}
      </ul>
    </div>
  );
  
  function FooterInfo () {
    const sections = [
      { title: "Company Info", goods: ["About Us", "Carrier", "We are hiring", "Blog"] },
      { title: "Legal", goods: ["About Us", "Carrier", "We are hiring", "Blog"] },
      { title: "Features", goods: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"] },
      { title: "Resources", goods: ["IOS & Android", "Watch a Demo", "Customers", "API"] },
    ];
    return (
        <div className="bg-white py-8 px-4 md:px-64">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0">
            {sections.map((section, index) => (
              <Features key={index} title={section.title} goods={section.goods} />
            ))}
            <div>
              <h5 className="font-bold text-lg mb-4 text-[#252B42]">Get In Touch</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border p-2 rounded-l-sm flex-grow focus:border-[#737373] focus:outline-none"
                />
                <button className="bg-[#23A6F0] text-white px-4 rounded-r-sm">
                  Subscribe
                </button>
              </form>
              <p className="text-xs mt-2 text-[#737373]">Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
      );
}

export default FooterInfo