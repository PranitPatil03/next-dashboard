"use client";

const UserItem = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-2 border rounded-lg p-3">
        <div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-bold flex justify-center items-center">
          <p> PP</p>
        </div>
        <div className="grow">
          <p className="text-base font-bold">Pranit Patil</p>
          <p className="text-sm text-neutral-500">Patilpranit3112@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default UserItem;
