"use client";

import Container from "@/components/common/Container";
import { contactConfig } from "@/config/contactConfig";
import { singUpBenefits } from "@/constants/data";
import { motion } from "motion/react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const SingUpPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-shop_orange/5 via-shop_light_bg to-shop_light_green/45 relative overflow-hidden">
      <Container className="flex flex-col lg:flex-row gap-5 lg:gap-10">
        {/*-------Left------Side------*/}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-3/5 py-8 lg:py-10"
        >
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-3xl font-medium text-shop_dark_green mb-5 font-poppins">
                Jion {contactConfig.company.name}
              </h1>
              <p className="max-w-lg font-poppins">
                Create your account and unlock exclusive benefits, personalized
                recommendations and seamless shopping exeperiences
              </p>
            </motion.div>
            {/*---------Benefites--------*/}
            <div className="space-y-4">
              <div className="space-y-6">
                {singUpBenefits?.map((benefit, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    key={index}
                    className="flex items-center gap-4 mt-5 font-poppins"
                  >
                    <div className="p-2 bg-shop_orange/10 rounded-lg shrink-0">
                      <benefit.icon className="w-5 h-5 text-shop_orange" />
                    </div>
                    <div className="">
                      <h3 className="font-semibold text-shop_dark_green mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-dark-text">
                        {benefit.descreption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
                
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 bg-white/80 backdrop-blur-md rounded-md border border-shop_orange/10 p-6 shadow font-poppins space-y-1"
              >
                <p className="text-center text-shop_dark_green">
                  Trusted by <strong>50,000+ </strong>customers worldwide
                </p>
                <div className="flex items-center justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  <p className="text-center ml-2 text-sm">
                    4.5/5 average ratings
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-center justify-center gap-1.5 mt-3">
                <p className="font-medium">Questions? Contact us at</p>
                <Link href={`mailto:${contactConfig.emails.support}`} className="text-sm font-medium text-shop_light_green hover:text-shop_dark_green hoverEfect">{contactConfig.emails.support}</Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/*-------Right------Side------*/}
        <motion.div className="w-full lg:w-2/5">right</motion.div>
      </Container>
    </div>
  );
};

export default SingUpPage;
