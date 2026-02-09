import React from "react";

const RightSidebar: React.FC = () => {
  return (
    <>
      {/* Desktop Right Sidebar - shows on lg and above */}
      <div className="hidden lg:flex flex-col items-center fixed bottom-0 right-4 lg:right-8 w-10 z-10">
        <div className="flex flex-col items-center space-y-6">
          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vishalprabhakaran18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8892b0] hover:text-red-400 transition-all duration-300 hover:-translate-y-1 p-2 rounded-lg hover:bg-white/10"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <title>Gmail</title>
              <path
                d="M4 4h16a2 2 0 0 1 2 2v12a2 
                       2 0 0 1-2 2H4a2 2 0 0 1-2-2V6
                       a2 2 0 0 1 2-2z"
              />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918838739288"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-[#8892b0] hover:text-green-400 transition-all duration-300 hover:-translate-y-1 p-2 rounded-lg hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </a>
        </div>

        <div className="w-px h-24 bg-[#64ffda]/20 mt-6 relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#64ffda] rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
