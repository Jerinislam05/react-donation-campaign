import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const Statistics = () => {
  const totalDonations = 12;
  const myDonations = 3;
  const otherDonations = totalDonations - myDonations;

  const data = [
    { name: "Me", value: myDonations },
    { name: "Other", value: otherDonations },
  ];

  const colors = ["green", "orange"];

  return (
    <>
      <h2 className="mt-6 text-black text-4xl text-center font-bold">
        Statistics Chart:
      </h2>
      <div className="flex justify-center items-center h-screen">
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={170}
            fill="blue"
            dataKey="value"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </>
  );
};

export default Statistics;
