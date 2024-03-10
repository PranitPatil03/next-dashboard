"use client";
import UserItem from "./UserItem";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4 gap-4">
        <div>
          <UserItem />
        </div>
        <div className="grow">Menu</div>
        <div className="">Setting / Notification</div>
      </div>
    </>
  );
};

export default SideBar;
