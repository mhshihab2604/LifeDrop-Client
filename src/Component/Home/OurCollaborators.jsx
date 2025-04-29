import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
const OurCollaborators = () => {
    return (
        <div>
             <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center pt-5">Our Collaborators</h1>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl mx-auto mt-10">
                <div className="hover:scale-110 scale-100 transition-all duration-100 mx-auto max-w-[350px] space-y-4 rounded-lg  bg-[#B32346] p-6 shadow-lg md:w-[350px]  text-white">
                    <MdOutlineMarkEmailRead className="text-5xl" />
                    <div className="grid gap-2">
                        <h1 className="text-lg font-semibold ">Email Messaging</h1>
                        <p className="text-sm text-gray-500 dark:text-white">Create one-off or automated email messages, sent at intervals you designate. Keep volunteers informed and engaged without the manual effort.</p>
                    </div>
                </div>
                <div className="hover:scale-110 scale-100 transition-all duration-100 mx-auto max-w-[350px] space-y-4 rounded-lg  bg-[#B32346] p-6 shadow-lg md:w-[350px]  text-white">
                    <MdOutlineMessage className="text-5xl" />
                    <div className="grid gap-2">
                        <h1 className="text-lg font-semibold ">Text Messaging</h1>
                        <p className="text-sm text-gray-500 dark:text-white">Quickly text individuals, groups, or all volunteers. Bypass email inboxes and communicate important updates in real time.</p>
                    </div>
                </div>
                <div className="hover:scale-110 scale-100 transition-all duration-100 mx-auto max-w-[350px] space-y-4 rounded-lg  bg-[#B32346] p-6 shadow-lg md:w-[350px]  text-white">
                    <IoShareSocialOutline className="text-5xl" />
                    <div className="grid gap-2">
                        <h1 className="text-lg font-semibold ">Social Media Integration</h1>
                        <p className="text-sm text-gray-500 dark:text-white">Boost your organizations visibility with our social media feature. Easily share your social media channels and allow volunteers to post updates as part of your volunteer scheduling process..</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurCollaborators;