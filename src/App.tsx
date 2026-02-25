import { motion } from "framer-motion";
import { 
  Flame, 
  Tv, 
  Camera, 
  Sparkles, 
  Target, 
  Coffee, 
  CheckCircle, 
  Trophy,
  Apple
} from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

// Better Logo approach: Just a nice 4-heart clover icon from standard paths
function BestLogo() {
   return (
     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
       <path d="M12 2C14.5 2 16 3.5 16 6C16 8.5 12 12 12 12C12 12 8 8.5 8 6C8 3.5 9.5 2 12 2Z" fill="currentColor" opacity="0.2"/>
       <path d="M12 22C9.5 22 8 20.5 8 18C8 15.5 12 12 12 12C12 12 16 15.5 16 18C16 20.5 14.5 22 12 22Z" fill="currentColor" opacity="0.2"/>
       <path d="M22 12C22 14.5 20.5 16 18 16C15.5 16 12 12 12 12C12 12 15.5 8 18 8C20.5 8 22 9.5 22 12Z" fill="currentColor" opacity="0.2"/>
       <path d="M2 12C2 9.5 3.5 8 6 8C8.5 8 12 12 12 12C12 12 8.5 16 6 16C3.5 16 2 14.5 2 12Z" fill="currentColor" opacity="0.2"/>
       <path d="M12 2C14.5 2 16 3.5 16 6C16 8.5 12 12 12 12M12 12C12 12 8 8.5 8 6C8 3.5 9.5 2 12 2M12 12C12 12 16 15.5 16 18C16 20.5 14.5 22 12 22M12 12C12 12 8.5 16 6 16C3.5 16 2 14.5 2 12M12 12C12 12 15.5 8 18 8C20.5 8 22 9.5 22 12M12 12C12 12 8.5 16 6 16C3.5 16 2 14.5 2 12M6 8C3.5 8 2 9.5 2 12M18 16C20.5 16 22 14.5 22 12" />
       {/* Drawing the actual knot is tricky, I will use a simple "Command" loop style which looks like the logo */}
       <path d="M9 9 L15 9 L15 15 L9 15 Z" stroke="none" />
       <path d="M9 9 C9 6 6 6 6 9 C6 12 9 12 9 12 L15 12 C15 12 18 12 18 9 C18 6 15 6 15 9" />
       <path d="M15 15 C15 18 18 18 18 15 C18 12 15 12 15 12 L9 12 C9 12 6 12 6 15 C6 18 9 18 9 15" />
       <path d="M9 9 L9 15" />
       <path d="M15 9 L15 15" />
     </svg>
   )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#fdfaf6]/80 backdrop-blur-md border-b border-[#F5304C]/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {/* Logo icon */}
          <div className="relative flex h-10 w-10 items-center justify-center text-[#F5304C]">
             <BestLogo />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#F5304C]">Betsie</span>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-semibold text-[#F5304C] hover:text-[#D42A43] transition-colors">About</a>
            <a href="#support" className="text-sm font-semibold text-[#F5304C] hover:text-[#D42A43] transition-colors">Support</a>
          </nav>
          <button className="rounded-full bg-[#F5304C] px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#D42A43] transition-all hover:scale-105 active:scale-95 shadow-[#F5304C]/20">
            Download App
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fdfaf6] pt-16 sm:pt-24 lg:pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5304C]/5 to-transparent" />
      
      {/* Decorative Blob */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-[#F5304C]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              Call The Chaos.<br />
              Get The Receipts.
            </h1>
            <p className="text-4xl sm:text-5xl lg:text-6xl text-[#F5304C] mb-8 tracking-wide transform -rotate-2" style={{ fontFamily: '"Caveat", cursive' }}>
              Claim Your Main Character Glory.
            </p>
            
            <div className="space-y-6 text-lg text-zinc-600 mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              <p>
                Betsie turns those "I told you so!" moments into <strong className="text-[#F5304C] font-bold">permanent, indisputable receipts</strong>.
              </p>
              <p>
                Track your predictive genius on a <strong className="text-zinc-900 font-bold">real-time scoreboard</strong> against your whole circle. If you have the superior insight, you deserve the glory.
              </p>
              <p className="bg-[#F5304C]/5 p-4 rounded-2xl border border-[#F5304C]/10 italic">
                Loser buys the espresso martini? Winner decides the group vacation spot? <strong className="text-[#F5304C] font-bold not-italic">It's time to settle the score with zero chill.</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="rounded-full bg-[#F5304C] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#F5304C]/30 hover:shadow-[#F5304C]/50 transition-all hover:-translate-y-1">
                Download Betsie Now
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
             {/* Background shape behind phone */}
             <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-[#F5304C]/30 rounded-[3rem] transform rotate-3 scale-95 opacity-50 blur-lg"></div>
             <PhoneMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const USE_CASES = [
  {
    title: "Breakup Arc Energy",
    icon: Flame,
    color: "text-[#F5304C]",
    bg: "bg-[#FFE5EA]",
    border: "border-[#F5304C]",
    desc: "Which friend is giving off major breakup arc energy (and when it's going down)"
  },
  {
    title: "Reality TV Drama",
    icon: Tv,
    color: "text-purple-500",
    bg: "bg-purple-100",
    border: "border-purple-300",
    desc: "If the latest reality TV couple will make it past the reunion special"
  },
  {
    title: "The Soft Launch",
    icon: Camera,
    color: "text-blue-500",
    bg: "bg-blue-100",
    border: "border-blue-300",
    desc: "When your friend will soft-launch their new thing (and then immediately delete it)"
  },
  {
    title: "The Trend Cycle",
    icon: Sparkles,
    color: "text-amber-500",
    bg: "bg-amber-100",
    border: "border-amber-300",
    desc: "How long before your most chaotic friend tries a spicy new diet and gives up immediately"
  }
];

function UseCases() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5304C] tracking-tight mb-4">
            Make Bets on the Delicious Chaos of Everyday Life:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {USE_CASES.map((useCase, idx) => (
            <motion.div 
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Decorative dashed border behind */}
              <div className={`absolute inset-0 border-2 border-dashed ${useCase.border} rounded-3xl transform translate-x-2 translate-y-2 opacity-50 transition-transform group-hover:translate-x-3 group-hover:translate-y-3`} />
              
              <div className="relative h-full bg-white rounded-3xl border-2 border-zinc-100 p-8 shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-md flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl ${useCase.bg} ${useCase.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                  <useCase.icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{useCase.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed font-medium">{useCase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    num: "1",
    title: "Set the Scene & The Rules",
    icon: Target,
    desc: "Pick your prediction, invite one or multiple friends, and define the timeframe. They can agree to your terms or choose alternate outcomes before the clock starts ticking. No take-backs!"
  },
  {
    num: "2",
    title: "Raise the Stakes (Optional)",
    icon: Coffee,
    desc: "Agree on a fun, low-stakes consequence—buying lunch, posting a dare, or making the loser wear a ridiculous hat for the day. You set the rules!"
  },
  {
    num: "3",
    title: "Close the Bet & Get Confirmation",
    icon: CheckCircle,
    desc: "When the outcome happens (or the deadline hits), all involved parties must agree on the result in the app. No cheating, the app makes sure it's 100% mutual."
  },
  {
    num: "4",
    title: "Memorialize the Win/Loss Record",
    icon: Trophy,
    desc: "The win is permanently logged on your profile! Your W/L ratio automatically updates, cementing your status as a certified psychic (or maybe just a certified hottie)."
  }
];

function Playbook() {
  return (
    <section className="py-24 bg-[#FFE5EA]/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-blue-600 tracking-tight mb-4">
            How The Chaos Gets Logged: The Betsie Playbook
          </h2>
          <p className="text-lg text-zinc-600 font-medium">
            Turn your group chat banter into an official W/L record in four iconic steps. This is how the receipts are made:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {STEPS.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-[#F5304C]/10 relative overflow-hidden group"
            >
              <div className="flex gap-6 items-start">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#F5304C] text-white font-black text-xl flex items-center justify-center shadow-lg shadow-[#F5304C]/30 mb-2 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <div className="w-1 h-full bg-[#FFE5EA] rounded-full group-last:hidden" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="text-[#F5304C]" size={24} />
                    <h3 className="text-xl font-bold text-zinc-900">{step.title}</h3>
                  </div>
                  <p className="text-zinc-600 leading-relaxed font-medium text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto bg-gradient-to-r from-[#FFE5EA] to-amber-100 p-1 rounded-2xl"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
             <p className="text-sm font-bold text-zinc-800">
               <span className="text-[#F5304C]">Your Vibe, Your Rules:</span> All bets are private between you and your involved friends unless you choose to share the results or invite others to spectate!
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFE5EA]/50 via-white to-white" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl font-black text-[#F5304C] tracking-tight mb-8 leading-tight">
          It's Not Just Gossiping.<br />
          <span className="text-[#FF4D6D]">It's Strategic, Receipt-Backed Analysis.</span>
        </h2>
        <p className="text-xl text-zinc-600 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
          Stop talking about it, be about it. Call the chaos. Catalog the disasters. Log every victory. Get Betsie™ now.
        </p>
        
        <button className="inline-flex items-center gap-3 bg-zinc-900 text-white rounded-2xl px-8 py-4 hover:bg-zinc-800 transition-all hover:-translate-y-1 shadow-2xl shadow-zinc-900/20">
          <Apple size={32} />
          <div className="text-left flex flex-col justify-center leading-none">
            <span className="text-[10px] font-semibold tracking-wider uppercase mb-1 opacity-80">Download on the</span>
            <span className="text-2xl font-semibold -mt-1">App Store</span>
          </div>
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-50 py-12 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h4 className="font-bold text-zinc-900 mb-6">Site Links</h4>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          {['About Us', 'Privacy Policy', 'Terms of Service', 'Community Guidelines', 'Support'].map((link) => (
            <a key={link} href="#" className="text-sm font-semibold text-[#F5304C] hover:text-[#D42A43] transition-colors">
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs text-zinc-400 font-medium">
          Betsie is a Trademark of Squeaky Cheese, Inc. - Site © {new Date().getFullYear()} Squeaky Cheese, Inc.
        </p>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] font-sans selection:bg-[#FFE5EA] selection:text-[#D42A43]">
      <Header />
      <main>
        <Hero />
        <UseCases />
        <Playbook />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
