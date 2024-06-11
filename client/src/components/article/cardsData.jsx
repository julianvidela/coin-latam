"use client";

const Project = ({
  title = "block name",
  description = "this is good",
  imgUrl = "",
}) => {
  return (
    <div className="h-[150px] w-[350px] md:w-[240px] md:h-[180px] lg:w-[320px] xl:w-[370px] rounded-3xl flex flex-col card-pro justify-start items-center bg-white  p-4">
      <div className=" w-full flex justify-center">
        <img
          className="h-14 w-14 object-contain img-shadow scale-75"
          src={imgUrl}
          alt={title}
        />
      </div>

      <div className="flex flex-col gap-2 items-center ">
        <h2 className=" text-xl md:text-lg subtitle text-white text-center">
          {title}
        </h2>
        <p className=" text-sm subtitle text-zinc-400 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;
