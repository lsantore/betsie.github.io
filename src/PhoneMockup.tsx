import {
  ChevronLeft,
  Calendar,
  Gavel,
  Globe,
  Send,
  Battery,
  Wifi,
  Signal
} from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] shrink-0 sm:max-w-[360px]">
      {/* Phone Frame */}
      <div className="relative aspect-[9/19.5] w-full rounded-[3rem] border-[8px] border-zinc-900 bg-white shadow-2xl overflow-hidden ring-4 ring-zinc-800/20">
        
        {/* Dynamic Island Area */}
        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
          <div className="w-1/3 h-6 bg-zinc-900 rounded-b-3xl"></div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-3 left-8 text-[12px] font-bold text-zinc-900 z-40">
          11:59
        </div>
        <div className="absolute top-3.5 right-8 flex gap-1.5 z-40 text-zinc-900 items-center">
          <Signal size={14} fill="currentColor" />
          <Wifi size={14} />
          <Battery size={16} fill="currentColor" />
        </div>

        {/* App Content */}
        <div className="absolute inset-0 bg-white pt-14 pb-6 flex flex-col h-full overflow-hidden font-sans">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 pb-4 border-b border-zinc-100">
            <button className="flex items-center text-zinc-900 font-medium text-lg -ml-1">
              <ChevronLeft size={28} strokeWidth={2.5} />
              Back
            </button>
            {/* Title centered absolutely to ensure it's in the middle if needed, but flex justify-between works if right side is empty */}
          </div>

          <div className="flex-1 overflow-y-auto hide-scrollbar">
            
            {/* Title */}
            <h1 className="text-center font-black text-2xl mt-4 mb-8 text-zinc-900 tracking-tight">
              Nailed It!
            </h1>

            {/* Winner Badge */}
            <div className="relative px-2 sm:px-4">
              <span 
                className="absolute -top-8 left-10 text-[#F5304C] text-3xl rotate-[-15deg] z-10"
                style={{ fontFamily: '"Caveat", cursive' }}
              >
                Winner!
              </span>

              {/* Matchup Area */}
              <div className="flex items-end justify-between mb-2">
                
                {/* User 1 (Winner) */}
                <div className="flex flex-col items-center gap-2 w-[38%] relative">
                  <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#F5304C] to-pink-500 shadow-lg">
                    <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-zinc-200">
                       <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Betty" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="font-bold text-zinc-900 text-lg leading-none">Betty</span>
                  <div className="flex gap-2 text-xs font-bold text-zinc-500 mt-1">
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-zinc-900 text-sm">1</span>
                      <span className="text-[9px] uppercase tracking-wide">Wins</span>
                    </div>
                    <div className="w-px h-6 bg-zinc-200"></div>
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-zinc-900 text-sm">0</span>
                      <span className="text-[9px] uppercase tracking-wide">Losses</span>
                    </div>
                    <div className="w-px h-6 bg-zinc-200"></div>
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-zinc-900 text-sm">0</span>
                      <span className="text-[9px] uppercase tracking-wide">Draws</span>
                    </div>
                  </div>
                </div>

                {/* Scoreboard Middle */}
                <div className="flex flex-col items-center justify-center pb-8 w-[24%]">
                  <div className="flex shadow-sm rounded-lg overflow-hidden mb-2">
                    <div className="bg-blue-600 text-white w-7 sm:w-8 h-10 flex flex-col items-center justify-center">
                      <span className="font-bold text-lg leading-none">1</span>
                      <span className="text-[7px] font-bold opacity-90">Wins</span>
                    </div>
                    <div className="bg-pink-200 text-pink-700 w-7 sm:w-8 h-10 flex flex-col items-center justify-center">
                      <span className="font-bold text-lg leading-none">0</span>
                      <span className="text-[7px] font-bold opacity-90">Losses</span>
                    </div>
                    <div className="bg-yellow-300 text-yellow-800 w-7 sm:w-8 h-10 flex flex-col items-center justify-center">
                      <span className="font-bold text-lg leading-none">0</span>
                      <span className="text-[7px] font-bold opacity-90">Draws</span>
                    </div>
                  </div>
                  <span className="text-[#F5304C] font-black text-lg italic">VS</span>
                </div>

                {/* User 2 (Loser) */}
                <div className="flex flex-col items-center gap-2 w-[38%]">
                  <div className="w-20 h-20 rounded-full p-1 bg-zinc-100">
                    <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-zinc-200">
                       <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Kat" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="font-bold text-zinc-900 text-lg leading-none">Kat</span>
                  <div className="flex gap-2 text-xs font-bold text-zinc-500 mt-1">
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-zinc-900 text-sm">0</span>
                      <span className="text-[9px] uppercase tracking-wide">Wins</span>
                    </div>
                    <div className="w-px h-6 bg-zinc-200"></div>
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-zinc-900 text-sm">1</span>
                      <span className="text-[9px] uppercase tracking-wide">Losses</span>
                    </div>
                    <div className="w-px h-6 bg-zinc-200"></div>
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-zinc-900 text-sm">1</span>
                      <span className="text-[9px] uppercase tracking-wide">Draws</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bet Info */}
            <div className="px-6 mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-1">I bet...</h3>
                <p className="text-zinc-800 leading-snug font-medium">
                  The little piggy will be safe from the wolf in the straw house
                </p>
              </div>

              <div className="flex justify-between">
                <div className="flex-1">
                   <h4 className="text-sm font-bold text-zinc-900 mb-1">Bet Ended On</h4>
                   <div className="flex items-center gap-2 text-zinc-600 text-sm font-medium">
                     <Calendar size={16} className="text-[#F5304C]" />
                     Feb 19, 2026 | 5:15 PM
                   </div>
                </div>
                <div className="flex-1 pl-4">
                   <h4 className="text-sm font-bold text-zinc-900 mb-1">Decision Method</h4>
                   <div className="flex items-center gap-2 text-zinc-600 text-sm font-medium">
                     <div className="bg-[#F5304C]/10 p-1 rounded">
                       <Gavel size={16} className="text-[#F5304C]" />
                     </div>
                     Judge
                   </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-zinc-900 mb-1">Who Can See This?</h3>
                <div className="flex items-center gap-2 text-zinc-800 text-sm font-medium">
                  <Globe size={16} className="text-[#F5304C]" />
                  Everyone and your mom (public)
                </div>
              </div>

            </div>
          </div>

          {/* Footer / Comments */}
          <div className="mt-auto border-t border-zinc-100 bg-white px-6 py-4">
             <div className="flex justify-between items-center mb-4">
               <span className="font-bold text-zinc-900">Comments</span>
               <span className="text-zinc-400 font-medium text-sm">No Comments</span>
             </div>
             
             <p className="text-zinc-400 text-sm mb-4">Be the first to comment</p>
             
             <div className="relative">
               <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center">
                 <span className="text-zinc-500 text-xs">:)</span>
               </div>
               <input 
                 type="text" 
                 placeholder="Write a comment..." 
                 className="w-full bg-white border border-[#F5304C]/30 rounded-full py-3 pl-11 pr-12 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-[#F5304C] focus:ring-1 focus:ring-[#F5304C]"
               />
               <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-transparent text-[#F5304C] hover:bg-rose-50 rounded-full transition-colors">
                 <Send size={18} fill="currentColor" />
               </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
