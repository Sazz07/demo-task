import Image from "next/image";
import SectionTitle from "./shared/SectionTitle";

const members = [
  {
    uid: 1,
    name: "Oliver Bennett",
    image: "/member_1.jpeg",
    position: "Founder and Director",
  },
  {
    uid: 2,
    name: "Sophia Parker",
    image: "/member_4.jpeg",
    position: "COO",
  },
  {
    uid: 3,
    name: "Lucas Thompson",
    image: "/member_2.jpeg",
    position: "Director Hotels",
  },
  {
    uid: 4,
    name: "Isabella Nguyen",
    image: "/member_5.jpeg",
    position: "Chief Executive",
  },
  {
    uid: 5,
    name: "Xavier Rodriguez",
    image: "/member_3.jpeg",
    position: "Customer Support",
  },
];

const Teams = () => {
  return (
    <div className="py-8 md:py-16">
      <div className="flex flex-col items-center justify-center mx-auto md:max-w-7xl">
        <div className="md:w-1/4">
          <SectionTitle leftDash={true} rightDash={true}>
            Team
          </SectionTitle>
          <h1 className="text-4xl font-bold text-center whitespace-nowrap">
            Our Amazing Team
          </h1>
        </div>
        <div>
          <div className="grid gap-4 px-4 py-6 md:grid-cols-3 md:gap-8 lg:grid-cols-5 md:py-10 md:px-0">
            {members.map((member) => (
              <div key={member.uid} className="space-y-4">
                <Image
                  src={member?.image}
                  alt=""
                  width={500}
                  height={500}
                  className="object-cover object-center rounded cursor-pointer h-96 hover:opacity-80"
                />
                <div>
                  <h1 className="text-2xl font-bold">{member.name}</h1>
                  <p className="text-lg font-medium text-gray-500">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
