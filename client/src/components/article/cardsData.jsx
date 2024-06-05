"use client";

const Project = ({
  title = "block name",
  description = "this is good",
  imgUrl = "",
}) => {
  return (
    <div className="h-[200px] w-[350px] rounded-3xl flex flex-col card-pro justify-center items-center bg-white relative">
  <div className="absolute top-[-25px] w-full flex justify-center">
    <img className="h-14 w-14 object-contain img-shadow" src={imgUrl} alt={title} />
  </div>

  <div className="flex flex-col gap-2 items-center ">
    <h2 className=" text-xl subtitle text-white text-center">
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
