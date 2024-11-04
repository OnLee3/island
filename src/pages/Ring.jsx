import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Ring() {
  const [isSilent, setSilent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSilent((prev) => !prev);
    }, 2000);
  }, [isSilent]);
  return (
    <motion.div
      animate={{ width: isSilent ? 148 : 128 }}
      className="relative h-7 flex justify-between items-center px-2.5"
    >
      <AnimatePresence>
        {isSilent ? (
          <motion.div
            initial={{ width: 0, opacity: 0, filter: "blur(4px)" }}
            animate={{ width: 40, opacity: 1, filter: "blur(0px)" }}
            exit={{ width: 0, opacity: 0, filter: "blur(4px)" }}
            className="rounded-full absolute left-[5px] h-[18px] bg-red-600"
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <motion.div initial={false} animate={{
        rotate: isSilent ? [0, -15, 5, -2, 0] : [0, 20, -15, 12.5, -10, 10, -7.5, 7.5, -5, 5, 0],
        x: isSilent ? 9 : 0
      }} className="relative w-[11.25px] h-[12.75px]">
        <svg
          className="inset-0"
          width="11.25"
          height="12.75"
          viewBox="0 0 15 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.17969 13.3125H13.5625C14.2969 13.3125 14.7422 12.9375 14.7422 12.3672C14.7422 11.5859 13.9453 10.8828 13.2734 10.1875C12.7578 9.64844 12.6172 8.53906 12.5547 7.64062C12.5 4.64062 11.7031 2.57812 9.625 1.82812C9.32812 0.804688 8.52344 0 7.36719 0C6.21875 0 5.40625 0.804688 5.11719 1.82812C3.03906 2.57812 2.24219 4.64062 2.1875 7.64062C2.125 8.53906 1.98438 9.64844 1.46875 10.1875C0.789062 10.8828 0 11.5859 0 12.3672C0 12.9375 0.4375 13.3125 1.17969 13.3125ZM7.36719 16.4453C8.69531 16.4453 9.66406 15.4766 9.76562 14.3828H4.97656C5.07812 15.4766 6.04688 16.4453 7.36719 16.4453Z"
            fill="black"
          />
        </svg>
      </motion.div>
      <AnimatePresence mode="popLayout" initial={false}>
        {isSilent ? (
          <motion.span
            key="silent"
            initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
            className="text-xs text-red-600"
          >
            Silent
          </motion.span>
        ) : (
          <motion.span
            key="ring"
            initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
            className="text-xs text-black"
          >
            Ring
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
