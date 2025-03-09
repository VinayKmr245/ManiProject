function PeriodSlot({ period, faculty, isAvailable }) {
    return (
      <div className="text-sm text-gray-600">
        <div className="font-bold">{period}</div>
        <div>{faculty}</div>
        <div className={isAvailable ? "text-green-600" : "text-red-600"}>
          {isAvailable ? "Available" : "Not Available"}
        </div>
      </div>
    );
  }

  export default PeriodSlot;