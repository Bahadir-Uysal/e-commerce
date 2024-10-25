import erhan from "../assets/erhan.jpeg";
import gökhan from "../assets/gökhan.jpeg";
import me from "../assets/me2.jpeg";
import cetin from "../assets/cetin.jpeg";
import aysen from "../assets/aysen.jpeg";
import ozge from "../assets/ozge.jpeg";
function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Erhan Fırat",
      profession: "Product Owner",
      image: erhan,
    },
    {
      id: 2,
      name: "Gökhan Özdemir",
      profession: "Scrum Master",
      image: gökhan,
    },
    {
      id: 3,
      name: "Bahadır UYSAL",
      profession: "Frontend Developer",
      image: me,
    },
    {
      id: 4,
      name: "Çetin Erdem",
      profession: "FullStack Developer",
      image: cetin,
    },
    {
      id: 5,
      name: "Ayşen Aydın",
      profession: "Frontend Developer",
      image: aysen,
    },
    {
      id: 6,
      name: "Özge Karabay",
      profession: "Frontend Developer",
      image: ozge,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-12 md:mt-24">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl font-bold text-[#252B42] mb-2">
          Meet Our Team
        </h2>
        <p className="text-[#737373] w-64 md:w-1/2">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center md:my-16">
        {teamMembers.map((member) => (
          <div key={member.id} className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <div className="bg-white overflow-hidden shadow-lg max-w-[280px] mx-auto">
              <div className="h-[280px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h5 className="text-md font-bold text-[#252B42] text-center">
                  {member.name}
                </h5>
                <h6 className="text-sm font-semibold text-[#737373] mb-2 text-center">
                  {member.profession}
                </h6>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <i className="fa-brands fa-github text-lg"></i>
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <i className="fa-brands fa-linkedin-in text-lg"></i>
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <i className="fa-brands fa-twitter text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TeamPage;

//TODO add social links
