import { motion } from "framer-motion";

type LightConeProps = {
    leftCone?: boolean;
};

const LightCone = ({ leftCone }: LightConeProps) => {
    const getSide = (left = false) => {
        return left ? "left" : "right";
    };
    return (
    <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "50rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={`absolute inset-auto ${getSide(leftCone)}-1/2 h-56 overflow-visible w-[50rem] bg-gradient-conic from-zinc-500 via-transparent to-transparent text-white [--conic-position:from_${leftCone ? 70 : 280}deg_at_center_top]`}
        >
          <div className={`absolute  w-[100%] ${getSide(!leftCone)}-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]`} />
          <div className={`absolute  w-40 h-[100%] ${getSide(!leftCone)}-0 bg-zinc-950  bottom-0 z-20 [mask-image:linear-gradient(to_${getSide(leftCone)},white,transparent)]`} />
        </motion.div>
)};

export default LightCone;
