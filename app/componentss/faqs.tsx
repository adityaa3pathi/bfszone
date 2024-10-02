import { Text } from "./ui/text"
import { Img } from "./ui/image";

const Faqs = () => {
    return (  

<div className="container-xs md:px-5">
    <div>
    <div className="flex flex-col gap-[46px]">
    <div className="flex items-start justify-between gap-5 md:flex-col">
    <div className="flex w- [66%] justify-center gap-12 self-center md:w-full md:flex-col">
    <div className="flex w-full flex-col items-center gap-5">
    <Img
    />
    src=""
    width={32}
    height={32}
    alt="Favorite Icon"
    className="h-[32px] w- [32px]"
    <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-100">
    How do I get started?
    </Text>
    <Text
    as="p"
    className="self-stretch text-center text-[14px] font-normal leading-[160%] text-white-a700">
    Sign up for an account, choose your plan, and start training!
    </Text>
    </div>
    <div className="flex w-full flex-col items-center gap-6">
            <Img
        />
        src=""
        width={32}
        height={32}
        alt="Thumbs Up Icon"
        className="h-[32px] w- [32px]"
        <div className="flex flex-col items-center gap-4 self-stretch">
        <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-100">
        What courses are available?
        </Text>
        <Text
        as="p"
        className="self-stretch text-center text-[14px] font-normal leading-[160%] text-white-a700">
        We offer a range of courses from basic to advanced levels.
        </Text>
        </div>
        <div>
        <div className="flex flex-col items-center gap-5">
            <Img
            />
            src="img_airplane_blue_gray_700.svg"
            width={32}
            height={32}
            alt="Airplane Icon"
            className="h-[32px] w- [32px]"
            <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-100">
            Can I cancel anytime?
            </Text>
            <Text as="p" className="text-[14px] font-normal text-white-a700">
            Yes, you can cancel your subscription at any time.
            </Text>
        </div>
        </div>
        <div className="mr-3 flex justify-between gap-5 md:mr-0 md:flex-col">
        <div className="flex w- [66%] justify-center gap-12 md:w-full md:flex-col">
            <div className="flex w-full flex-col items-center gap-5 px-[38px] sm:px-5">
            <Img
                src="img_icon.svg"
                width={32}
            />
            height={32}
            alt="Free Trial Icon"
            className="h-[32px] w- [32px]"
            <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-100">
                Is there a free trial?
            </Text>
            <Text as="p" className="text-[14px] font-normal text-white-a700">
                Yes, we offer a 7-day free trial for new users.
            </Text>
            </div>
            <div className="flex w-full flex-col items-center gap-6">
            <Img
                src="img_grid.svg"
                width={32}
                height={32}
                alt="Discounts Icon"
                className="h-[32px] w- [32px]"/>
                <div className="flex flex-col items-center gap-4 self-stretch px-6 sm:px-5">
        <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-100">
            Do you offer team discounts?
        </Text>
        <Text as="p" className="text-[14px] font-normal text-white-a700">
            Yes, we have special pricing for teams and clubs.
        </Text>
        </div>
        <div className="flex flex-col items-center gap-5">
        <Img
            src="img_settings_blue_gray_700.svg"
            width={32}
            height={32}
            alt="Settings Icon"
            className="h-[32px] w- [32px]"
        />
        <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-100">
            What support do you offer?
        </Text>
        <Text as="p" className="text-[14px] font-normal text-white-a700">
            We offer 24/7 support for Pro and Elite plans.
        </Text>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
        





    );
}
 
export default Faqs;