import { useState } from "react";
import Navbar from "./Navbar";

function TimetableForm({ onSubmit }) {
  const [formData, setFormData] = useState({ day: "Monday", time: "9:00 - 10:00 AM", period: "", faculty: "", isAvailable: true });
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const times = [
    "9:00 - 10:00 AM", "10:00 - 11:00 AM", "11:00 - 12:00 PM",
    "12:00 - 1:00 PM", "1:00 - 2:00 PM", "2:00 - 3:00 PM", "3:00 - 4:00 PM"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div>
        <Navbar title="Time Table Manager" />
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="mb-5 p-4 border rounded shadow">
        <div className="grid grid-cols-2 gap-4">
            <label>Day:
            <select name="day" value={formData.day} onChange={handleChange} className="ml-2 border p-1">
                {days.map(day => <option key={day} value={day}>{day}</option>)}
            </select>
            </label>
            <label>Time:
            <select name="time" value={formData.time} onChange={handleChange} className="ml-2 border p-1">
                {times.map(time => <option key={time} value={time}>{time}</option>)}
            </select>
            </label>
            <label>Period:
            <input type="text" name="period" value={formData.period} onChange={handleChange} className="ml-2 border p-1" required />
            </label>
            <label>Faculty:
            <input type="text" name="faculty" value={formData.faculty} onChange={handleChange} className="ml-2 border p-1" required />
            </label>
            <label className="col-span-2">
            <input type="checkbox" name="isAvailable" checked={formData.isAvailable} onChange={handleChange} className="mr-2" /> Available
            </label>
        </div>
        <button type="submit" className="mt-3 p-2 bg-blue-500 text-white rounded">Add Entry</button>
        </form>
    </div>
  );
}

export default TimetableForm;

