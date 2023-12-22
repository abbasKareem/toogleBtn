import { useAnimation, motion } from "framer-motion";


const FramerMotionBtn = ({ checked, label }: { checked: boolean; label: string }) => {
    const boxControl = useAnimation();
    const iconControl = useAnimation();

    useEffect(() => {
        const animateIcons = async () => {
            if (checked) {
                boxControl.start({ x: "40px", transition: { type: "spring", stiffness: 200, duration: 2 } });
                iconControl.start({
                    x: 0,
                    transition: { type: "spring", stiffness: 200, duration: 2 },
                });
            } else {
                iconControl.start({
                    x: "-40px",
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        duration: 2,
                    },
                });
                boxControl.start({ x: 0, transition: { type: "spring", stiffness: 200, duration: 2 } });
            }
        };

        animateIcons();
    }, [boxControl, checked, iconControl]);

    return (
        <div className="relative border w-[100px] h-full rounded-lg flex items-center gap-0.5 overflow-hidden duration-300 bg-secondary">
            <p className={`z-10 p-1 text-lg text-start w-[60%] overflow-hidden transition-colors duration-300 ${checked ? "bg-red-500 text-white" : "bg-secondary"}`}>{label}</p>
            <div className="absolute border-r-2 border-r-red-500 w-[40%] h-full left-0 flex items-center justify-center">
                <motion.div animate={boxControl} className="absolute border-gray-500 rounded-sm border-2 w-6 h-6" />
                <motion.div className={`w-full h-full flex items-center justify-center `} animate={iconControl}>
                    <Icon icon="check" className={`w-10 h-10 fill-yellow-500`} />
                </motion.div>
            </div>
        </div>
    );
};