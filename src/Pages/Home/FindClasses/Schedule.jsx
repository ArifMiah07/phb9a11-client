import '../../../Styles/Fonts/GoogleFonts.css';

const Schedule = () => {
  const schedule = [
    { time: "08:00 am", Monday: "Physical Training", Tuesday: "English", Wednesday: "Programming", Thursday: "English", Friday: "Basic Math" },
    { time: "09:00 am", Monday: "Basic Math", Tuesday: "English", Wednesday: "Basic Math", Thursday: "Art & Drawing", Friday: "Music" },
    { time: "10:00 am", Monday: "Physical Training", Tuesday: "Art & Drawing", Wednesday: "English", Thursday: "Physical Training", Friday: "Physical Training" },
    { time: "11:00 am", Monday: "Physical Training", Tuesday: "English", Wednesday: "Programming", Thursday: "English", Friday: "Basic Math" },
    { time: "12:00 pm", Monday: "Basic Math", Tuesday: "English", Wednesday: "Programming", Thursday: "Physical Training", Friday: "Basic Math" }
  ];

  const getColor = (subject) => {
    switch (subject) {
      case "Physical Training": return "bg-blue-600 text-white";
      case "English": return "bg-purple-600 text-white";
      case "Programming": return "bg-green-600 text-white";
      case "Basic Math": return "bg-orange-600 text-white";
      case "Art & Drawing": return "bg-orange-400 text-white";
      case "Music": return "bg-red-600 text-white";
      default: return "";
    }
  };//explored and found this way to write

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-12">Class Schedule</h1>
      <p className="text-center mb-12">Class routine chart is a great way to help students and teachers stay organized and aware of daily activities</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-8 px-6 text-center inter bg-gray-200">Time</th>
              <th className="py-8 px-6 text-center inter bg-gray-200">Monday</th>
              <th className="py-8 px-6 text-center inter bg-gray-200">Tuesday</th>
              <th className="py-8 px-6 text-center inter bg-gray-200">Wednesday</th>
              <th className="py-8 px-6 text-center inter bg-gray-200">Thursday</th>
              <th className="py-8 px-6 text-center inter bg-gray-200">Friday</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, index) => (
              <tr key={index}>
                <td className="border px-6 text-center inter py-8">{row.time}</td>
                <td className={`border px-6 text-center inter py-8 ${getColor(row.Monday)}`}>{row.Monday} <br /> 8:00 am - 8:45 am</td>
                <td className={`border px-6 text-center inter py-8 ${getColor(row.Tuesday)}`}>{row.Tuesday} <br /> 8:00 am - 8:45 am</td>
                <td className={`border px-6 text-center inter py-8 ${getColor(row.Wednesday)}`}>{row.Wednesday} <br /> 8:00 am - 8:45 am</td>
                <td className={`border px-6 text-center inter py-8 ${getColor(row.Thursday)}`}>{row.Thursday} <br /> 8:00 am - 8:45 am</td>
                <td className={`border px-6 text-center inter py-8 ${getColor(row.Friday)}`}>{row.Friday} <br /> 8:00 am - 8:45 am</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
