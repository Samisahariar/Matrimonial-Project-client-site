import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { BackgroundGradient } from "../ui/background-gradient";


// Sidebar component that manages its own state
export const Sidebar = ({ children, className }) => {
  // Local state to manage sidebar visibility
  return (
    <>
      <MobileSidebar className={className}>
        {children}
      </MobileSidebar>
      <DesktopSidebar className={className}>
        {children}
      </DesktopSidebar>
    </>
  );
};

// Desktop Sidebar component
export const DesktopSidebar = ({ className, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  return (
    <motion.div
      className={cn(
        "shadow-xl shadow-red-400 h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0 border border-l-0 border-t-0 border-b-0 rounded-r-lg border-r-4 border-red-400",
        className
      )}
      animate={{
        width: isOpen ? "300px" : "60px",
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
    </motion.div>
  );
};

// Mobile Sidebar component
export const MobileSidebar = ({ isOpen, toggleSidebar, className, children }) => {
  const [ismobileOpen, setMobileIsOpen] = useState(false)
  return (
    <div className={cn("h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full border-r-4 border-red-400 border", className)}>
      <div className="flex justify-end z-20 w-full">
        <IconMenu2 className="text-neutral-800 dark:text-neutral-200" onClick={() => setMobileIsOpen(!ismobileOpen)} />
      </div>
      <AnimatePresence>
        {ismobileOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn("fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between")}
          >
            <div className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200" onClick={toggleSidebar}>
              <IconX onClick={() => setMobileIsOpen(!ismobileOpen)} />
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export const SidebarBody = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col flex-1 overflow-y-auto overflow-x-hidden", className)}>
      {children}
    </div>
  );
};

// Sidebar Link component
export const SidebarLink = ({ link, className, ...props }) => {
  return (
    <Link to={link.href} className={cn("hover:bg-red-400 hover:p-3 hover:rounded-xl flex items-center justify-start gap-2 group/sidebar py-2", className)} {...props}>
      {link.icon}
      <span className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block">
        {link.label}
      </span>
    </Link>
  );
};
