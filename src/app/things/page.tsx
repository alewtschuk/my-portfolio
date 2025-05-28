import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';

// Link Component
interface CustomLinkProps {
  href: string;
  text: string;
  className?: string;
}

function CustomLink({ href, text, className = "" }: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={`custom-link inline-flex items-center ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="border-b border-dotted border-gray-400">{text}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 w-3 h-3">
        <path d="M7 7h10v10"></path>
        <path d="M7 17 17 7"></path>
      </svg>
    </Link>
  )
}

function HomeLink({ href, text, className = "" }: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={`mail-link inline-flex items-center ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{text}</span>
    </Link>
  )
}

// Item Component
interface ItemProps {
  number: string;
  content: React.ReactNode;
}

function Item({ number, content }: ItemProps) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-4 font-mono text-xs">
      <span className="text-gray-500">{number}</span>
      <div className="text-gray-200">{content}</div>
    </div>
  )
}

export default function ThingsPage() {
  return (
    <main className="min-h-screen bg-[#191A1A] text-white p-6 md:p-12 lg:p-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-32 items-start">

          {/* About Me Section */}
          <div className="about-me">
            {/* <div className="w-full max-w-[150px]">
              <Image
                src="/portfolio_files/alex.jpeg"
                alt="Portrait of me"
                width={200}
                height={200}
                className="w-full"
              />
            </div> */}
            <h2 className="font-sans text-sm mb-1">
              <HomeLink href="/" text="[TAKE ME BACK HOME]" />
            </h2>
            <section>
            <div className="space-y-8 text-xs">
              <Item
                number="00"
                content={<p>launching rmapp, a native go based macos command line utility to serve as rm for your apps. no more drag to trash, no more artifacts</p>}
              />
              <Item
                number="01"
                content={
                  <p>
                    graduated with a bachelors of science in computer science @{" "}
                    <CustomLink href="https://www.boisestate.edu/coen-cs/" text="boise state university" />
                    {" "}and data analytics certified by google
                  </p>
                }
              />
              <Item
                number="02"
                content={<p>deep diving distributed systems, consensus mechanisms, and web3 use cases</p>}
              />
              <Item
                number="03"
                content={<p>interested in biohacking and biological perfomance enhancement. what works, what doesn't, and how inputs == outputs.</p>}
              />
            </div>
          </section>
            <div className="space-y-12">
              <div>
                <h2 className="font-sans text-sm mb-4 mt-max">FIND ME ON THE INTERNET @</h2>
                <div className="font-mono text-xs space-y-4">
                  <div className="flex gap-4">
                    <CustomLink href="https://github.com/alewtschuk" text="github" />
                    <CustomLink href="https://linkedin.com/in/alewtschuk" text="linkedin" />
                  </div>
                  <div className="flex gap-4">
                    <CustomLink href="https://medium.com/alewtschuk" text="medium" />
                    <CustomLink href="https://x.com/iambecomewhale" text="x" />
                  </div>
                </div>
              </div>
            </div>
            <div className="font-sans text-[10px] text-gray-600/50 mt-4">
              inspired by @tylerkim inspired by @tinabmai. good developers copy, great develeopers steal, or something like that...
            </div>
          </div>

          {/* Spacer Column */}
          <div></div>

          {/* Currently Section */}
          

          {/* Previously Section */}
          <section>
            <div className="hidden lg:block">
              <h2 className="font-sans text-base mb-12">PAST</h2>
            </div>

            <div className="lg:hidden mb-12 space-y-4">
              <h2 className="font-sans text-sm">PAST</h2>
              <div className="w-full border-t border-dotted border-gray-400"></div>
            </div>

            <div className="space-y-8">
              <Item
                number="00"
                content={
                  <p>
                    architected and developed a novel hipa compliant blockchain protocol,{" "}
                    <CustomLink href="https://link.springer.com/chapter/10.1007/978-981-97-3289-0_32" text="PharmaSys" />,
                    {" "}backed by the national science foundation to prevent prescription missuse. spoke @{" "}
                    <CustomLink href="https://icict.co.uk/home.php" text="ICICT" /> 2024
                  </p>
                }
              />
              <Item
                number="01"
                content={
                  <p>
                    worked with market makers, l1/l2s, and some of the best minds in web3 producing technical and market research @{" "}
                    <CustomLink href="https://www.theblock.co/" text="The Block" />
                  </p>
                }
              />
              <Item
                number="02"
                content={
                  <p>
                    authored another{" "}
                    <CustomLink href="/portfolio_files/survey.pdf" text="paper" />
                    {" "}on web3 use cases within medical applications in tandem with phd guidance, backed by the{" "}
                    <CustomLink href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2051127" text="NSF" />
                    {" "}currently in pre-submission.
                  </p>
                }
              />
              <Item
                number="03"
                content={
                  <p>
                    involved in developing{" "}
                    <CustomLink href="https://www.boisestate.edu/coen/news-events/annual-design-showcase/design-showcase-brochure/#:~:text=CS%2D2%20Coachr,to%20the%20game" text="coachr" />
                    {" "}an AI driven golf training application.
                  </p>
                }
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}