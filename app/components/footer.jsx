// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <p className="text-sm text-center md:text-left">
          © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/pranav-bidkar-488386320/" className="bg-gradient-to-r from-orange-500 via-orange-400 to-pink-500 bg-clip-text text-transparent font-bold">CRYPTEX.</Link>
        </p>
      </div>
    </div >
  );
};

export default Footer;