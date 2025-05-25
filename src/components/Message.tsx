import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          HAPPY BIRTHDAY BCHHAA🎂❤,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          I know we aren't together anymore but I still love you from the bottom of my heart. I miss you sometimes it's even  makes me cry........🥲❤i feel so lucky that someone like you came into my life and love me unconditionally , i thought you were the one who will be my future wife or the mother of my children but god made us separate🙂❤‍🩹but I'm not gonna give up on you, i will always love you no matter whatever the situation is..!!! i will always there for you, I'm gonna love you forever no matter you're with me or not 🫶❤‍🩹🦢
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          one's again Happy Birthday my bchhaa❤🎂
Love you more than words can describe 🎀
I hope your every dreams come true whatever you've wished for 🫶🦢
Buss aap hamesha khush rho , happy rho, healthy tho or kuch ni chahiye..........🙂❤

        </p>
      </motion.div>
    </div>
  );
};

export default Message;