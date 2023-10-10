import { motion } from "framer-motion";
import pdf from "../../public/assets/FC_CV.pdf";

export const Links = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
    >
      <div className="py-5 text-center">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex justify-center items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <a
                href="https://github.com/nearhanfarhan"
                title="GitHub"
                aria-label="GitHub"
                target="_blank"
                draggable="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  class="w-8 h-8"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </motion.div>

            <motion.div className="svg-icon" whileHover={{ scale: 1.1 }}>
              <a
                href="https://www.linkedin.com/in/farhan-chaudhry-670213135/"
                title="LinkedIn"
                aria-label="LinkedIn"
                target="_blank"
                draggable="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  class="w-8 h-8"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
              </a>
            </motion.div>

            <motion.div className="svg-icon" whileHover={{ scale: 1.1 }}>
              <a
                href={pdf}
                title="LinkedIn"
                aria-label="LinkedIn"
                target="_blank"
                draggable="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 24 24"
                  class="w-8 h-8"
                >
                  <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
        <p className="text-sm mt-2  opacity-50">
          &copy; {new Date().getFullYear()} Farhan Chaudhry. <br /> Website
          created using React, Tailwind, Framer
        </p>
      </div>
    </motion.div>
  );
};
