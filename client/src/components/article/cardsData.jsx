"use client";


const Project = ({
  name = "block name",
  description = "this is good",
  imgUrl = "/project-1.png",
  urlLink = "https://www.youtube.com/watch?v=v8zT3O_xsDg&ab_channel=Marendez",
  gitLink = "https://github.com",
}) => {
  return (
    <div className="h-[420px] rounded-3xl flex flex-col card-pro p-4 gap-3 justify-between">
      <div
        className="w-[500px] h-[220px] rounded-xl flex justify-between bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${imgUrl}')` }}
      ></div>

      <div className="h-[110px]">
        <h2 className="from-neutral-300 text-lg subtitle text-white">
          {name}
        </h2>
        <p className="dark:text-zinc-300 text-sm subtitle text-zinc-400">
          {description}
        </p>
      </div>
      <div className="flex gap-2 items-end">
      

       
      </div>
    </div>
  );
};

export default Project;
