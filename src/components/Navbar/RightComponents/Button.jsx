import React from 'react';

export const LoginButton = () => {
  return (
    <button className="h-[38px] px-4 rounded-lg border border-white text-white font-bold text-xs uppercase hover:bg-white/10 cursor-pointer">
      LOGIN
    </button>
  );
};

export const BuyPlanButton = () => {
  return (
    <button className="h-[38px] px-3.5 rounded-lg bg-white text-black font-extrabold text-[13px] tracking-wide uppercase flex items-center gap-1.5 hover:bg-zinc-200 transition-colors shadow-sm cursor-pointer">
      <svg
        className="w-4 h-4 fill-current text-black"
        viewBox="0 0 24 24"
      >
        <path d="M4 17h16v2H4v-2zm1.2-2l-2.2-9 5 4.5L12 3l4 7.5 5-4.5-2.2 9H5.2z" />
      </svg>
      <span>BUY PLAN</span>
    </button>
  );
};

const Button = () => <BuyPlanButton />;
export default Button;
