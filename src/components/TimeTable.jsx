
import React from 'react';
import Navbar from './Navbar';
import PeriodSlot from './Period';

export default function TimeTable() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const times = [
      "9:00 - 10:00 AM", "10:00 - 11:00 AM", "11:00 - 12:00 PM",
      "12:00 - 1:00 PM", "1:00 - 2:00 PM", "2:00 - 3:00 PM", "3:00 - 4:00 PM"
    ];

    const timetableData = {
        Monday: { "9:00 - 10:00 AM": { period: "Math", faculty: "Mr. A", isAvailable: true } },
        Tuesday: { "10:00 - 11:00 AM": { period: "Science", faculty: "Ms. B", isAvailable: false } },
        Wednesday: { "11:00 - 12:00 PM": { period: "History", faculty: "Mr. C", isAvailable: true } },
        // Add more data as needed
      };

    // useEffect(() => {
    //     ProductService.getProductsMini().then(data => setPeriods(data));
    // }, []);

    return (
        <div>
            <Navbar title="Time Table Manager" />
            <div className="flex justify-center mt-8">
            <div className="w-full px-4 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                    <th className="border border-gray-300 bg-gray-100 p-2">Day / Time</th>
                    {times.map((time, index) => (
                        <th key={index} className="border border-gray-300 bg-gray-100 p-2">{time}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {days.map((day, rowIndex) => (
                    <tr key={rowIndex}>
                        <td className="border border-gray-300 bg-gray-100 p-2 font-bold">{day}</td>
                        {times.map((time, colIndex) => (
                        <td
                            key={colIndex}
                            className={`border border-gray-300 p-2 text-center ${time === "12:00 - 1:00 PM" ? "bg-gray-300 font-bold" : ""}`}
                        >
                           {time === "12:00 - 1:00 PM" ? (
                      "Lunch"
                    ) : (
                      timetableData[day] && timetableData[day][time] ? (
                        <PeriodSlot {...timetableData[day][time]} />
                      ) : (
                        <PeriodSlot period="Free Slot" faculty="-" isAvailable={true} />
                      )
                    )}
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}
