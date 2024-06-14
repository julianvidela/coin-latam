import TimelineData from "./timelineData";

const Timeline = () => (
  <div className="relative border-s border-gray-200 ml-3 mt-6">
    
    
    {TimelineData.map((data, index) => (
      <div className="p-4" key={index}>
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <div className="flex items-center">
          <h3 className="text-[24px] font-semibold text-violet-500">
            {data.title}
          </h3>
        </div>
        <p className="mb-1 text-[16px] font-normal leading-none text-blue-200/90">
          {data.description}
        </p>
      </div>
    ))}
  </div>
);

export default Timeline;
