"use client";

import Container from "@/components/common/Container";
import { contactConfig } from "@/config/contactConfig";
import { motion } from "motion/react";

const SingUpPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-shop_orange/5 via-shop_light_bg to-shop_light_green/45 relative overflow-hidden">
      <Container className="flex flex-col lg:flex-row gap-5 lg:gap-10">
        {/*-------Left------Side------*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-3/5"
        >
          <div className="">
            <motion.div className="">
              <h1 className="text-4xl sm:text-3xl font-medium text-shop_dark_green mb-5 font-poppins">
                Jion {contactConfig.company.name}
              </h1>
              <p className="max-w-lg font-poppins">
                Create your account and unlock exclusive benefits, personalized
                recommendations and seamless shopping exeperiences
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/*-------Right------Side------*/}
        <motion.div className="w-full lg:w-2/5">right</motion.div>
      </Container>
    </div>
  );
};

export default SingUpPage;
