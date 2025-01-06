import { motion } from "motion/react";
import React from "react";

const FastAndCrafted = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="px-6 md:px-0 md:w-4/5 xl:w-[1000px] mx-auto py-24 ">
        {/* Fast */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-10 justify-between w-full"
        >
          <img
            className="md:max-w-[50%] xl:max-w-[475px] aspect-[4/3] object-cover rounded-3xl"
            src="/images/fast.avif"
            alt="fast"
          />

          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-left">
              Fast
            </h2>

            <p className="max-w-72 my-6 xl:my-10 md:text-xl lg:text-2xl text-[#888888] font-medium text-left">
              We move quickly from establishing your vision to getting the job
              done.
            </p>
          </div>
        </motion.div>

        {/* Perfectly crafted */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-10 justify-between w-full mt-10"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-left">
              Perfectly crafted
            </h2>

            <p className="max-w-72 my-6 xl:my-10 md:text-xl lg:text-2xl text-[#888888] font-medium text-left">
              We take pride in our work and we believe it shows.
            </p>
          </div>

          <img
            className="md:max-w-[50%] xl:max-w-[475px] aspect-[4/3] object-cover rounded-3xl order-1 md:order-2"
            src="/images/perfectly_crafted.avif"
            alt="fast"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FastAndCrafted;
