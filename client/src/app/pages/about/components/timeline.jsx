import TimelineData from "./timelineData";

const Timeline = () => (
  <div className="relative">
    
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    {TimelineData.map((data, index) => (
      <div className="p-4" key={index}>
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-yellow-200/80 dark:text-white">
            {data.title}
          </h3>
        </div>
        <p className="mb-1 text-sm font-normal leading-none text-blue-200/90 dark:text-gray-500">
          {data.description}
        </p>
      </div>
    ))}
  </div>
);

export default Timeline;
