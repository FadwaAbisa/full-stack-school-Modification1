import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-between p-4">
      {/* شريط البحث */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="بحث" width={14} height={14} />
        <input
          type="text"
          placeholder="ابحث هنا..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* الأيقونات و المستخدم */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div
          title="الرسائل"
          className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"
        >
          <Image src="/message.png" alt="رسائل" width={20} height={20} />
        </div>
        <div
          title="الإعلانات"
          className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative"
        >
          <Image src="/announcement.png" alt="إعلانات" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-xs leading-3 font-medium">جون دو</span>
          <span className="text-[10px] text-gray-500">
            {user?.publicMetadata?.role === "admin"
              ? "مدير"
              : user?.publicMetadata?.role === "teacher"
              ? "معلم"
              : user?.publicMetadata?.role === "student"
              ? "طالب"
              : user?.publicMetadata?.role === "parent"
              ? "ولي أمر"
              : ""}
          </span>
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
